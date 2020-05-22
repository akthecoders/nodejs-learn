const fs = require('fs');

fs.readdir('../02NodeJSEssentials', (err, files) => {
  console.log(files);
});
console.log("end");