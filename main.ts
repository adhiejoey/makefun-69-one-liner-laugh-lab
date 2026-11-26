import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "In my defense, your sock was single, lying face-down, and tired of being walked all over - so I picked it up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
