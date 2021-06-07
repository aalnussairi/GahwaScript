"use strict";
exports.__esModule = true;
var Parser_1 = require("./Parser");
var parser = new Parser_1["default"]('console.log("Hello World");لوحة.سجل("السلام \'عليكم")؛');
console.log(parser.parse());
