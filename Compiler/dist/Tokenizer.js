"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const punctuators_1 = __importDefault(require("./tokens/punctuators"));
const keywords_1 = __importDefault(require("./tokens/keywords"));
const WebAPI_1 = __importDefault(require("./tokens/WebAPI"));
class Tokenizer {
    constructor(input) {
        this.input = input;
        this.output = [];
        this.tokens = [];
    }
    getOutput() {
        return this.output;
    }
    tokenize() {
        let current = 0;
        while (current < this.input.length) {
            let char = this.input[current];
            //check paren
            if (char === '(' || char === ')') {
                this.tokens.push({
                    type: 'paren',
                    start: current,
                    end: current,
                    value: char,
                });
                current++;
                continue;
            }
            //check for punctuation
            if (punctuators_1.default.indexOf(char) >= 0) {
                this.tokensPush('punctuation', current, current, char);
                current++;
                continue;
            }
            // THIS LOOKS UGLY BUT AT LEAST IT WORKS
            // TODO: MAKE IT LOOK A BIT BETTER JEEZ
            const STRINGS = /'|"/;
            if (STRINGS.test(char)) {
                const startPoint = current, startIdentifier = char;
                console.log(startIdentifier);
                let value = '';
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
            // check for whitespace
            const WHITESPACE = /\s/;
            if (WHITESPACE.test(char)) {
                current++;
                continue;
            }
            //Check for Numbers
            const NUMBERS = /[٠-٩0-9]/;
            if (NUMBERS.test(char)) {
                const startPoint = current;
                let value = '';
                while (NUMBERS.test(char)) {
                    value += char;
                    char = this.input[++current];
                }
                this.tokensPush('number', startPoint, current - 1, value);
                continue;
            }
            // Check for words
            const LETTERS = /^[ء-ي$_]+([ء-ي٠-٩0-9$ـ]*)$/;
            if (LETTERS.test(char)) {
                const startPoint = current;
                let value = '';
                while (LETTERS.test(char)) {
                    value += char;
                    char = this.input[++current];
                }
                if (keywords_1.default.has(value)) {
                    this.tokensPush('keyword', startPoint, current - 1, keywords_1.default.get(value));
                    continue;
                }
                if (WebAPI_1.default.has(value)) {
                    this.tokensPush('identifier', startPoint, current - 1, WebAPI_1.default.get(value));
                    continue;
                }
                this.tokensPush('name', startPoint, current - 1, value);
                continue;
            }
            throw new TypeError(`I don't know what this is ${char} at position ${current}`);
        }
        this.output = this.tokens;
    }
    tokensPush(type, start, end, value) {
        this.tokens.push({
            type: type,
            start: start,
            end: end,
            value: value,
        });
    }
}
exports.default = Tokenizer;
//# sourceMappingURL=Tokenizer.js.map