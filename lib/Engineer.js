const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(github){
        super();

        this.github = github;
    }

    getGithub(){
        return `Employee's Git hub is ${this.github}`;
    }

    getRole(){
        return 'Engineer';
    }   
}

module.exports = Engineer;