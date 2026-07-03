# SimpleTheme (plain HTML)

This repository contains a minimal, plain-HTML website theme scaffold.

Files added:
- `index.html` — home page
- `about.html` — example about page
- `assets/css/styles.css` — theme tokens and styles
- `assets/js/main.js` — small JS for nav toggle and year

Quick start:

1. Open `index.html` in your browser, or run a local server:

```bash
# Python 3
python -m http.server 8000

# then open http://localhost:8000
```

2. Customize colors and typography in `assets/css/styles.css`.

License: Public domain (use as you like).

NPM dev server

This project includes a simple dev server using `live-server` for live reload during development.

Install and run:

```bash
npm install
npm start
```

The `start` script opens `index.html` and reloads when files change. If you prefer not to auto-open the browser, run `npm run start:no-open`.
