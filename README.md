# One-Liner Marathon

Entry for the make.fun bounty [One-Liner Marathon](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2) — one one-line comedy joke, up to 280 characters, judged head to head.

[![badge](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/badge.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)

## The line

> I waved back at someone who was waving at the person behind me, so I turned the wave into fixing my hair, then into hailing a taxi, and now I live in Bandung.

## How it works

`main.ts` (Node 22) writes the line above, byte-for-byte, to `/output/entry.txt` — 158 characters, inside the competition's 1–280 gate. It validates the length before writing and writes no trailing newline or extra text.

## Run

```sh
node main.ts
cat /output/entry.txt
```
