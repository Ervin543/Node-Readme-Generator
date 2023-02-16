const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const readmeQuestions = require("./readmeQuestions");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please state the name of your Project."
  },
  {
    type: "input",
    name: "description",
    message: "Please describe this Project."
  },
  {
    type: "input",
    name: "installation",
    message: "Please explain how to install this Project.",
    default: 'npm i',
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the usage information about this Project."
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter the Contribution Guidelines of this Project."
  },
  {
    type: "input",
    name: "test",
    message: "Please give the Test Instructions regarding this Project.",
    default: 'npm test',
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please choose a license for this Project.",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: "input",
    name: "github",
    message: "Please Enter your GitHub Username."
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email Address."
  },
];

function addToReadme(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);


}


function initialize() {
  inquirer.prompt(questions).then((responses) => {
    // console.log(responses.license);
    console.log("Creating Professional README.md File.....");

    // Pass the license field as a string
    responses.license = responses.license[0];

    addToReadme("./README.md", readmeQuestions({ ...responses }));
  });
}


// function initialize() {
//   inquirer.prompt(questions).then((responses) => {
//     console.log("Creating Professional README.md File.....");
//     addToReadme("./README.md", readmeQuestions({ ...responses }));
//   });
// }

initialize();
