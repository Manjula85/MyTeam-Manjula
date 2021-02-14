const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('get employee\'s school information', () => {
    const intern = new Intern('Dave',123,'test@gmail.com');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('get employee\'s role', () => {
    const intern = new Intern('Dave',123,'test@gmail.com');

    expect(intern.getRole()).toEqual(expect.any(String));
});