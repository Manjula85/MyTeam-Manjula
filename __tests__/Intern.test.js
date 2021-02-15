const { test } = require('@jest/globals');
//to connect to the testing file
const Intern = require('../lib/Intern');

test('get employee\'s school information', () => {
    const intern = new Intern('Dave',123,'test@gmail.com');
    //returns a string
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('get employee\'s role', () => {
    const intern = new Intern('Dave',123,'test@gmail.com');
    //returns a string
    expect(intern.getRole()).toEqual(expect.any(String));
});