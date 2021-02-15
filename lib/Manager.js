const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(officeNumber){
        //Created a copy of the Employee class
        //Therefore has access to all it's data
        super();

        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }    
}

module.exports = Manager;