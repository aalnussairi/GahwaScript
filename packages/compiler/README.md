# GahwaScript

Arabic-to-JavaScript source-to-source compiler.

## Install

```bash
npm install gahwascript
```

## Usage

```js
import { Compiler } from 'gahwascript';

const compiler = new Compiler();
const js = compiler.compile('اذا (صادق) { لوحة.سجل("مرحبا") }');
// => 'if (true) { console.log("مرحبا") }'
```

## API

### `new Compiler()`

Creates a compiler instance.

### `compiler.compile(input: string): string`

Tokenizes Arabic-syntax GahwaScript and returns the equivalent JavaScript string.

### `parser(input: string): Token[]`

The tokenizer function. Returns an array of `{ type, start, end, value }` tokens.

### Maps

- `keywords` — Arabic keyword → JS keyword (`اذا` → `if`, `دالة` → `function`, …)
- `punctuation` — Arabic punctuation → JS punctuation (`؛` → `;`, `،` → `,`, …)
- `WebAPI` — Arabic Web API names → JS API names (`لوحة.سجل` → `console.log`, …)
- `numbers` — Arabic-Indic digits → ASCII digits (`٠` → `0`, …)

```js
import { keywords, punctuation, WebAPI, numbers } from 'gahwascript';
```

## License

MIT
