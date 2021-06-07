import Parser from './Parser';

let parser = new Parser("لوحة.سجل('السلام عليك')؛");
console.log(parser.parse());
