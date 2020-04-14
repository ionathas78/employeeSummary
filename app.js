const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const gitInquire = require("./gitInquire");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const _members = [];
let _newMember;
let _newMemberName;
let _currentIndex = -1;

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function getMembers() {
    _currentIndex++;
    _newMember = null;

    inquirer.
    prompt(
    {
        name: "name",
        type: "input",
        message: "Team member #" + _currentIndex + " name:"
    })
    .then(result => {
        if (result.name == "") {
            renderTeam(_members);

        } else {
            _newMemberName = result.name;


            inquirer.
            prompt(
            {
                name: "role",
                type: "list",
                message: "Team member #" + _currentIndex + " role:",
                choices: ["Intern", "Engineer", "Manager"]
            }).then(result => {
                let _newMemberRole = result.role;

                let inqPrompts = [
                    {
                        name: "id",
                        type: "input",
                        message: "            #" + _currentIndex + " id:"
                    },
                    {
                        name: "email",
                        type: "input",
                        message: "            #" + _currentIndex + " email:",
                    },
                    {
                        name: "avatarURL",
                        type: "input",
                        message: "            #" + _currentIndex + " avatar URL:",
                    }
                ];

                switch (_newMemberRole) {
                    case "Intern":
                        inqPrompts.push({
                            name: "school",
                            type: "input",
                            message: "            #" + _currentIndex + " school:"
                        });
                        break;
                    case "Engineer":
                        inqPrompts.push({
                            name: "gitHub",
                            type: "input",
                            message: "            #" + _currentIndex + " GitHub username:"
                        });
                        break;
                    case "Manager":
                        inqPrompts.push({
                            name: "office",
                            type: "input",
                            message: "            #" + _currentIndex + " Office Number:"
                        });
                        break;
                    default:
                };

                inquirer
                .prompt(inqPrompts)
                .then(result => {
                    _newMember = { 
                        name: _newMemberName,
                        role: _newMemberRole,
                        id: result.id,
                        email: result.email,
                        avatarURL: result.avatarURL,
                        additional: ""
                    };
                    if (result.gitHub) {
                        _newMember.additional = result.gitHub;

                    };
                    if (result.school) {
                        _newMember.additional = result.school;
                    };
                    if (result.office) {
                        _newMember.additional = result.office;
                    };

                    switch (_newMemberRole) {
                        case "Employee":
                            _members.push(new Employee(_newMemberName, _newMember.id, _newMember.email, _newMember.avatarURL));
                            break;
                        case "Engineer":
                            if (_newMember.avatarURL == "") {
                                gitInquire.getGitUser(_newMember, _members);
                            } else {
                                _members.push(new Engineer(_newMemberName, _newMember.id, _newMember.email, _newMember.avatarURL, _newMember.additional));
                            };
                            break;
                        case "Intern":
                            _members.push(new Intern(_newMemberName, _newMember.id, _newMember.email, _newMember.avatarURL, _newMember.additional));
                            break;
                        case "Manager":
                            _members.push(new Manager(_newMemberName, _newMember.id, _newMember.email, _newMember.avatarURL, _newMember.additional));
                            break;
                        default:
                    };
    
                    // _members.push(_newMember);
                    console.log("------------");
                    getMembers();
                });
            });    
        };
    });
};

function renderTeam(memberArray) {
    // memberArray.forEach(element => {
    //     console.log(element.role + ": " + element.id + " - " + element.email);
    // });

    let htmlCode = render(memberArray);
    let outputFile = outputPath;
    fs.writeFile(outputFile, htmlCode, () => console.log("File '" + outputFile + "' written!"));
};


getMembers();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

