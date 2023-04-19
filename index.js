// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input", 
        message:"What is the title of application?",
        name:"title",

    },
    {
        type:"input", 
        message:"Describe application",
        name:"Description",

    },
    {
        type:"input", 
        message:"Table of Contents",
        name:"Table of Contents",

    },
    {
        type:"input", 
        message:"Installation Instructions",
        name:"Installation Instructions",

    },
    {
        type:"input", 
        message:"Usage Information",
        name:"Usage Information",

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }

        console.log('README.md was created!');
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers=>{
        console.log(answers);
    })
}

// Function call to initialize app
init();
