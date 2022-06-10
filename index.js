const inquirer = require('inquirer');
const fs = require('fs');

const licenseARRAY = ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the repot name?',
        name: 'repo_name',
    },
    {
        type: 'input',
        message: 'What is the project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a description of the project.',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'What are the intstallation instructions ',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter the user names of all contributers',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Enter testing instructions',
        name: 'testing',
    },
    {
        type: "checkbox",
        message: "Choose your Licenses",
        choices: licenseARRAY,
        name: "licenses",
      },
    {
        type: 'input',
        message: 'Enter your Github user name',
        name: 'git',
    },
    {
        type: 'select',
        message: 'Enter your Email',
        name: 'email',
    },
])
.then(function(response){
    
    const { repo_name, title, desc, install, usage, contribute, testing, licenses, git, email } = response;
    
    let readme_string = `
<div id="top"></div>

[![${licenses}][license-shield]][license-url]
    
<br />
<div align="center">
<a href="https://github.com/JamesF905/${repo_name}">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
</a>

<h3 align="center">${title}</h3>

<p align="center">
    <a href="https://drive.google.com/file/d/1jZCnRJ36mH4DweZxKWsDD0DBgexVsVrw/view"><strong>Link to live video presentation</strong></a>
</p>
</div>

[![${title}][product-screenshot]]

## Description
    
${desc}
    
## Table of Contents 
<details>
  <summary>Table of Contents</summary>
  <ol>   
    <li><a href="#Description">Description</a></li>
    <li><a href="#Installation">Installation</a></li>
    <li><a href="#Usage">Usage</a></li>
    <li><a href="#Collaborators">Collaborators</a></li>
    <li><a href="#Testing">Testing</a></li>
    <li><a href="#Questions">Questions</a></li>
    <li><a href="#License">License</a></li>
  </ol>
</details>
    
## Installation
    
${install}

<p align="right">(<a href="#top">back to top</a>)</p>
    
## Usage
    
${usage}
    
<p align="right">(<a href="#top">back to top</a>)</p>    
    
## Collaborators
    
The following is a list of users who contributed to this project

${contribute}

    
<p align="right">(<a href="#top">back to top</a>)</p>

## Testing

${testing}


<p align="right">(<a href="#top">back to top</a>)</p>

## Questions
    
<a href="https://github.com/${git}">${git}</a>
If you have any additional questions please reach me via email at ${email}
    
<p align="right">(<a href="#top">back to top</a>)</p>

## License
    
The following licenses are included in this file

- ${licenses}



[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png

`;
       
        



    fs.writeFile('readme.md', readme_string, (err) =>
    err ? console.error(err) : console.log('Success!'))   
});
