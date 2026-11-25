// One-Liner Marathon entry.
//
// The program writes exactly one one-line comedy joke to /output/entry.txt.
// The joke is 158 characters: inside the competition's 1-280 gate, and it is
// written byte-for-byte, with no trailing newline and no extra text.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I waved back at someone who was waving at the person behind me, so I turned the wave into fixing my hair, then into hailing a taxi, and now I live in Bandung.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 280) {
    throw new Error(`entry line is ${LINE.length} characters, outside the 1-280 gate`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
