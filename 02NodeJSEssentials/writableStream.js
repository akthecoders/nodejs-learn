const fs = require("fs");

const writeStream = fs.createWriteStream("./storage-files/myFile.txt", "UTF-8");

// writeStream.write("hello");
// writeStream.write(" world\n");
const readStream = fs.createReadStream("./storage-files/myFile.txt", "UTF-8");

readStream.on("data", data => {
  writeStream.write(data);
})