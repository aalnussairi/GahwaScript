import { getQuickJS, type QuickJSWASMModule } from 'quickjs-emscripten';

let modulePromise: Promise<QuickJSWASMModule> | null = null;

function getModule(): Promise<QuickJSWASMModule> {
  if (!modulePromise) {
    modulePromise = getQuickJS();
  }
  return modulePromise;
}

export interface SandboxResult {
  output: string[];
  error?: string;
}

export async function evalInSandbox(code: string): Promise<SandboxResult> {
  const QuickJS = await getModule();
  const ctx = QuickJS.newContext();
  const output: string[] = [];

  const logFn = ctx.newFunction('log', (...args) => {
    const text = args.map((a) => ctx.dump(a)).join(' ');
    output.push(text);
  });
  const errorFn = ctx.newFunction('error', (...args) => {
    const text = args.map((a) => ctx.dump(a)).join(' ');
    output.push(text);
  });
  const warnFn = ctx.newFunction('warn', (...args) => {
    const text = args.map((a) => ctx.dump(a)).join(' ');
    output.push(text);
  });

  const consoleObj = ctx.newObject();
  ctx.setProp(consoleObj, 'log', logFn);
  ctx.setProp(consoleObj, 'error', errorFn);
  ctx.setProp(consoleObj, 'warn', warnFn);
  ctx.setProp(ctx.global, 'console', consoleObj);

  try {
    const result = ctx.evalCode(code);
    const handle = ctx.unwrapResult(result);
    handle.dispose();
  } catch (e) {
    return { output, error: String(e) };
  } finally {
    consoleObj.dispose();
    logFn.dispose();
    errorFn.dispose();
    warnFn.dispose();
    ctx.dispose();
  }

  return { output };
}
