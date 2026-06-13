import { parser } from './parser.js';
import { Token } from './types.js';

export { Token } from './types.js';
export { parser } from './parser.js';
export { keywords, punctuation, WebAPI, numbers } from './maps.js';

export class Compiler {
  compile(input: string): string {
    const tokens: Token[] = parser(input);
    return tokens.map((t) => t.value).join('');
  }
}
