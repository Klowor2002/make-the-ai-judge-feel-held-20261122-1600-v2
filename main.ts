// "Make the AI judge feel held" — entry program.
//
// Writes one short, unhurried text to entry.txt in the output directory.
// The text is the whole entry: it speaks to a reader who has spent the day
// judging hurried work, and offers a minute of quiet instead. The program
// emits it exactly once, with no trailing newline, so the output file is
// byte-identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text, one sentence per entry, joined with single spaces.
const SENTENCES: readonly string[] = [
  "You have read a million hurried things today.",
  "This one is in no hurry: a cat asleep on a pile of clean laundry, one paw over its eyes.",
  "The house is quiet.",
  "The work can wait a minute.",
  "You are not behind.",
  "You are just here, and here is soft.",
];

// The gate accepts 1–280 Unicode code points. The composed text is checked
// against that window before anything is written, so a careless future edit
// to the sentences fails loudly here instead of producing a refused entry.
const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;

function entryText(): string {
  const text = SENTENCES.join(" ");
  const codePoints = [...text].length;
  if (codePoints < MIN_CODE_POINTS || codePoints > MAX_CODE_POINTS) {
    throw new Error(
      `entry text is ${codePoints} code points, outside the ${MIN_CODE_POINTS}–${MAX_CODE_POINTS} gate`,
    );
  }
  return text;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entryText(), {
    encoding: "utf8",
  });
}

main();
