import Parser from './Parser';

export default function(input: string) {
    const parser = new Parser();
    const transformed = parser.parse(input);
    const output = [];
    
    for (let i = 0; i < transformed.length; i++) {
      output.push(transformed[i].value);
    }
    
    const expressions = output.join('');
    return expressions;
}
