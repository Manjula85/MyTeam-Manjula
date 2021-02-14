const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const intern = require('./lib/Intern');
const generatePage = require('./src/generateHTML');

inquirer.prompt([
    {
        type:'input',
        name:'name',
        message:"Enter your name here please:",
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log("Enter valid input");
                return false;
            }
        }
    },
    {
        type:'input',
        name:'id',
        message:"Enter your id here please:",
        validate: idInput => {
            if(idInput){
                return true;
            } else {
                console.log("Enter valid input");
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:"Enter your email address here please:",
        validate: emailInput => {
            if(emailInput){
                return true;
            } else {
                console.log("Enter valid input");
                return false;
            }
        }
    },
    {
        type:'input',
        name:'officeNumber',
        message:"Enter your office number here please:",
        validate: officeNumberInput => {
            if(officeNumberInput){
                return true;
            } else {
                console.log("Enter valid input");
                return false;
            }
        }
    },
    {
        type:'input',
        name:'github',
        message:"Enter your github account name here please:",
        validate: githubInput => {
            if(githubInput){
                return true;
            } else {
                console.log("Enter valid input");
                return false;
            }
        }
    },
    {
        type:'list',
        name:'role',
        message:"Choose your team role from below ",
        choices: ['Manager', 'Engineer', 'intern']
    }
]
).then (({name, id, email, officeNumber, github, role}) =>{
    
    const teamMate = new Employee(name,id,email);
    teamMate.role = role;

    console.log(teamMate);
    console.log(teamMate.getRole());

    console.log('--------seperator--------');

    const manager = new Manager(officeNumber);
    console.log(manager.getRole());

    fs.writeFile('./dist/index.html', generatePage(name, github), err => {
        if (err) throw err;
        console.log('HTML created! Check out "./dis/index.html" to see the output!');
    });

}).catch(error => {
    console.log("Something went wrong here");
});
