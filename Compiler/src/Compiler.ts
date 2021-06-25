import Parser from './Parser';

let parser = new Parser('لوحة.سجل("السلام عليك يا وسام")؛');
console.log(parser.parse());

// comment made for commit
