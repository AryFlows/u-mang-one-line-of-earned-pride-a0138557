// One Line of Earned Pride — a quiet, earned moment: a boy reads the last
// line aloud by himself after a year of stumbling, and his mother, who never
// learned to read, closes her eyes and smiles. Stdlib only; writes entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "After a year of stumbling over every page, he read the last line aloud by himself, and his mother, who never learned to read, closed her eyes and smiled.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-empty line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
