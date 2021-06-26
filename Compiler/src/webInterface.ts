import compiler from './Compiler';

const run = document
  .getElementById('run')
  .addEventListener('click', function () {
    console.log('Hello World');
    const input = document.getElementById('code-area').nodeValue.toString();
    console.log(input);
    console.log(compiler(input));
    eval(compiler(input));
  });
