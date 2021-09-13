class intern {
    constructor(name, email, id, school) {
       super(name, email, id);
       this.school = school;

    }
    getSchool() {
        return this.school;
    }
    getPosition() {
        return "Intern";
    }
}

module.exports = intern;