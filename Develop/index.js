// Install packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is this project title?",
        name: "Project title"
    },
    {
        type: 'input',
        message: "What is the project description?",
        name: "Description"
    },
    {
        type: 'input',
        message: "What are the installation instructions?",
        name: "Installation"
    },
    {
        type: 'input',
        message: "What are the usage instructions?",
        name: "Usage"
    },
    {
        type: 'checkbox',
        message: "What is the license for this project?",
        choices: ["None", "MIT", "Mozzilla", "Eclipse"],
        name: "License"
    },
    {
        type: 'input',
        message: "What are the instructions for contributing?",
        name: "Contributions"
    },
    {
        type: 'input',
        message: "What are the commands to test the application?",
        name: "Test"
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: "Username"
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: "Email"
    }
];

// Function to write README file
const writeToFile = data => {
    
    // Gets the project title and stores it into a variable
    let projectTitle = data["Project title"];
    
    // Creates the README file with the answers of the user
const writeText = 
`# ${projectTitle} 

## Description
${data["Description"]}

### Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation  
${data["Installation"]}

## Usage
${data["Usage"]}

## License

## Contributions
${data["Contributions"]}

## Tests
Do as shown here to test the application:
${data["Test"]}

## Questions?
Come and take a look at my GitHub (${data["Username"]}) or reach out to me: Email me at ${data["Email"]}`;

    // Assign to the README the project title
    let fileName = `Test-README.md`;

    if (projectTitle) {
        // Formatting the text in a good manner
        projectTitle = projectTitle.trim().split(" ").join("-");
        fileName = `${projectTitle}-README.md`;
    }

    // Writes file using fs
    fs.writeFile(fileName, writeText, (error) => {
        error ? console.error(error) : console.log("README generated");
    })
}

// Function to initialize the app
function init() {

    inquirer.prompt(questions)
    .then (answers => writeToFile(answers))
}

// Function call to initialize app
init();