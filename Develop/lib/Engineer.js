const Employee = require("./Employee.js");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// const Engineer = require("../lib/Engineer");

    class Engineer extends Employee {

// test("Can set GitHUb account via constructor", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.github).toBe(testValue);
// });
        constructor(name = "", id = "", email = "", gitHubId = "") {
            super(name, id, email);
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
