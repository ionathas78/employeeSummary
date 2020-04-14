const Employee = require("./Employee.js");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee");

class Manager extends Employee {

// test("Can set office number via constructor argument", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.officeNumber).toBe(testValue);
// });

    constructor (name = "", id = "", email = "", officeNumber = "") {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    };

// test('getRole() should return "Manager"', () => {
//   const testValue = "Manager";
//   const e = new Manager("Foo", 1, "test@test.com", 100);
//   expect(e.getRole()).toBe(testValue);
// });

    getRole() {
        return this.role;  
    };

// test("Can get office number via getOffice()", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.getOfficeNumber()).toBe(testValue);
// });

    getOfficeNumber() {
        return this.officeNumber;
    };
};

module.exports = Manager;
