"use strict";
exports.__esModule = true;
var Tokenizer_1 = require("./Tokenizer");
var Parser = (function () {
    function Parser(input) {
        this.input = input;
        this.tokeizer = new Tokenizer_1["default"](this.input);
    }
    Parser.prototype.parse = function () {
        this.tokeizer.tokenize();
        return this.tokeizer.getOutput();
    };
    return Parser;
}());
exports["default"] = Parser;
