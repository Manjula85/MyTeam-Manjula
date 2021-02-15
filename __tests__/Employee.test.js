//to connect to the testing file
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dave',123,'test@gmail.com');    // to lower case here?

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee\'s name', () => {
    const employee = new Employee('Dave',123,'test@gmail.com');

    //Output is a string containing employee.name
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('gets employee\'s id', () => {
    const employee = new Employee('Dave',123,'test@gmail.com');
    //Output is a string containing employee.id
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('gets employee\'s email', () => {
    const employee = new Employee('Dave',123,'test@gmail.com');
    //Output is a string containing employee.email
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get employee\'s role', () => {
    const employee = new Employee('Dave',123,'test@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});
   
    /*   
    expect(employee.getRole()).toHaveProperty('manager');
    expect(employee.getRole()).toHaveProperty('engineer');
    expect(employee.getRole()).toHaveProperty('intern');
    expect(employee.getRole()).toHaveProperty('employee');*/



