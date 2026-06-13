# Repository Guidelines

## Project Overview

**GahwaScript** is an Arabic-to-JavaScript source-to-source compiler targeting browsers. It tokenizes Arabic-syntax source code (GahwaScript) into equivalent JavaScript tokens, then executes the compiled output via `new Function()`. The project is a learning/experimental effort to translate ECMAScript into Arabic.

## Architecture & Data Flow

```
GahwaScript input (Arabic)
  → parser() tokenizer
    → Tokens array (Arabic keywords/APIs mapped to English JS)
      → compile() joins token values
        → new Function(compiledString)()
          → Browser runtime
```

The entire compiler lives in **one file** (`src/main.ts`). There is no AST, no multi-pass architecture — just a single-pass tokenizer that maps Arabic tokens directly to English JavaScript tokens and concatenates them.

### Key Modules (within `src/main.ts`)

| Section | Lines | Purpose |
|---------|-------|---------|
| `keywords` Map | 8–48 | Arabic keyword → JS keyword (e.g. `اذا` → `if`, `دالة` → `function`) |
| `punctuation` Map | 50–84 | Arabic/special punctuation → JS punctuation (e.g. `؛` → `;`, `،` → `,`) |
| `WebAPI` Map | 86–185 | Arabic Web API names → JS API names (e.g. `لوحة.سجل` → `console.log`, `صحيفة` → `document`) |
| `numbers` Map | 187–208 | Arabic-Indic digits → ASCII digits (e.g. `٠` → `0`) |
| `Token` interface | 210–215 | Shape: `{ type, start, end, value }` |
| `parser()` | 242–372 | Single-pass tokenizer: parens → punctuation → strings → whitespace → numbers → words (keyword/WebAPI/name) |
| `compile()` | 230–240 | Runs parser, extracts values, joins into JS string |
| `runCompiler()` | 225–228 | Wraps compiled string in `new Function()` and invokes it |

### Data Flow

1. User types GahwaScript in `#code-area` textarea
2. Click `#run` button → `runCompiler()`
3. `compile()` calls `parser()` which tokenizes character-by-character
4. Token values (already mapped to English JS) are joined into a string
5. `new Function(compiledString)()` executes the result

## Key Directories

```
.
├── src/
│   └── main.ts          # Entire compiler: tokenizer, maps, UI wiring
├── dist/                # TypeScript compiler output (tsc → ./dist)
├── package.json         # NPM manifest, build scripts
├── tsconfig.json        # TypeScript configuration
└── .gitignore           # Ignores node_modules
```

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run build` | `tsc && npx webpack ./dist/main.js` — compile TypeScript then bundle with webpack |
| `npm test` | Stub only: `echo "Error: no test specified" && exit 1` |

There is no lint, no dev server, no watch mode configured.

## Code Conventions & Common Patterns

### Tokenizer Pattern

The `parser()` function uses a manual `while (current < input.length)` loop with `char = input[current]` and explicit `current++`/`continue` control flow. Each token type is checked in priority order:

1. **Parens** — literal `(` / `)` passthrough
2. **Punctuation** — `punctuation` Map lookup, passthrough if unknown
3. **Strings** — `'…'` or `"…"` delimited, value wrapped in `"` quotes
4. **Whitespace** — collapsed to single space
5. **Numbers** — Arabic-Indic and ASCII digits, mapped via `numbers` Map
6. **Words** — Arabic regex range `ء-ي`, checked against `keywords` → `WebAPI` → fallthrough as `name`

### Map-Based Translation

All translations are `Map<string, string|number>` lookups. No functions, no regex substitution — direct key→value mapping. This is the core pattern for extending the language.

### TypeScript Usage

- `interface Token` is the only explicit type
- `any` typed in places (`tokens: any` in `compile()`, `let tokens: Token[]` in `parser()`)
- `strict` mode is **not** enabled (no `"strict": true` in tsconfig)
- DOM types used for element queries (`<HTMLInputElement>document.querySelector(…)`)

### Error Handling

Single `throw new TypeError(…)` on unrecognized characters in the parser. No try/catch anywhere in the compiler pipeline. `new Function()` errors bubble up uncaught.

## Important Files

| File | Role |
|------|------|
| `src/main.ts` | Entire application: compiler, tokenizer, UI, event wiring |
| `package.json` | Build scripts, dependencies, metadata |
| `tsconfig.json` | TypeScript compiler settings |
| `README.md` | Project roadmap and current progress notes |

## Runtime/Tooling Preferences

- **Runtime**: Browser (DOM-reliant — `document.querySelector`, `console`, `new Function`)
- **Language**: TypeScript 4.3+
- **Package manager**: npm
- **Bundler**: webpack (via `npx webpack`)
- **Module resolution**: `node` strategy (tsconfig)
- **Target output**: `es2015` with DOM lib

## Testing & QA

No test framework is configured. The `test` script is a placeholder. Testing is currently manual: open the HTML page in a browser, type GahwaScript, click Run, check console output.

## Roadmap (from README)

1. Translate core WebAPIs (Window API, Storage API) — **in progress**
2. Complete the basic tokenizer — **in progress**
3. Refactor for maintainability
4. Generate ASTs (currently no AST, direct token → JS string)
5. Translate full ECMAScript 2015 standard to Arabic


## Using Samaritan as an Agent

Samaritan is your project's bug memory. When you fix a bug, be a good samaritan and record it. When you encounter a new bug, search past fixes first.

### Prerequisites

One-time human setup: `samaritan init` (or `npx samaritan init`) in the project root. Creates `.samaritan/` with the JSONL store, SQLite FTS5 index, and a `.gitignore`. Agents never run `init` — it's interactive and for humans.

All agent commands work from any subdirectory. Samaritan walks up to find `.samaritan/`. Use `--dir <path>` to override.

### Command Reference

All commands output JSON to stdout and `{"error":"..."}` to stderr on failure. Never parse stdout for errors — rely on exit codes (0 = success, 1 = failure).

#### Record a bug fix

```
samaritan add "<title>" "<description>" --tags "tag1,tag2" --resolution "<how it was fixed>"
```

Returns the created issue as JSON: `{"id":"a1b2c3d4","title":"...","description":"...","resolution":"...","tags":["tag1","tag2"],"created":"2026-06-13T..."}`

- `id` is auto-generated (8 hex chars). Save it for later `show`/`tag` calls.
- `--tags` is comma-separated. Use for categorizing by subsystem, error type, framework, etc.
- `--resolution` is free-text. Describe what you did, what the root cause was, and why it worked. This is the most important field for future agents.

#### Search past issues

```
samaritan search "<query>" --tag "tag" --limit 20
```

Returns array of matches: `[{"id":"...","title":"...","tags":[...],"snippet":"..."}]`. Default limit is 10.

- FTS5 syntax: plain phrases for substring match, `AND`/`OR`/`NOT` for boolean queries, `*` for prefix wildcards.
- `--tag` filters to exact tag match.
- Malformed queries return `[]` silently (no error).

#### Show full issue details

```
samaritan show <id>
```

Returns the full issue object including `description` and `resolution` (not just snippet).

#### Update tags

```
samaritan tag <id> <tag1> <tag2> ...
```

Replaces all tags on the issue. Returns `{"id":"...","tags":[...]}`.

### Workflow

1. **Encounter a bug** → `samaritan search "<error message or symptom>"` to see if a fix exists.
2. **Found a matching resolution** → `samaritan show <id>` to read the full fix.
3. **Fixed a new bug** → `samaritan add ...` to record it for the next agent.
4. **Categorize later** → `samaritan tag <id> <tags>` to refine taxonomy.
