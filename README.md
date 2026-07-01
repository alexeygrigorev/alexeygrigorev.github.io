# Alexey Grigorev — Personal Site

The personal profile site for Alexey Grigorev (Data Scientist & ML Engineer),
deployed to [alexeygrigorev.com](https://alexeygrigorev.com).

It's a static site built with [Rustkyll](https://github.com/alexeygrigorev/rustkyll),
a Jekyll-compatible static site generator. All content is data-driven from YAML
files in [`_data/`](./_data), so most edits don't require touching the HTML.

## Running Locally

### Using Make (recommended)

```bash
make install   # Download the pinned Rustkyll binary (first time only)
make serve     # Start the dev server at http://localhost:4000
```

Available make targets:

- `make help` — show all available targets
- `make install` — download the pinned Rustkyll release binary into `.bin/`
- `make serve` — start the Rustkyll development server
- `make serve-livereload` — start the server with live reload
- `make build` — build the production site into `_site/`
- `make clean` — remove generated files and caches

### Manual commands

```bash
mkdir -p .bin
curl -fsSL -o .bin/rustkyll \
  https://github.com/alexeygrigorev/rustkyll/releases/download/v0.4.7/rustkyll-linux-amd64
chmod +x .bin/rustkyll
.bin/rustkyll serve
```

## Editing Content

Most of the site's content lives in YAML data files rather than the HTML:

| Page | Data source |
|------|-------------|
| Home (`index.html`) | [`_data/overview.yml`](./_data/overview.yml), [`_data/sidebar.yml`](./_data/sidebar.yml) |
| CV (`cv.html`) | [`_data/cv.yml`](./_data/cv.yml) |
| Projects (`projects.html`) | [`_data/projects.yml`](./_data/projects.yml), [`_data/language_colors.yml`](./_data/language_colors.yml) |
| Courses (`courses.html`) | [`_data/courses.yml`](./_data/courses.yml) |
| Services (`services.html`) | [`_data/services.yml`](./_data/services.yml) |

## Project Structure

```
├── _config.yml          # Site configuration
├── _data/               # YAML content (CV, projects, courses, services, …)
├── _layouts/            # Page templates (default.html)
├── _includes/           # Reusable components (header, sidebar, tabs, …)
├── assets/              # CSS, JS, fonts, images
├── public/              # Static assets (favicon, etc.)
├── services/            # Individual service pages (consulting, devrel, workshops)
├── index.html           # Home page
├── cv.html              # CV / résumé
├── projects.html        # Open-source projects
├── courses.html         # Courses
├── services.html        # Services overview
├── CNAME                # Custom domain (alexeygrigorev.com)
└── Makefile             # Rustkyll build/serve targets
```

## Deployment

The site is deployed to GitHub Pages automatically by
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). On every push
to `master`, the workflow builds the site with Rustkyll and publishes the
`_site/` directory to GitHub Pages. No local build step is required.
