const Employee = require("./Employee.js");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// const Engineer = require("../lib/Engineer");

const _DEFAULT_AVATARURL = "../Assets/user-profile-icon.jpg";

    class Engineer extends Employee {

// test("Can set GitHUb account via constructor", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.github).toBe(testValue);
// });
        constructor(name = "", id = "", email = "", avatarURL = "", gitHubId = "") {
            super(name, id, email, avatarURL);
            this.github = gitHubId;
            this.role = "Engineer";
        };

// test("getRole() should return \"Engineer\"", () => {
//   const testValue = "Engineer";
//   const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
//   expect(e.getRole()).toBe(testValue);
// });

        getRole() {
            return this.role;
        };

        getAvatar() {
            let returnString = "";
            if (this.avatarURL != "") {
                returnString = this.avatarURL;
            } else {
                returnString = _DEFAULT_AVATARURL;
            };
            return returnString;
        };

        isDefaultAvatar() {
            return (this.avatarURL == _DEFAULT_AVATARURL);
        };

// test("Can get GitHub username via getGithub()", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.getGithub()).toBe(testValue);
// });

        getGithub() {
            return this.github;
        };
};

module.exports = Engineer;
