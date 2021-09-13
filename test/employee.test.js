const employee = require('../lib/employee');

describe("employee", () => {
    it("Should have an employee id, email, and name", () => {
        const Employee = new employee("1",  "bob@bob.com", "Bob")
        expect(employee.id).toEqual("1")
        expect(employee.email).toEqual("bob@bob.com")
        expect(employee.name).toEqual("Bob")
    })
})