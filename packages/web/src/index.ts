import { Compiler } from '@gahwascript/compiler';

const compiler = new Compiler();
const codeInput = document.querySelector('#code-area') as HTMLTextAreaElement;
const runButton = document.querySelector('#run') as HTMLButtonElement;

runButton.addEventListener('click', () => {
  const js = compiler.compile(codeInput.value);
  console.time('Compiled code in');
  console.log('Compiling...');
  console.log(js);
  console.timeEnd('Compiled code in');

  try {
    new Function(js)();
  } catch (e) {
    console.error('Runtime error:', e);
  }
});
