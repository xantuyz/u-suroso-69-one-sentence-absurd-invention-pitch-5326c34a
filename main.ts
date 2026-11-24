// Entry for make.fun "One-Sentence Absurd Invention Pitch" bounty.
//
// Writes one sentence to /output/entry.txt: a pitch for a ridiculous
// invention that fixes a tiny everyday annoyance.
//
// The pitch: a Wi-Fi router that only works after you apologize for
// yelling at it, so the whole house learns manners one buffering bar at
// a time. The annoyance is real (buffering, and shouting at the router);
// the fix is absurd (the router demands an apology); the payoff turns a
// household's manners into a bandwidth problem. One sentence, 132
// characters, no trailing newline — the program also self-checks that
// the line is exactly one sentence. Fresh among 492 submissions: rivals
// pitch parachute toasters, apologising alarms, screaming remotes, and
// sock-drawer hostage negotiators — none makes the router demand manners.
//
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "A Wi-Fi router that only works after you apologize for yelling at it, so the whole house learns manners one buffering bar at a time.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 220) {
    throw new Error(`line must be 1-220 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.trim().split(".").filter((s) => s.trim().length > 0).length !== 1) {
    throw new Error("line must be exactly one sentence");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, { encoding: "utf8" });
  console.log(`wrote ${chars.length} characters to ${OUTPUT_PATH}`);
}

main();
