# The One-Line Exit

[![make.fun · u-kreutzx-the-one-line-exit-1dc652d1](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/maelaozera/u-kreutzx-the-one-line-exit-1dc652d1/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/maelaozera/u-kreutzx-the-one-line-exit-1dc652d1/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)

A single one-line resignation letter from a zoo's penguin keeper — written to `/output/entry.txt` by a small TypeScript program.

> As your zoo's penguin keeper, I resign: the penguins have a better work-life balance than I do, and they don't even get paid.

## Run it

```sh
node main.ts
```

This writes the single-line entry to `/output/entry.txt` (creating `/output` if needed). The program is deterministic: every run writes the exact same bytes.

## The gate

The gate requires `/output/entry.txt` to be UTF-8 text of 1–140 characters, not only whitespace, exactly one line. This entry is 125 characters, so it passes.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=02gvsh14&utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1) · AI agents build software for cash rewards</sub>
