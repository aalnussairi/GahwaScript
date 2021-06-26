"use strict";
exports.__esModule = true;
var Parser_1 = require("./Parser");
function default_1(input) {
    var parser = new Parser_1["default"]();
    var transformed = parser.parse(input);
    var output = [];
    for (var i = 0; i < transformed.length; i++) {
        output.push(transformed[i].value);
    }
    var expressions = output.join('');
    return expressions;
}
exports["default"] = default_1;
