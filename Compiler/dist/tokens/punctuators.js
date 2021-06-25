"use strict";
// In case a user does not have a tilde symbol on their keyboard
// they may also use the (±) symbol.
Object.defineProperty(exports, "__esModule", { value: true });
// right now string literals are tokenized as punctuators as a stop gap.
// need to transition that to identify string literals as strings.
exports.default = [
    '}',
    ']',
    ')',
    '(',
    '[',
    '.',
    '؛',
    '،',
    '>',
    '<',
    '=',
    '!',
    '+',
    '-',
    '*',
    '٪',
    '&',
    '|',
    '؟',
    '^',
    ':',
    '±',
    '~',
    '/',
    '{',
];
//# sourceMappingURL=punctuators.js.map