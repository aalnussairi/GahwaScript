import Tokenizer from './Tokenizer';

export default class Parser {
  tokeizer = new Tokenizer(this.input);

  constructor(private input: string) {}

  parse() {
    this.tokeizer.tokenize();
    return this.tokeizer.getOutput();
  }
  // private output: token[] = [];
  // private tokens: token[] = [];
  // constructor(private input: string) {}

  // getOutput() {
  //   return this.output;
  // }

  // tokenizer() {
  //   let current = 0;

  //   while (current < this.input.length) {
  //     let char = this.input[current];
  //     //check paren
  //     if (char === '(' || char === ')') {
  //       this.tokens.push({
  //         type: 'paren',
  //         start: current,
  //         end: current,
  //         value: char,
  //       });
  //       current++;
  //       continue;
  //     }

  //     //check punctuation: . OR ؛
  //     if (char === '.' || char === '؛') {
  //       this.tokensPush('punctuation', current, current, char);
  //       current++;
  //       continue;
  //     }

  //     //check for string punctuation
  //     if (char === "'" || char === '"') {
  //       this.tokensPush('punctuation', current, current, char);
  //       current++;
  //       continue;
  //     }

  //     // check for whitespace
  //     const WHITESPACE = /\s/;
  //     if (WHITESPACE.test(char)) {
  //       current++;
  //       continue;
  //     }

  //     //Check for Numbers
  //     const NUMBERS = /[٠-٩]/;
  //     if (NUMBERS.test(char)) {
  //       const startPoint = current;
  //       let value = '';

  //       while (NUMBERS.test(char)) {
  //         value += char;
  //         char = this.input[++current];
  //       }
  //       this.tokensPush('number', startPoint, current, value);
  //       continue;
  //     }

  //     // Check for words
  //     const LETTERS = /^[ء-ي$_]+([ء-ي٠-٩0-9$ـ]*)$/;
  //     if (LETTERS.test(char)) {
  //       const startPoint = current;
  //       let value = '';

  //       while (LETTERS.test(char)) {
  //         value += char;
  //         char = this.input[++current];
  //       }
  //       this.tokensPush('name', startPoint, current, value);
  //       continue;
  //     }
  //     throw new TypeError(
  //       `I don't know what this is ${char} at position ${current}`
  //     );
  //   }
  //   this.output = this.tokens;
  // }

  // tokensPush(type: string, start: number, end: number, value: string) {
  //   this.tokens.push({
  //     type: type,
  //     start: start,
  //     end: end,
  //     value: value,
  //   });
  // }
}
