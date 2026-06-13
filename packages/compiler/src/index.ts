import { parser } from './parser';
import { Token } from './types';

export { Token } from './types';
export { parser } from './parser';
export { keywords, punctuation, WebAPI, numbers } from './maps';

export class Compiler {
  compile(input: string): string {
    const tokens: Token[] = parser(input);
    return tokens.map((t) => t.value).join('');
  }
}
