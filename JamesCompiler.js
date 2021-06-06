// Work is by James Kyle https://youtu.be/Tar4WgAfMr4
// It takes lisp syntax and translates it to C-like syntax (JavaScript)
// I added the tracking of position

function tokenizer(input) {
  var current = 0;
  var tokens = [];

  while (current < input.length) {
    var char = input[current];

    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '(',
        position: current,
      });
      current++;
      continue;
    }

    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
        position: current,
      });
      current++;
      continue;
    }

    var WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    var NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      var value = '';

      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({
        type: 'number',
        value: value,
        position: current,
      });
      continue;
    }
    var LETTERS = /[a-zA-Z]/;
    if (LETTERS.test(char)) {
      var value = '';
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({
        type: 'name',
        value: value,
        position: current,
      });
      continue;
    }

    throw new TypeError(
      `I don't know what this is: ${char}, at position ${position}`
    );
  }

  return tokens;
}

console.log(tokenizer(`add(2 2)(divide (4 4)`));
