// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { log } = require("console");
const markdown = require("./generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'emailName',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['MIT', 'Apache', 'GPLv2', 'BSD 3-Clause', 'GPLv3', 'NONE'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: ['npm i'],
    },
    {
        type: 'input',
        name: 'testRun',
        message: 'What command should be run to run tests?',
        default: ['npm test'],
    },
    {
        type: 'input',
        name: 'useRepo',
        name: 'What does the user need to know about using the repo?',
        default: ['use git clone'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
        default: ['Create a pull request'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log("success!"));

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        let answers = markdown(data);
        console.log('This is the template' + answers);
        writeToFile('README.md', answers);
    })
}

// Function call to initialize app
init();
