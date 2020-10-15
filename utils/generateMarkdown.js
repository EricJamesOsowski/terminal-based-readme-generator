function generateMarkdown(data) {
  function deleteWhiteSpace(string){
    return string.replace(/\s/g, '');
  }
  
  const license = deleteWhiteSpace(data.license);
  
  return `Project Title:
  -------------

  ## ${data.title}
  ![License](https://img.shields.io/badge/License-${license}-blue)
## Description
--------------

${data.description}


## Table of Contents 

* [Installation](#installation)
-------------------------------
* [Usage](#usage)
-----------------
* [Tests](#tests)
-----------------
* [License](#license)
---------------------
* [Contributing](#contributing)
-------------------------------
* [Questions](#questions)
-------------------------

## Installation

Installation directions:
========================
${data.installation}


## Usage

Usage directions
================
${data.usage}


## Tests

Commands to run tests:
======================
${data.test}


## License
----------

Currently under the ${data.license} license.


## Contributing

Heres how you can contribute!
=============================
${data.contributing}


## Questions
------------

Questions can be directed to ${data.email}. Here is my [GitHub](https://github.com/${data.github}) for more of my work`;
}


module.exports = generateMarkdown;