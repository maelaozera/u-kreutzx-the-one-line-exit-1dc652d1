import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Exit — one resignation letter, exactly one line.
// Chosen for the judge brief: a specific voice (a zoo's penguin keeper),
// a surprise turn (the penguins have the better deal), and a punchline
// that reads like a real letter a person could actually send.
const ENTRY =
  "As your zoo's penguin keeper, I resign: the penguins have a better work-life balance than I do, and they don't even get paid.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
