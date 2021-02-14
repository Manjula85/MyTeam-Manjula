const Manager = require('../lib/Manager');

test('get employee\'s role', () => {
    const manager = new Manager('Dave',123,'test@gmail.com');

    expect(manager.getRole()).toEqual(expect.any(String));

    //console.log(manager.getRole());
});