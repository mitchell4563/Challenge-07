// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title: ",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter installation instructions: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Project Description: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe the usage of your project: ",
  },
  {
    type: "input",
    name: "contributions",
    message: "Enter any contributions to your project: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: ",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your Github username: ",
  },
  {
    type: "list",
    name: "license",
    message: "Please select your license: ",
    choices: ["MIT", "ISC", "GNUPLv3"],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((data) => {
    const readME = generateMarkdown(data);
    fs.writeFile("README.md", readME, function (err) {
      if (err) {
        console.log("Could not save file");
      } else {
        console.log("Success!");
      }
    });
  });
}

// Function call to initialize app
init();
