const fs = require('fs');

// const text = fs.readFileSync('../README.md', 'utf-8');
// console.log(text);

fs.readFile('../README.md', 'utf-8', (err, text) => {
  console.log(text);
})