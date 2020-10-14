const inquirer = require ('inquirer');
const generateMarkdown = require ('./generateMarkdown.js');
const fs = require ('fs')

inquirer.prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
        //   TODO make this into a list choice
      type: "list",
      message: "Which license would you like this to have?",
      choices: ["Apache License 2.0", 'GNU General Public License v3.0', "MIT License", `BSD 2-Clause "Simplified" License`,`BSD 3-Clause "New" or "Revised" License`,`Boost Software License 1.0`, `Creative Commons Zero v1.0 Universal`, `Eclipse Public License 2.0`, `GNU Affero General Public License v3.0`,`GNU General Public License v2.0`, `GNU Lesser General Public License v2.1`, `Mozilla Public License 2.0`,`The Unlicense`],
      name: "license"
    },
    {
      type: "input",
      message: "Give a description of your app.",
      name: "description"
    },
    {
        type: "input",
        message: "Type any installation commands",
        name: "installation"
      },
      {
        type: "input",
        message: "Describe the apps usage.",
        name: "usage"
      },
      {
        type: "input",
        message: "List your contributors",
        name: "contributing"
      },
      {
        type: "input",
        message: "What is the command to run tests?",
        name: "test"
      },
      {
        type: "input",
        message: "What is a valid email address to reach you with any questions at?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your user name?",
        name: "github"
      }
  ])
  .then(function(response) {
      console.log(generateMarkdown(response));
    
  });

//  pass in object to generateMarkdown
//  has to have property title, license, description, installation, usage, contributing, test, email, github
// call function generateMarkdown()

//   ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```
