"use strict";
exports.__esModule = true;
var Parser_1 = require("./Parser");
var fs = require("fs");
var fileContents = fs
    .readFileSync(__dirname + "/\u0627\u0644\u0633\u0644\u0627\u0645-\u0639\u0644\u064A\u0643\u0645.\u0642\u0647\u0648\u0629")
    .toString();
var parser = new Parser_1["default"](fileContents);
var transformed = parser.parse();
var output = [];
for (var i = 0; i < transformed.length; i++) {
    output.push(transformed[i].value);
}
output.join('');
fs.writeFileSync(__dirname + "/output.js", output.join(''));
console.log(output);
