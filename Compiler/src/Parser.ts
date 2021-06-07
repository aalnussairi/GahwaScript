import Tokenizer from './Tokenizer';

export default class Parser {
  tokeizer = new Tokenizer(this.input);

  constructor(private input: string) {}

  parse() {
    this.tokeizer.tokenize();
    return this.tokeizer.getOutput();
  }
}
