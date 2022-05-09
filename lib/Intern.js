const Employee = require("./Employee");


class Intern extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;