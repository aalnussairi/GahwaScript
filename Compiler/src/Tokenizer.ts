import punctuators from './tokens/punctuators';

interface token {
  type: string;
  start: number;
  end: number;
  value: string;
}

export default class Tokenizer {
  private puncChars: string[] = punctuators;

  checkPunc(input: string): boolean {
    if (punctuators.indexOf(input) >= 0) {
      return true;
    }
    return false;
  }

  private output: token[] = [];
  private tokens: token[] = [];
  constructor(private input: string) {}

  getOutput() {
    return this.output;
  }

  tokenize() {
    let current = 0;

    while (current < this.input.length) {
      let char = this.input[current];
      //check paren
      if (char === '(' || char === ')') {
        this.tokens.push({
          type: 'paren',
          start: current,
          end: current,
          value: char,
        });
        current++;
        continue;
      }

      //check punctuation: . OR ؛
      if (char === '.' || char === '؛') {
        this.tokensPush('punctuation', current, current, char);
        current++;
        continue;
      }

      //check for string punctuation
      if (this.checkPunc(char)) {
        this.tokensPush('punctuation', current, current, char);
        current++;
        continue;
      }

      // check for whitespace
      const WHITESPACE = /\s/;
      if (WHITESPACE.test(char)) {
        current++;
        continue;
      }

      //Check for Numbers
      const NUMBERS = /[٠-٩]/;
      if (NUMBERS.test(char)) {
        const startPoint = current;
        let value = '';

        while (NUMBERS.test(char)) {
          value += char;
          char = this.input[++current];
        }
        this.tokensPush('number', startPoint, current, value);
        continue;
      }

      // Check for words
      const LETTERS = /^[ء-ي$_]+([ء-ي٠-٩0-9$ـ]*)$/;
      if (LETTERS.test(char)) {
        const startPoint = current;
        let value = '';

        while (LETTERS.test(char)) {
          value += char;
          char = this.input[++current];
        }
        this.tokensPush('name', startPoint, current, value);
        continue;
      }
      throw new TypeError(
        `I don't know what this is ${char} at position ${current}`
      );
    }
    this.output = this.tokens;
  }

  tokensPush(type: string, start: number, end: number, value: string) {
    this.tokens.push({
      type: type,
      start: start,
      end: end,
      value: value,
    });
  }
}
