const Employee = require("./Employee.js");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// const Intern = require("../lib/Intern");

class Intern extends Employee {

// test("Can set school via constructor", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.school).toBe(testValue);
// });

    constructor (name = "", id = "", email = "", school = "") {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    };

// test("getRole() should return \"Intern\"", () => {
//   const testValue = "Intern";
//   const e = new Intern("Foo", 1, "test@test.com", "UCLA");
//   expect(e.getRole()).toBe(testValue);
// });

    getRole() {
        return this.role;
    };

// test("Can get school via getSchool()", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.getSchool()).toBe(testValue);
// });

    getSchool() {
        return this.school;
    };
};

module.exports = Intern;
