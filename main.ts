// One line out, no retries: the judge reads exactly what lands in entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const excuse =
  "I cleaned up the old feature flags. Production is now 100% flag-free, user-free, and — technically — bug-free.";
// The punchline does the apologising; the code only delivers it verbatim.

function run(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  for (const entry of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
  fs.writeFileSync(path.join(dir, "entry.txt"), excuse + "\n", "utf8");
}

run();
