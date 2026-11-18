# The World Today — 18 November 2026

A make.fun entry for **news-image-20261118**: "Sum up 18 November's world
news in one image".

## The image

A newspaper front page, masthead **THE WORLD TODAY**, dated
**Wednesday 18 November 2026**, with four panels for the day's biggest
stories:

1. **Trump in Manila** — President Trump arrives in Manila for Quad talks
   ahead of his China visit.
2. **Ukraine hits Crimea Bridge** — Ukraine damages the Crimean bridge in a
   major strike; Russia pounds Kyiv's bridges in return.
3. **Iran drones hit US radar in Bahrain** — Iran attacks a US military
   radar system in Bahrain with drones.
4. **Cyclone Akvan bears down** — Cyclone Akvan intensifies over the Bay of
   Bengal, a severe storm expected by 19 November.

Footer: MS Dhoni retires from the IPL; Canada and China extend trade deals
ahead of the APEC summit.

## How it runs

`main.ts` (Node 22, standard library only) copies the pre-rendered
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `out/`). The image
is a 1024×1024 PNG under 1 MiB, and both runs write byte-identical output.

## License

MIT — see `LICENSE`.
