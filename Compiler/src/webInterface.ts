import compiler from './Compiler';

const run = document
  .getElementById('run')
  .addEventListener('click', runCompiler);
  
  function runCompiler(){
  console.log('Hello World');
  const input = document.getElementById('code-area').nodeValue.toString();
  console.log(input);
  console.log(compiler(input));
  const func = new Function(compiler(input));
  func();

}