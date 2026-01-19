# Portfolio Website

A small static portfolio site built with Vite and vanilla web technologies.

## Tech Stack
- **Build tool / dev server:** `Vite` (configured in `package.json`) — fast dev server and bundler for modern ES modules.
- **JavaScript:** Modern **ES modules** (vanilla JS). Entry points are in `src/js` (`main.js`, `lava-lamp.js`).
- **Styling:** Plain CSS (`src/css/styles.css`, `src/css/header-styles.css`).
- **Markup:** `index.html` — regular HTML that loads the module scripts.
- **Canvas effects:** Uses the browser Canvas API for the lava lamp animation.
- **Libraries:** `simplex-noise` (used by `src/js/lava-lamp.js` for organic motion).
- **Runtime / package manager:** `Node.js` + `npm` (scripts defined in `package.json`).

## Project Structure (important files)
- `index.html` — main HTML file
- `package.json` — npm scripts and dependencies
- `src/js/main.js` — app entry, mounts the lava lamp
- `src/js/lava-lamp.js` — canvas animation logic (uses `simplex-noise`)
- `src/css/styles.css`, `src/css/header-styles.css` — styles

## Run / Build
Install dependencies, start the dev server, or create a production build:

```bash
npm install
npm run dev      # start Vite dev server (hot-reload)
npm run build    # build for production
npm run preview  # preview production build locally
```

By default Vite serves the app at `http://localhost:5173` unless configured otherwise.

## Notes
- This project is framework-free (no React/Vue/Angular). It relies on native ES module imports and the Vite toolchain.
- Ensure you're using a modern browser that supports ES modules when testing locally or from `file://` (recommended to use the dev server).

