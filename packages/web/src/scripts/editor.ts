import { Compiler } from '@gahwascript/compiler';
import { evalInSandbox } from './sandbox';

const compiler = new Compiler();
const codeInput = document.getElementById('code-area') as HTMLTextAreaElement;
const runButton = document.getElementById('run') as HTMLButtonElement;
const output = document.getElementById('output') as HTMLPreElement;
const result = document.getElementById('result') as HTMLPreElement;

runButton.addEventListener('click', async () => {
  const js = compiler.compile(codeInput.value);
  output.textContent = js;
  result.textContent = '';

  try {
    const { output: lines, error } = await evalInSandbox(js);
    if (error) {
      result.textContent = error;
    } else if (lines.length > 0) {
      result.textContent = lines.join('\n');
    }
  } catch (e) {
    result.textContent = String(e);
  }
});
