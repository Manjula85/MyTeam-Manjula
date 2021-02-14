const Employee = require('../lib/Employee');

class Intern extends Employee{
    constructor(school){
        super();

        this.school = school;
    }

    getSchool(){
        return `Employee's school is ${this.school}`;
    }

    getRole(){
        return 'Intern';
    }     

}

module.exports = Intern;