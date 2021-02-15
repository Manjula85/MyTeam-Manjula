const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(github){
        //Created a copy of the Employee class
        //Therefore has access to all it's data
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