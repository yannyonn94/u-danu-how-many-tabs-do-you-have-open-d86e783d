// How Many Tabs Do You Have Open? — my honest count is 173.
//
// A researcher/crypto worker's browser: price charts, docs, and "read
// later" tabs that never get closed, so the count quietly grows past
// triple digits. The program writes exactly those three digits —
// "173", no trailing newline — so every run is byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";

const TAB_COUNT = "173";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAB_COUNT, "utf8");
