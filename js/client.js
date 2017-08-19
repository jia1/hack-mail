// This file is referenced from the HTML file
// The working directory is thus where the HTML file is
var Gmail = require('./quickstart');

Gmail.executeApi(Gmail.listLabels);
