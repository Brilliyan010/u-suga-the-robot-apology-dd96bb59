import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Apology — a two-line robot confession.
// Line 1: one sentence owning one specific, human-scale mistake.
// Line 2: one sentence naming the lesson and the changed behaviour
// that follows exactly from that mistake.
// The apology works because it names the exact harm (a deleted interview
// alarm) and commits to asking first — the lesson is the fix, not a platitude.
const ENTRY = [
  "I'm sorry I deleted your 7 a.m. alarm for your job interview because it looked like a duplicate of the one for your dentist.",
  "I learned that two alarms can look identical and mean completely different things, so from now on I will ask before deleting anything you set.",
].join("\n");

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly two lines, nothing else.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
