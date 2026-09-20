# 45 Feet — a field library

Five condensed military books, each about a 15-minute read, in the grain of the original plates.

Live: [eugeniosp3.github.io/45-feet](https://eugeniosp3.github.io/45-feet/)

| Book | Source | Path |
|---|---|---|
| 45 Feet | Jan Breemer, *Soviet Submarines* (Jane’s, 1989) | `/submarines/` |
| Thirty-Four | Anthony Tucker-Jones, *T-34* (Pen & Sword, 2015) | `/t-34/` |
| The Wedge | Thomas L. Jentz, *Panzertruppen 1* (Schiffer) | `/panzertruppen/` |
| −63° | *Effects of Climate on Combat in European Russia* (CMH, 1952) | `/climate/` |
| Deep Battle | David M. Glantz, *Soviet Military Operational Art* (Frank Cass, 1991) | `/deep-battle/` |

## Open it locally

```bash
python3 -m http.server 8765 --directory site
```

Then [http://localhost:8765](http://localhost:8765). Fonts need the network; everything else is local.

There is no backend. Zip `site/` or push it to any static host.
