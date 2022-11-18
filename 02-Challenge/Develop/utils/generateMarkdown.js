// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    gnugplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    mit: '[MIT](https://choosealicense.com/licenses/mit/)',
    isc: '[ISC](https://choosealicense.com/licenses/isc/)',
    gnugplv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
  }
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `Licensed under the ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Project Description](#Description)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Contributions
${data.contributions}

## Questions
Email - ${data.email}<br>
Github - ${data.github}

## License
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
