const { test, expect } = require('@jest/globals');
const { string } = require('yargs');
const Engineer = require('../lib/Engineer');

test('get employee\'s github username', () => {
    const engineer = new Engineer('Dave',123,'test@gmail.com');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('get employee\'s role', () => {
    const engineer = new Engineer('Dave',123,'test@gmail.com');

    expect(engineer.getRole()).toEqual(expect.any(String));
});