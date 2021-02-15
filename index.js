const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const intern = require('./lib/Intern');
const generatePage = require('./src/generateHTML');

    //ask for user inputs
    inquirer
        .prompt([
        {
            type:'input',
            name:'name',
            message:"Enter Team manager's name here please:",
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
            message:"Enter Team manager's id here please:",
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
            message:"Enter Team manager's email address here please:",
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
            message:"Enter Team manager's office number here please:",
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
            type:'list',
            name:'role',
            message:"Add the next team member",
            choices: ['Engineer', 'intern', 'Finish building my team']
        }
    ]
/*
Incomplete, was unable to resolve this

const engineerInput = [
        {
            type:'input',
            name:'name',
            message:"Enter Engineer's name here please:",
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
            message:"Enter Engineer's id here please:",
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
            message:"Enter Engineer's email address here please:",
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
            name:'github',
            message:"Enter Engineer's github account name here please:",
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
            message:"Add the next team member",
            choices: ['Engineer', 'intern', 'Finish building my team']
        }
    ];

const internInput = [
        {
            type:'input',
            name:'name',
            message:"Enter Intern's name here please:",
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
            message:"Enter Intern's id here please:",
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
            message:"Enter Intern's email address here please:",
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
            name:'school',
            message:"Enter Intern's office number here please:",
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
            message:"Enter Intern's github account name here please:",
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
            message:"Add the next team member",
            choices: ['Engineer', 'intern', 'Finish building my team']
        }
    ]

const managerQuestions = function() {
*/
    ).then (({name, id, email, officeNumber, role}) =>{
        
        const teamMate = new Employee(name,id,email);
        teamMate.role = role;

        const manager = new Manager(officeNumber);
        manager.role = 'Manager';

        /*Incomplete, to move to user selected role next

        switch(role){
            case 0: console.log(' we have eng');
            case 1: console.log(' we have intern');
            case 2: console.log(' we are done!');
        }*/

        //generateclear the html file
        fs.writeFile('./dist/index.html', generatePage(name,id,email,officeNumber, manager.getRole()), err => {
            if (err) throw new Error(err);
            console.log('HTML created! Check out "./dis/index.html" to see the output!');
        });

    }).catch(error => {
        console.log("Something went wrong here");
    });

//managerQuestions();
//EngineerQuestions();
//InternQuestions();


