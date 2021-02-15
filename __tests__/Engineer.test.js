const { test, expect } = require('@jest/globals');
const { string } = require('yargs');
//to connect to the testing file
const Engineer = require('../lib/Engineer');

test('get employee\'s github username', () => {
    const engineer = new Engineer('Dave',123,'test@gmail.com');

    //return a string
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('get employee\'s role', () => {
    const engineer = new Engineer('Dave',123,'test@gmail.com');
    //returns a string
    expect(engineer.getRole()).toEqual(expect.any(String));
});