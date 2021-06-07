import punctuators from './tokens/punctuators';

interface token {
  type: string;
  start: number;
  end: number;
  value: string;
}

export default class Tokenizer {
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

      //check for punctuation
      if (punctuators.indexOf(char) >= 0) {
        this.tokensPush('punctuation', current, current, char);
        current++;
        continue;
      }

      // THIS LOOKS UGLY BUT AT LEAST IT WORKS
      // TODO: MAKE IT LOOK A BIT BETTER JEEZ
      const STRINGS = /'|"/;
      if (STRINGS.test(char)) {
        const startPoint = current,
          startIdentifier = char;
        console.log(startIdentifier);
        let value = '';
        do {
          char = this.input[++current];
          if (char === '"') break;
          value += char;
        } while (char !== startIdentifier);
        char = this.input[++current];
        this.tokensPush('string', startPoint, current - 1, value);
        continue;
      }

      // check for whitespace
      const WHITESPACE = /\s/;
      if (WHITESPACE.test(char)) {
        current++;
        continue;
      }

      //Check for Numbers
      const NUMBERS = /[٠-٩0-9]/;
      if (NUMBERS.test(char)) {
        const startPoint = current;
        let value = '';

        while (NUMBERS.test(char)) {
          value += char;
          char = this.input[++current];
        }
        this.tokensPush('number', startPoint, current - 1, value);
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
        this.tokensPush('name', startPoint, current - 1, value);
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
