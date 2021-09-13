const inquirer = require('inquirer');
const fs = require('fs');


let starter = [
      {
          type: 'input',
          name: 'name',
          message: 'Please enter the team managers name.'
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter their employee ID.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter their email.'
      },
      {
        type: 'input',
        name: 'office',
        message: 'Please enter their office number.'
      },
      {
        type: 'list',
        message: 'Would you like to add another member to this team?',
        name: 'choice',
        choices: ['Add Intern', 'Add Engineer', 'Finish Team']
      }
  ]
let intern = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the intern.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter their employee ID.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter their email.'
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter the name of their school.'
      },
      {
        type: 'list',
        message: 'Would you like to add another member to this team?',
        name: 'choice',
        choices: ['Add Intern', 'Add Engineer', 'Finish Team']
      }
]

let engineer = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the engineer.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter their employee ID.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter their email.'
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter their Github username (must be exact).'
      },
      {
        type: 'list',
        message: 'Would you like to add another member to this team?',
        name: 'choice',
        choices: ['Add Intern', 'Add Engineer', 'Finish Team']
      }
]