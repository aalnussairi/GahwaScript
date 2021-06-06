System.register("Parser", [], function (exports_1, context_1) {
    "use strict";
    var Parser;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Parser = class Parser {
                constructor(input) {
                    this.input = input;
                    this.output = [];
                }
                getOutput() {
                    return this.output;
                }
                tokenizer() {
                    let current = 0;
                    let tokens = [];
                    while (current < this.input.length) {
                        let char = this.input[current];
                        if (char === '(' || char === ')') {
                            tokens.push({
                                type: 'paren',
                                start: current,
                                end: current,
                                value: char,
                            });
                            current++;
                            continue;
                        }
                        if (char === '.' || char === '؛') {
                            tokens.push({
                                type: 'punctuation',
                                start: current,
                                end: current,
                                value: char,
                            });
                            current++;
                            continue;
                        }
                        if (char === "'" || char === '"') {
                            tokens.push({
                                type: 'punctuation',
                                start: current,
                                end: current,
                                value: char,
                            });
                            current++;
                            continue;
                        }
                        const WHITESPACE = /\s/;
                        if (WHITESPACE.test(char)) {
                            current++;
                            continue;
                        }
                        const NUMBERS = /[٠-٩]/;
                        if (NUMBERS.test(char)) {
                            const startPoint = current;
                            let value = '';
                            while (NUMBERS.test(char)) {
                                value += char;
                                char = this.input[++current];
                            }
                            tokens.push({
                                type: 'number',
                                start: startPoint,
                                end: current,
                                value: value,
                            });
                            continue;
                        }
                        const LETTERS = /[ء-ي]/;
                        if (LETTERS.test(char)) {
                            const startPoint = current;
                            let value = '';
                            while (LETTERS.test(char)) {
                                value += char;
                                char = this.input[++current];
                            }
                            tokens.push({
                                type: 'name',
                                start: startPoint,
                                end: current,
                                value: value,
                            });
                            continue;
                        }
                        throw new TypeError(`I don't know what this is ${char} at position ${current}`);
                    }
                    this.output = tokens;
                }
            };
            exports_1("default", Parser);
        }
    };
});
System.register("Compiler", ["Parser"], function (exports_2, context_2) {
    "use strict";
    var Parser_1, parser;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (Parser_1_1) {
                Parser_1 = Parser_1_1;
            }
        ],
        execute: function () {
            parser = new Parser_1.default("لوحة.سجل('السلام عليك')؛");
            parser.getOutput();
        }
    };
});
