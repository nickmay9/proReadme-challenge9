const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    unlicense: 'https://img.shields.io/badge/license-unlicense-blue',
    MIT: 'https://img.shields.io/badge/license-MIT-blue',
    GNU: 'https://img.shields.io/badge/license-GNU%20GPLv3-blue'
  };
  switch (license) {
    case 'Unlicense':
      return badge.unlicense;
    case 'MIT':
      return badge.MIT;
    case 'GNU GPLv3':
      return badge.GNU;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = {
    unlicense: 'https://unlicense.org/',
    MIT: 'https://choosealicense.com/licenses/mit/',
    GNU: 'https://www.gnu.org/licenses/'
  };
  switch (license) {
    case 'Unlicense':
      return link.unlicense;
    case 'MIT':
      return link.MIT;
    case 'GNU GPLv3':
      return link.GNU;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license) {
    case 'Unlicense':
      return fs.readFileSync('./assets/unlicense.txt', 'utf8', (err, data) => {
        if(err) throw err;
        return data;        
      });
      
    case 'MIT':
      return fs.readFileSync('./assets/MIT.txt', 'utf8', (err, data) => {
        if(err) throw err;
        return data;
      });
    case 'GNU GPLv3':
      return fs.readFileSync('./assets/GNU.txt', 'utf8', (err, data) => {
        if(err) throw err;
        return data;
      });
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projectTitle}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contributor}

## Tests
${data.test}

## License
![badge image](${renderLicenseBadge(data.license)})
[link to license!](${renderLicenseLink(data.license)})
${renderLicenseSection(data.license)}

## Questions
If you have any questions you can find me on [GitHub](https://github.com/${data.githubUsername}) or you can email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
