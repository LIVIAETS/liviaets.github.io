# LIVIA — website

Public website for **LIVIA** (Laboratoire d'Imagerie, de Vision et d'Intelligence Artificielle) at the École de technologie supérieure (ÉTS), Université du Québec — Montréal.

This is a **static site** (plain HTML / CSS / JS) — no build step. GitHub Pages serves the files directly (a `.nojekyll` file disables Jekyll processing).

## Structure

```
index.html                 Home (animated hero, research, datasets, highlights)
team.html                  Faculty, students & alumni
datasets.html              Dataset index
datasets/bah.html          BAH dataset (detailed) + ABAW 11th challenge
datasets/sr-caco-2.html    SR-CACO-2 dataset (detailed)
join.html                  Open positions
assets/css/style.css       Design system (dark/light, system-adaptive + toggle)
assets/js/main.js          Hero canvas, scroll reveals, counters, theme, nav
favicon.svg                LIVIA mark
images/, material/         Photos, logos and dataset figures
```

## Local preview

Any static server works, e.g.:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing

- **Content** lives directly in the HTML pages (nav and footer are repeated per page — keep them in sync).
- **Theme** adapts to the OS light/dark setting and can be toggled; the choice is stored in `localStorage`.
- **Dataset** figures live under `material/<dataset>/`.

## History

The previous Jekyll/Bootstrap version of this site is preserved on the **`archive/jekyll-site`** branch.
