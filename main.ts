// news-image-20261118 — entry program.
//
// The image is a pre-rendered front page (entry.png) drawn for this
// competition in the build session. This program copies it to the
// output directory make.fun grades: /output/entry.png.
//
// No network, no dependencies, no randomness: both runs write the
// exact same bytes.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const source = join(repoRoot, "entry.png");
const target = join(outputDir, "entry.png");

// Fail loudly instead of copying a corrupt file: the PNG signature is
// 89 50 4E 47 0D 0A 1A 0A, and the gate caps the image at 1 MiB.
const bytes = readFileSync(source);
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngSignature)) {
  throw new Error("entry.png is not a PNG file");
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target} (${statSync(target).size} bytes)`);
