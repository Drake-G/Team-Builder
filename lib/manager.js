class manager {
    constructor(name, email, id, office) {
       super(name, email, id);
       this.office = office;

    }
    getOffice() {
        return this.office;
    }
    getPosition() {
        return "Manager";
    }
}

module.exports = intern;