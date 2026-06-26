# LIVIA Lab Website

This repository hosts the LIVIA lab website (Laboratoire d'Imagerie, de Vision et d'Intelligence Artificielle) at École de technologie supérieure (ÉTS), Université du Québec — Montréal.

Purpose
- Public-facing website for LIVIA: team, projects, datasets, publications, news, and vacancies.
- Lightweight Jekyll + Bootstrap site for easy editing and deployment.

Quick structure
- _pages/         — site pages (home, team, datasets, vacancies, etc.)
- _data/          — YAML data (team_members.yml, news.yml, alumni_*.yml, ...)
- _includes/      — reusable HTML fragments (header, footer, datasets card, ...)
- _layouts/       — Jekyll layouts used by pages
- images/         — site images and dataset visuals
- projects/       — project pages and dataset entries
- _site/          — generated site (do not edit)

Local preview
1. Install Ruby and Bundler on Windows.
2. From repository root:
   - bundle install
   - bundle exec jekyll serve --host 0.0.0.0
3. Open http://localhost:4000

Editing notes
- Page front matter controls title/permalink/layout. Use `page.title` in layouts to display the title.
- Add team entries in `_data/team_members.yml`.
- Add news items in `_data/news.yml`.
- Dataset/project pages live under `projects/` or `_pages/` with `permalink:` set.
- Images referenced with `{{ site.url }}{{ site.baseurl }}/images/...`

Deployment
- Build with `jekyll build` and deploy the `_site` output to your hosting (GitHub Pages, Netlify, etc.).

Contact
- For site updates or issues: eric.granger@etsmtl.ca

License
- Code in this repo is released under the MIT License.

