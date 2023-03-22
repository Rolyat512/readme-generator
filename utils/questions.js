const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is is the project\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What type of installation\'s are required?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the application going to be used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license\'s does your applciation use?',
        choices: ["MIT", "BSD", "Appache", "none"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who all contributed on the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Were any test required for your application to run?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github user name?'
    },
    {
        type: 'input',
        name: 'link',
        message: 'what is the link to your github?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?'
    },

];

module.exports = questions;