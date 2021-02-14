class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

        //this.role = role;  //Do I even need this?
    }

    getName(){
        return `Employee's name is ${this.name}.`;
    }

    getId(){
        return `Employee's id is ${this.id}`;
    }

    getEmail(){
        return `Employee's email is ${this.email}`;
    }

    getRole(){
        return 'Employee';
    }   
    
}

module.exports = Employee;