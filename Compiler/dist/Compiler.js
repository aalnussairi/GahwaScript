import Parser from './Parser';
export default function (input) {
    var parser = new Parser();
    var transformed = parser.parse(input);
    var output = [];
    for (var i = 0; i < transformed.length; i++) {
        output.push(transformed[i].value);
    }
    var expressions = output.join('');
    return expressions;
}
