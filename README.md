# szuryuu.github.io

Personal portfolio / link-in-bio site for **Shafwan Ilham Dzaky (szuryuu)** — DevOps & Infrastructure Engineer.

Single-page static site. Pure HTML, CSS, vanilla JS with Web Components. Hosted on GitHub Pages. No framework, no build step.

## Tech Stack

| Layer      | Choice                                                    |
| ---------- | --------------------------------------------------------- |
| HTML       | Semantic HTML5, single `index.html`                       |
| CSS        | Vanilla CSS with custom properties (no framework)         |
| JS         | Vanilla ES6 with Web Components (`HTMLElement`)           |
| Icons      | Lucide (loaded from unpkg CDN)                            |
| Fonts      | Google Fonts — Inter (body), Londrina Solid 900 (heading) |
| Dev server | `live-server` (npm dependency)                            |
| CI/CD      | GitHub Actions — `actions/deploy-pages@v4`                |
| Hosting    | GitHub Pages (zero-config)                                |

## Quick Start

```bash
npx live-server
```

Serves root directory, auto-reload on change. Default port 8080.

## Deploy

Push to `main` — GitHub Actions auto-deploys to GitHub Pages.

## Project Structure

```
├── index.html       # Entry point — single-page profile
├── main.js          # Web Components + Lucide init
├── style.css        # All styles with CSS custom properties
├── public/
│   └── favicon.ico  # Site favicon
├── package.json     # Only dep: live-server
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deploy workflow
├── AGENTS.md        # Project spec & coding standards
└── README.md        # This file
```

## Features

- **Dark/light theme** — respects OS preference, persists choice, no flash
- **Profile hero** — avatar, name, role, location badge
- **Link grid** — 6 external link cards (GitHub, LinkedIn, personal site, CV, blog, Instagram)
- **Commit graph** — GitHub contribution chart, dark/light variants
- **SEO** — Open Graph, Twitter Card, JSON-LD Person schema
- **Responsive** — 1-column grid on mobile, 2-column above 480px

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
