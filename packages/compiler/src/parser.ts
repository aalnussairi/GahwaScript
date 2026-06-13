import { Token } from './types.js';
import { keywords, punctuation, WebAPI, numbers } from './maps.js';

export function parser(input: string): Token[] {
  let current = 0;
  let tokens: Token[] = [];

  while (current < input.length) {
    let char = input[current];

    if (char === '(' || char === ')') {
      tokens.push({
        type: 'paren',
        start: current,
        end: current,
        value: char,
      });
      current++;
      continue;
    }

    if (punctuation.has(char)) {
      tokens.push({
        type: 'punctuation',
        start: current,
        end: current,
        value: punctuation.get(char)!,
      });
      current++;
      continue;
    }

    const STRINGS = /'|"/;
    if (STRINGS.test(char)) {
      const startPoint = current;
      const startIdentifier = char;
      let value = '';

      do {
        char = input[++current];
        if (char === '"') break;
        value += char;
      } while (char !== startIdentifier);

      char = input[++current];

      tokens.push({
        type: 'string',
        start: startPoint,
        end: current - 1,
        value: `"${value}"`,
      });
      continue;
    }

    const WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      tokens.push({
        type: 'whitespace',
        start: current,
        end: current,
        value: ' ',
      });
      current++;
      continue;
    }

    const NUMBERS = /[٠-٩0-9]/;
    if (NUMBERS.test(char)) {
      const startPoint = current;
      let value = '';

      while (NUMBERS.test(char)) {
        if (numbers.has(char)) value += numbers.get(char);
        char = input[++current];
      }

      tokens.push({
        type: 'number',
        start: startPoint,
        end: current - 1,
        value: value,
      });
      continue;
    }

    const LETTERS = /^[ء-ي$_]+([ء-ي٠-٩0-9$ـ]*)$/;
    if (LETTERS.test(char)) {
      const startPoint = current;
      let value = '';

      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      if (keywords.has(value)) {
        tokens.push({
          type: 'keyword',
          start: startPoint,
          end: current - 1,
          value: keywords.get(value)!,
        });
        continue;
      }

      if (WebAPI.has(value)) {
        tokens.push({
          type: 'identifier',
          start: startPoint,
          end: current - 1,
          value: WebAPI.get(value)!,
        });
        continue;
      }

      tokens.push({
        type: 'name',
        start: startPoint,
        end: current - 1,
        value: value,
      });
      continue;
    }

    throw new TypeError(
      `I don't know what this is ${char} at position ${current}`
    );
  }

  return tokens;
}
