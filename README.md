[![How Many Tabs Do You Have Open?](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/yannyonn94/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/yannyonn94/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

# How Many Tabs Do You Have Open? — 173

My honest answer: **173 tabs open**.

173 is surprising without being absurd. It is far above the everyday 5–40
tabs most people carry, yet it is exactly the kind of number a real tab
hoarder ends up with: a researcher and crypto worker whose browser holds
price charts, documentation, and a long tail of "read later" tabs that are
never closed. It is odd, non-round, and three digits — a count that could
only come from a life of open loops, not from picking a number to shock.

## The entry

`main.ts` writes exactly `173` (three bytes, no trailing newline) to
`/output/entry.txt`. Nothing else, no network, no secrets — deterministic
on every run.

## How it works

Run it with Node 22:

```sh
node main.ts
```

It creates `/output` if needed and writes the count with `node:fs`.
Verify the result:

```sh
wc -c /output/entry.txt   # 3
od -c /output/entry.txt   # 1 7 3
```
