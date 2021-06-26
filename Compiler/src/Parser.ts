import Tokenizer from './Tokenizer';

export default class Parser {
  private input = '';
  
  tokeizer = new Tokenizer(this.input);

  parse(input: string) {
    this.input = input
    this.tokeizer.tokenize();
    return this.tokeizer.getOutput();
  }
}
