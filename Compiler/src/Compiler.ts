import Parser from './Parser';

let parser = new Parser('لوحة.سجل("السلام \'عليكم")؛');
console.log(parser.parse());
