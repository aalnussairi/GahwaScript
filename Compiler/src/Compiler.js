"use strict";
exports.__esModule = true;
var Parser_1 = require("./Parser");
var parser = new Parser_1["default"]('لوحة.سجل(١٢٣ ، ١٢٣"السلام \'عليكم 123 Ahmed تست تست وان تو ثري")؛');
console.log(parser.parse());
