// TODO: Write code to define and export the Employee class

// const Employee = require("../lib/Employee");


class Employee {

// test("Can instantiate Employee instance", () => {
//   const e = new Employee();
//   expect(typeof(e)).toBe("object");
// });

    constructor(name = "", id = "", email = "") {

// test("Can set name via constructor arguments", () => {
//   const name = "Alice";
//   const e = new Employee(name);
//   expect(e.name).toBe(name);
// });

        this.name = name;

// test("Can set id via constructor argument", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.id).toBe(testValue);
// });

        this.id = id;

// test("Can set email via constructor argument", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.email).toBe(testValue);
// });

        this.email = email;
        this.role = "Employee";
};

// test("Can get name via getName()", () => {
//   const testValue = "Alice";
//   const e = new Employee(testValue);
//   expect(e.getName()).toBe(testValue);
// });

    getName() {
        return this.name;
    };

// test("Can get id via getId()", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.getId()).toBe(testValue);
// });

    getId() {
        return this.id;
    };

// test("Can get email via getEmail()", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.getEmail()).toBe(testValue);
// });

    getEmail() {
        return this.email;
    };

// test("getRole() should return \"Employee\"", () => {
//   const testValue = "Employee";
//   const e = new Employee("Alice", 1, "test@test.com");
//   expect(e.getRole()).toBe(testValue);
// });

    getRole() {
        return this.role;
    };
};

module.exports = Employee;
