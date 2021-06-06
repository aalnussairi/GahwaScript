import Parser from './Parser';

let parser = new Parser("لوحة.سجل('السلام عليك')؛");
parser.tokenizer();
console.log(parser.getOutput());
