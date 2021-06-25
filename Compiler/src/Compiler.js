'use strict';
var fs = require('fs');
exports.__esModule = true;
var Parser_1 = require('./Parser');
var parser = new Parser_1['default']('لوحة.سجل("السلام عليك يا وسام")');
let transformed = parser.parse();
let output = [];

for (let i = 0; i < transformed.length; i++) {
  output.push(transformed[i].value);
}

console.log(transformed);
console.log(output.join(''));
fs.appendFile('output.js', output.join(''), 'utf8', (err) => {
  if (err) console.log(err);
  else
    console.log(
      '\n file contents after append: ',
      fs.readFileSync('output.js', 'utf8')
    );
});
