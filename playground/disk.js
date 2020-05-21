const fs = require('fs');

//Read from a file
// data = require('./data.json');
// console.log(data);

// fs.readFile('./data.json', 'utf-8', (err, data) => {
//   var data = JSON.parse(data);
//   console.log(data.name)
// });


// // Reading Directories
// fs.readdir('/', (err, data) => {
//   console.log(data);
// })


//Write File
var data = {
  name: 'Akshay'
}
fs.writeFile('data.json', JSON.stringify(data), (err, data) => {
  console.log(err)
});