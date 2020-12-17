// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (Required)',
        validate: projectTitleInput => {
            if (projectTitleInput){
                return true;
            }
            else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Please enter a description of the project.'
    },
    {
        type: 'editor',
        name: 'install',
        message: 'Please enter the installation instructions.'
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Please enter the usage instructions.'
    },
    {
        type: 'editor',
        name: 'contributor',
        message: 'Please enter your contributor guidelines.'
    },
    {
        type: 'editor',
        name: 'test',
        message: 'Please enter your tests.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you need?',
        choices: ['Unlicense', 'MIT', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your Github Username? (Required)',
        validate: githubUsername => {
            if (githubUsername){
                return true;
            }
            else {
                console.log('Please enter your Github Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailAddress => {
            if (emailAddress){
                return true;
            }
            else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName +  '.md', data, err => {
        if (err) throw err;
        console.log('The file has been saved.');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((readMeAnswers) => {
        const readMeData = generateMarkdown(readMeAnswers);
        writeToFile(readMeAnswers.projectTitle, readMeData);
    });
}

// Function call to initialize app
init();
