"use strict";
exports.__esModule = true;
var Compiler_1 = require("./Compiler");
var run = document.getElementById('run');
run.addEventListener('click', function () {
    console.log("Hello World");
    var input = document.getElementById('code-area').nodeValue.toString();
    console.log(input);
    console.log(Compiler_1["default"](input));
    eval(Compiler_1["default"](input));
});
