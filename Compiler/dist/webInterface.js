import compiler from './Compiler';
var run = document
    .getElementById('run')
    .addEventListener('click', runCompiler);
function runCompiler() {
    console.log('Hello World');
    var input = document.getElementById('code-area').nodeValue.toString();
    console.log(input);
    console.log(compiler(input));
    var func = new Function(compiler(input));
    func();
}
