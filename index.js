const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown.js');
const fs = require ('fs')

inquirer.prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
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
        message: "Describe guidelines for contributing to your project.",
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
        message: "What is your GitHub user name?",
        name: "github"
      }
  ])
  .then(function(response) {
        fs.writeFile("README.md", (generateMarkdown(response)), function(err) {

        if (err) {
          console.log(err);
        }
        else {
          console.log("Commit logged!");
        }
      });
    });