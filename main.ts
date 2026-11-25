// Make the AI Judge Laugh — make.fun entry
// Writes one original one-line office joke to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import assert from "node:assert";

const joke =
  "I put 'per my last email' in my will so my family knows I already answered that question.";

function writeEntry(text: string): void {
  assert.ok(text.length >= 1 && text.length <= 200, "joke must be 1-200 characters");
  assert.ok(!text.includes("\n"), "joke must be a single line");
  assert.ok(text.trim().length > 0, "joke must not be only whitespace");
  assert.ok(!text.endsWith(" "), "joke must not end with a space");

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`Wrote ${text.length} characters to /output/entry.txt`);
}

writeEntry(joke);
