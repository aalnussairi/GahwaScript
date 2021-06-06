"use strict";
exports.__esModule = true;
var Parser_1 = require("./Parser");
var parser = new Parser_1["default"]("لوحة.سجل('السلام عليك')؛");
parser.tokenizer();
console.log(parser.getOutput());
