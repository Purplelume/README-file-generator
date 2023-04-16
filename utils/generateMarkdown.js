// Function to get a blue badge
function renderLicenseBadge(license) {
  let licenseBadge = "![License Badge](https://shields.io/badge/license-" + license + "-blue)";
  return licenseBadge;
}

// Function that returns the link of the licnse based on user input
function renderLicenseLink(license) {
  let licenseLink;

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
  }
  
  return licenseLink;
}

// Export files to use in index.js
module.exports = {
  renderLicenseBadge, 
  renderLicenseLink
}