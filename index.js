const inquirer = require('inquirer');
const Employee = require('./employee');
const Manager = require('./employee');
const Engineer = require('./employee');
const Intern = require('./employee');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Choose employee role',
            choices: [`Manager: ${Manager}, Engineer: ${Engineer}, Intern: ${Intern}`],

        },
         {
            type: 'input',
            name: 'gitHub',
            message: 'Engineer gitHub URL:',
            when: (answers)=> answers.role === `${Engineer}`
         },
         {
            type: 'input',
            name: 'office number',
            message: 'Manager officer number:',
            when: (answers)=> answers.role === `${Manager}`
         },
         {
            type: 'input',
            name: 'school',
            message: 'Intern School name:',
            when: (answers)=> answers.role === `${Intern}`
         }

    ])