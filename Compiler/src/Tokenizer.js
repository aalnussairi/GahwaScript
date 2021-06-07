"use strict";
exports.__esModule = true;
var punctuators_1 = require("./tokens/punctuators");
var Tokenizer = (function () {
    function Tokenizer(input) {
        this.input = input;
        this.output = [];
        this.tokens = [];
    }
    Tokenizer.prototype.getOutput = function () {
        return this.output;
    };
    Tokenizer.prototype.tokenize = function () {
        var current = 0;
        while (current < this.input.length) {
            var char = this.input[current];
            if (char === '(' || char === ')') {
                this.tokens.push({
                    type: 'paren',
                    start: current,
                    end: current,
                    value: char
                });
                current++;
                continue;
            }
            if (punctuators_1["default"].indexOf(char) >= 0) {
                this.tokensPush('punctuation', current, current, char);
                current++;
                continue;
            }
            var STRINGS = /'|"/;
            if (STRINGS.test(char)) {
                var startPoint = current, startIdentifier = char;
                console.log(startIdentifier);
                var value = '';
                do {
                    char = this.input[++current];
                    if (char === '"')
                        break;
                    value += char;
                } while (char !== startIdentifier);
                char = this.input[++current];
                this.tokensPush('string', startPoint, current - 1, value);
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
                this.tokensPush('number', startPoint, current - 1, value);
                continue;
            }
            var LETTERS = /^[ء-ي$_]+([ء-ي٠-٩0-9$ـ]*)$/;
            if (LETTERS.test(char)) {
                var startPoint = current;
                var value = '';
                while (LETTERS.test(char)) {
                    value += char;
                    char = this.input[++current];
                }
                this.tokensPush('name', startPoint, current - 1, value);
                continue;
            }
            throw new TypeError("I don't know what this is " + char + " at position " + current);
        }
        this.output = this.tokens;
    };
    Tokenizer.prototype.tokensPush = function (type, start, end, value) {
        this.tokens.push({
            type: type,
            start: start,
            end: end,
            value: value
        });
    };
    return Tokenizer;
}());
exports["default"] = Tokenizer;
