"use strict";
exports.__esModule = true;
var punctuators_1 = require("./tokens/punctuators");
var keywords_1 = require("./tokens/keywords");
var WebAPI_1 = require("./tokens/WebAPI");
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
            if (punctuators_1["default"].has(char)) {
                this.tokensPush('punctuation', current, current, punctuators_1["default"].get(char));
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
                this.tokensPush('string', startPoint, current - 1, "\"" + value + "\"");
                continue;
            }
            var WHITESPACE = /\s/;
            if (WHITESPACE.test(char)) {
                current++;
                continue;
            }
            var NUMBERS = /[٠-٩0-9]/;
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
                if (keywords_1["default"].has(value)) {
                    this.tokensPush('keyword', startPoint, current - 1, keywords_1["default"].get(value));
                    continue;
                }
                if (WebAPI_1["default"].has(value)) {
                    this.tokensPush('identifier', startPoint, current - 1, WebAPI_1["default"].get(value));
                    continue;
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