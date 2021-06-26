import Parser from './Parser';
import fs = require('fs');

//Loading alsalam 3alaikoum.gahwa
const fileContents = fs
  .readFileSync(`${__dirname}/السلام-عليكم.قهوة`)
  .toString();

let parser = new Parser(fileContents);
const transformed = parser.parse();
const output = [];

for (let i = 0; i < transformed.length; i++) {
  output.push(transformed[i].value);
}

output.join('');
fs.writeFileSync(`${__dirname}/output.js`, output.join(''));
console.log(output);

// comment made for commit
