const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
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
        choices: ['Add Intern', 'Add Engineer', 'No Thanks']
      }
  ])
.then((answers) => {

});