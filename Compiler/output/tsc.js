var Compiler = (function () {
    function Compiler(input) {
        this.input = input;
    }
    return Compiler;
}());
System.register("Parser", [], function (exports_1, context_1) {
    "use strict";
    var Parser;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Parser = (function () {
                function Parser(input) {
                    this.input = input;
                }
                Parser.prototype.tokenizer = function () {
                    var current = 0;
                    var tokens;
                    while (current < this.input.length) {
                        var char = this.input[current];
                        if (char === '(' || char === ')') {
                            tokens.push({
                                type: 'paren',
                                start: current,
                                end: current,
                                value: char
                            });
                            continue;
                        }
                    }
                };
                return Parser;
            }());
            exports_1("default", Parser);
        }
    };
});
