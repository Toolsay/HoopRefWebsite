# Hoop Ref website

Static website for [hoopref.com](https://hoopref.com), hosted on Cloudflare Workers with Static Assets. Source is maintained in the private `Toolsay/HoopRefWebsite` GitHub repository.

## Development

Use Node.js 22.12+ (22.x), or 24+, with npm. The site uses plain HTML and JavaScript, with Vite for development and builds and Tailwind's Vite plugin for CSS.

Install dependencies from the repository root:

```sh
npm ci
```

Commit `package.json` and `package-lock.json` when changing dependencies. `node_modules/` is ignored.

Start the development server and file watcher from the repository root:

```sh
npm run dev
```

Open the local URL printed by Vite (normally [localhost:5173](http://localhost:5173)). Leave this command running while you edit: Vite watches the source files, recompiles changes as needed, and updates styles or reloads the page automatically. Stop the watcher with Ctrl+C. You do not need to rerun `npm run build` for each edit when using the development server.

| File | Purpose |
| --- | --- |
| `index.html` | Page content, layout, and Tailwind utility classes |
| `styles.css` | Tailwind imports, theme, and custom styles |
| `tokens.css` | Shared design tokens |
| `vite.config.js` | Vite and Tailwind configuration |
| `wrangler.jsonc` | Worker name and static asset deployment configuration |
| `public/404.html` | Missing-page response copied into the build |
| `script.js` | Browser behavior |
| `screenshots/` | App screenshots |
| `logo.svg`, `download-app-store.svg` | Logo and App Store badge |

Edit `styles.css` and `tokens.css` for custom styles, and `index.html` for Tailwind utility classes. Vite compiles CSS from source automatically in development and production. There is no need to generate or commit CSS for Cloudflare.

## Build and check

Build the production site:

```sh
npm run build
```

Vite recreates `dist/` with the page, compiled CSS and JavaScript, referenced images, and the contents of `public/`. Asset URLs are generated automatically. Only put files intended for public access in `public/`. The top-level `404.html` makes Cloudflare return a real 404 for missing pages. `dist/` is ignored; do not edit or commit its contents.

Preview the deployment output:

```sh
npm run preview
```

Open the printed URL (normally [localhost:4173](http://localhost:4173)) and check the page at narrow and wide widths, light and dark appearance, screenshot gallery, section links, App Store button, and support email link. Verify Cloudflare's custom 404 page on a deployed preview too. There is no automated test suite.

Before committing, review `git diff` and run `git diff --check`.
