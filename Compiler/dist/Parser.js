import Tokenizer from './Tokenizer';
var Parser = (function () {
    function Parser() {
        this.input = '';
        this.tokeizer = new Tokenizer(this.input);
    }
    Parser.prototype.parse = function (input) {
        this.input = input;
        this.tokeizer.tokenize();
        return this.tokeizer.getOutput();
    };
    return Parser;
}());
export default Parser;
