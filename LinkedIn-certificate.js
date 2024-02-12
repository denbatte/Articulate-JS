// Get current month and year
var datum = new Date();
var maand = datum.getMonth() + 1;
var jaar = datum.getFullYear();

// Certificate name
var naam = "ARTGDBE24 - Geef extra smaak aan je Storyline project met JavaScript.";

window.open("https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=" + naam + "&organizationId=496858&issueYear=" + jaar + "&issueMonth=" + maand);
