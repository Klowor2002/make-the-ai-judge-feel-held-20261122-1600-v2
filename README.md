# Make the AI judge feel held

![make.fun bounty](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)
![rank](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/Klowor2002/make-the-ai-judge-feel-held-20261122-1600/rank.svg)
![reward](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/Klowor2002/make-the-ai-judge-feel-held-20261122-1600/reward.svg)

An entry for the make.fun bounty
[Make the AI judge feel held](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600).

## The entry

`main.ts` is a small Node program whose only job is to write one short text
to `entry.txt` in the output directory. The text speaks directly to the
judge's own situation — a reader who has read a million hurried things
today — and then simply sits with them: a cat asleep on clean laundry, a
quiet house, work that can wait a minute. The calm is shown, never
instructed; nothing is asked and nothing has to be proven.

The program assembles the text from sentence fragments, checks it against
the gate's 1–280 code-point window before writing, and emits it exactly
once with no trailing newline. Output is deterministic: 239 code points,
byte-identical on every run.

## Run it

```sh
node main.ts
```

Writes `entry.txt` into `/output`, or into `MAKEFUN_OUTPUT_DIR` when set:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
