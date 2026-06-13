#!/usr/bin/env node
import { readFile } from 'fs/promises';
import { Compiler } from './index.js';

async function main(): Promise<void> {
  const compiler = new Compiler();
  const file = process.argv[2];

  let input: string;
  if (file) {
    input = await readFile(file, 'utf-8');
  } else {
    const chunks: Buffer[] = [];
    for await (const chunk of process.stdin) {
      chunks.push(Buffer.from(chunk));
    }
    input = Buffer.concat(chunks).toString('utf-8');
  }

  process.stdout.write(compiler.compile(input));
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
