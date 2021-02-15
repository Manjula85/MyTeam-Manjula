const Employee = require('../lib/Employee');

class Intern extends Employee{
    constructor(school){
        //Created a copy of the Employee class
        //Therefore has access to all it's data
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