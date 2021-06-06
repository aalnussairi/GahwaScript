interface token {
  type: string;
  start: number;
  end: number;
  value: string;
}

export default class Parser {
  private output: token[] = [];

  constructor(private input: string) {}

  getOutput() {
    return this.output;
  }

  tokenizer() {
    let current = 0;
    let tokens: token[] = [];

    while (current < this.input.length) {
      let char = this.input[current];
      //check paren
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

      //check punctuation: . OR ؛
      if (char === '.' || char === '؛') {
        tokens.push({
          type: 'punctuation',
          start: current,
          end: current,
          value: char,
        });
        current++;
        continue;
      }

      //check for string punctuation
      if (char === "'" || char === '"') {
        tokens.push({
          type: 'punctuation',
          start: current,
          end: current,
          value: char,
        });
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

        tokens.push({
          type: 'number',
          start: startPoint,
          end: current,
          value: value,
        });
        continue;
      }

      // Check for words
      const LETTERS = /[ء-ي]/;
      if (LETTERS.test(char)) {
        const startPoint = current;
        let value = '';

        while (LETTERS.test(char)) {
          value += char;
          char = this.input[++current];
        }

        tokens.push({
          type: 'name',
          start: startPoint,
          end: current,
          value: value,
        });
        continue;
      }
      throw new TypeError(
        `I don't know what this is ${char} at position ${current}`
      );
    }
    this.output = tokens;
  }
}
