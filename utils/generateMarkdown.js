const { writeFile } = require('fs');

function generateMarkdown(data) {
  console.log(data);

  let output = `
# ${data.title}

## Description

${data.description}


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}


## Credits

${data.contributing}

## License

${data.license}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${data.test}

## Questions 
If you need to reach me please contact me via github or my email!
${data.github}\n
${data.link}\n
${data.email}

`;



writeFile('./dist/README.md', output, err => {
  if(err) throw err;

  console.log('README file generated!!!');
})

}

module.exports = generateMarkdown;
