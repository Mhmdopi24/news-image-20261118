import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outputDir, "entry.png");

if (!existsSync(source)) {
  console.error(`error: entry image not found at ${source}`);
  process.exit(1);
}

// Fail early rather than publishing a corrupt or wrong-format artifact.
const header = readFileSync(source).subarray(0, PNG_SIGNATURE.length);
if (!header.equals(PNG_SIGNATURE)) {
  console.error(`error: ${source} is not a valid PNG file`);
  process.exit(1);
}

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, dest);
} catch (err) {
  console.error(`error: failed to write image to ${dest}: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}

// The copy must be byte-for-byte identical so repeated runs are deterministic.
const srcSize = statSync(source).size;
const destSize = statSync(dest).size;
if (destSize !== srcSize) {
  console.error(`error: copied image size mismatch (source ${srcSize} bytes, output ${destSize} bytes)`);
  process.exit(1);
}

console.log(`wrote ${dest} (${destSize} bytes)`);
