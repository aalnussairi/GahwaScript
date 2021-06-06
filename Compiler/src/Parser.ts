interface token {
  type: string;
  start: number;
  end: number;
  value: string;
}

export default class Parser {
  constructor(private input: string) {}

  tokenizer() {
    let current = 0;
    let tokens: token[];

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
        continue;
      }
    }
  }
}
