"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tokenizer_1 = __importDefault(require("./Tokenizer"));
class Parser {
    constructor(input) {
        this.input = input;
        this.tokeizer = new Tokenizer_1.default(this.input);
    }
    parse() {
        this.tokeizer.tokenize();
        return this.tokeizer.getOutput();
    }
}
exports.default = Parser;
//# sourceMappingURL=Parser.js.map