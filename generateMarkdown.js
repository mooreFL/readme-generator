// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE")  {
    return `[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)` 
  }
  return ""
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NONE") {
    return `* [License](#License)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE") {
   return `# License
    This project is created under ${license} license`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}

  ## ${'Description \n' + data.description}
  ## Table of Contents 
  * [Installation](#installation) 
  * [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#Contributing)
  * [Testing](#Testing)
  * [Contact](#Contact)
  
  # Installation
  To install use the following code:
   ${data.install}

  # Usage
  ${data.useRepo}
  
  ${renderLicenseSection(data.license)}

  # Contributing
  ${data.contribution}

  # Testing
  ${data.testRun}

  # Contact
  If you have questions or concerns, please contact me at the following: \n
  GitHub: ${data.userName} \n
  Email: ${data.emailName} 
`;
}

module.exports = generateMarkdown;
