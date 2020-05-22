const fs = require('fs');
const core = require("./core");

fs.appendFile("./storage-files/core-copy.js", core, (err) => {
  if(err) throw err;
});
fs.appendFile("./storage-files/core-copy.js", core, (err) => {
  if(err) throw err;
});