"use strict";
exports.__esModule = true;
var Parser = (function () {
    function Parser(input) {
        this.input = input;
        this.output = [];
    }
    Parser.prototype.getOutput = function () {
        return this.output;
    };
    Parser.prototype.tokenizer = function () {
        var current = 0;
        var tokens = [];
        while (current < this.input.length) {
            var char = this.input[current];
            if (char === '(' || char === ')') {
                tokens.push({
                    type: 'paren',
                    start: current,
                    end: current,
                    value: char
                });
                current++;
                continue;
            }
            if (char === '.' || char === '؛') {
                tokens.push({
                    type: 'punctuation',
                    start: current,
                    end: current,
                    value: char
                });
                current++;
                continue;
            }
            if (char === "'" || char === '"') {
                tokens.push({
                    type: 'punctuation',
                    start: current,
                    end: current,
                    value: char
                });
                current++;
                continue;
            }
            var WHITESPACE = /\s/;
            if (WHITESPACE.test(char)) {
                current++;
                continue;
            }
            var NUMBERS = /[٠-٩]/;
            if (NUMBERS.test(char)) {
                var startPoint = current;
                var value = '';
                while (NUMBERS.test(char)) {
                    value += char;
                    char = this.input[++current];
                }
                tokens.push({
                    type: 'number',
                    start: startPoint,
                    end: current,
                    value: value
                });
                continue;
            }
            var LETTERS = /[ء-ي]/;
            if (LETTERS.test(char)) {
                var startPoint = current;
                var value = '';
                while (LETTERS.test(char)) {
                    value += char;
                    char = this.input[++current];
                }
                tokens.push({
                    type: 'name',
                    start: startPoint,
                    end: current,
                    value: value
                });
                continue;
            }
            throw new TypeError("I don't know what this is " + char + " at position " + current);
        }
        this.output = tokens;
    };
    return Parser;
}());
exports["default"] = Parser;
