# s-abdelnabi.github.io

Personal website of Sahar Abdelnabi and the COMPASS research group — plain HTML/CSS/JS,
no build step. Open `index.html` in a browser to preview; push to `master` to publish.

All lists live in `data/`. Each file starts with a comment explaining its fields, so the
usual way to add something is to **copy an existing entry, paste it, and edit it**.
Text in backticks `` `...` `` can contain quotes and HTML links.

| To change…                              | Edit                                  |
|-----------------------------------------|---------------------------------------|
| News (home page)                        | `data/news.js` — add at the top       |
| Which news years are shown              | `NEWS_SINCE` in `data/news.js`        |
| Publications                            | `data/publications.js`                |
| Group members / alumni                  | `MEMBERS`, `ALUMNI` in `data/group.js` |
| Open calls for a specific project       | `CALLS` in `data/group.js`            |
| General open positions, FAQ             | `POSITIONS`, `FAQ` in `data/group.js` |
| Talks, media                            | `data/talks.js`                       |
| Service, teaching                       | `data/service.js`                     |
| Grants, awards                          | `data/awards.js`                      |
| Tabs, profile links, background, "last updated", hiring dot | `data/site.js` |
| Bio text, research focus                | `index.html`                          |
| Group description, "Join us" intro      | `group.html`                          |
| Colors / fonts                          | variables at the top of `css/style.css` |

## Common tasks

- **Add a paper:** copy an entry in `data/publications.js`, set its `topic` (reuse an existing
  one, or type a new one — the topic filter updates itself), set `type` to `conference`,
  `journal`, `workshop` or `preprint`, and add `selected: true` to star it. Also add it to
  `ref.bib` for the CV, with the same `keywords = {…}`.
- **Link to one topic:** `publications.html#topic=Prompt%20injection` opens the page filtered.
- **Someone joins the group:** add a line to `MEMBERS` (optionally a square photo in
  `images/people/` and `photo: "images/people/name.jpg"`).
- **Someone leaves:** move their line from `MEMBERS` to `ALUMNI` and add `years` and `now`.
- **New project-specific opening:** add an entry to `CALLS`. It automatically appears in
  "Join us" and as a notice at the top of the home page. Set `status: "closed"` when done.
- **Close a general position:** set `status: "closed"` (shown greyed out) or delete it.
- **Not hiring:** set `hiring: false` in `data/site.js` (removes the green dot and link).
- **Add an icon:** icons are referred to by name (see `js/icons.js`, from lucide.dev).

If a section shows a yellow "Couldn't read data/…" box, that data file has a typo — usually
a missing comma between entries or an unclosed quote/backtick. Press F12 in the browser to see
the line number.

## The CV

`main.tex` + `ref.bib` live in this folder but are **not published** (they're listed in
`.gitignore`, together with the `old_*` backups). Publications are split into
Conference / Journal / Workshop / Preprint by the `keywords` field of each bib entry, and printed
in file order — add new papers at the top of their block. Compile with pdfLaTeX or XeLaTeX
**+ biber** (the Overleaf default) and save the PDF as `files/CV_SaharAbdelnabi.pdf`.

## Publishing

This folder is the git repository. After editing:

```
git add -A
git commit -m "Add news item"
git push
```

GitHub Pages serves the files as they are (`.nojekyll`), usually within a minute.

- `files/` holds the CV, research statement, and slides the site links to.
- `publications/`, `talks/`, `cv/`, `activities/`, `teaching/`, `resume/` only contain redirects,
  so links to the old site keep working. Old one-page links such as `/#hiring` are redirected too.
- `404.html` is shown for any missing page.
- The previous academicpages version of the site is kept in git history under the tag
  `pre-redesign-2026`.
