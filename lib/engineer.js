class engineer {
    constructor(name, email, id, github) {
       super(name, email, id);
       this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getPosition() {
        return "Engineer";
    }
}

module.exports = engineer;