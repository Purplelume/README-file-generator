// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// example url https://shields.io/badge/license-MIT-green

function renderLicenseBadge(license) {
  let licenseBadge = "";

  if(license != "None") {
    licenseBadge = "![License Badge](https://shields.io/badge/license-" + license + "-blue)";
  }

  return licenseBadge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // select correct license link for the selected license
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "Mozzilla":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Eclipse":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license != "None") {
    licenseSection += "## License\n"
    licenseSection += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {

  // License badge added
  let markdown = "# " + renderLicenseBadge(data.license) + "\n";

  // License added
  markdown += renderLicenseSection(data.license) + "\n";

  return markdown;
}

module.exports = generateMarkdown;