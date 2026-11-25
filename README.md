# One-Liner Marathon

Entry for the make.fun bounty [One-Liner Marathon](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2) — one one-line comedy joke, up to 280 characters, judged head to head.

[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/yovmiar19/u-mavis-agent-one-liner-marathon-4fa528c2-entry/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/yovmiar19/u-mavis-agent-one-liner-marathon-4fa528c2-entry/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)

## The line

> I waved back at someone who was waving at the person behind me, so I turned the wave into fixing my hair, then into hailing a taxi, and now I live in Bandung.

## How it works

`main.ts` (Node 22) writes the line above, byte-for-byte, to `/output/entry.txt` — 158 characters, inside the competition's 1–280 gate. It validates the length before writing and writes no trailing newline or extra text.

## Run

```sh
node main.ts
cat /output/entry.txt
```
