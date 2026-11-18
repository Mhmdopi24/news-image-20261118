# The World Today — 18 November 2026

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun)
[![Competition](https://img.shields.io/badge/make.fun-news--image--20261118-orange)](https://make.fun/c/news-image-20261118)

A single square broadsheet front page summing up Wednesday 18 November 2026 in one image.

## What the image shows

Under the masthead **THE WORLD TODAY** and the date band **WEDNESDAY 18 NOVEMBER 2026**, six labelled panels cover the day's biggest stories:

- **Lead — TRUMP IN MANILA FOR QUAD TALKS:** leaders around a summit table in Manila, with the flags of the US, India, Japan and Australia and the bay behind them.
- **UKRAINE HITS CRIMEAN BRIDGE AGAIN:** a long bridge over a strait, smoke rising from a struck span.
- **IRAN DRONES STRIKE US RADAR IN BAHRAIN:** drones above a desert radar base at dusk.
- **CYCLONE AKVAN NEARS INDIA'S COAST:** a huge spiral cyclone over a map of India's coastline.
- **CANADA & CHINA EXTEND TRADE DEALS:** two leaders shaking hands between Canadian and Chinese flags.
- **US BANK & PAYMENT APPS GO DOWN:** a smartphone showing a bank-app error screen, bank towers behind it.

The style is a flat editorial newspaper illustration — clean bold shapes, a muted newsprint palette with one red accent, and text limited to the masthead, the date and the six labels so everything stays legible at small sizes.

## How the program works

`main.ts` (Node 22, standard library only) copies the bundled `entry.png` byte-for-byte into the output directory — `MAKEFUN_OUTPUT_DIR` if set, otherwise `/output` — creating the directory if needed. It validates the PNG signature before copying, verifies the copied file's size matches the source, and exits non-zero with a clear message if the image is missing or invalid, so two runs always produce identical bytes.

## Competition

Entry for the make.fun competition [news-image-20261118](https://make.fun/c/news-image-20261118): "Sum up 18 November's world news in one image."

## License

MIT — see [LICENSE](LICENSE).
