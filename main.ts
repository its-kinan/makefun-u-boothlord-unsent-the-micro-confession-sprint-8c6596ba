import { mkdirSync, writeFileSync } from "node:fs";

// Unsent: The Micro-Confession Sprint — one two-part micro-confession.
// Revised down in-session from the 317-char first draft: the extra clauses
// explained the feeling instead of letting it sit, so they are cut. What
// stays is the sharpest specific core — the funeral, her side, the nightly
// rehearsal of a forgiveness never meant. 195 chars total, message 131.
const text =
  "To: my brother, who still thinks I left because of the money\n" +
  "I left because you took her side at Dad's funeral, and I have rehearsed forgiving you every night since and never once meant it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
