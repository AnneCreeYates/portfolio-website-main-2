# Theme tokens

This folder contains theme-level CSS variables (design tokens).

## Purpose

- Provide a single source of truth for colors, spacing, and component defaults.
- Make it easy to add more themes by redefining the same token names.

## Token categories

- Palette tokens: raw swatches you should not use directly in components unless necessary.
  - `--palette-accent-500` - primary accent color
  - `--palette-accent-300` - lighter accent / glow

- Semantic tokens: use these in component CSS. Themes should redefine these.
  - `--color-background` - app background or main surface
  - `--color-text` - default foreground text color
  - `--color-primary` - primary accent used for interactive elements
  - `--color-primary-glow` - glow / accent highlight color

- Component tokens: optional defaults for specific components (theme-level overrides)
  - `--button-text-color`
  - `--button-padding`
  - `--button-border-color`
  - `--button-border-width`
  - `--button-border-radius`
  - `--button-width`

## Utilities

- Spacing tokens: `--space-xs`, `--space-sm`, `--space-md`, `--space-lg` (use for margins/padding when appropriate)
- Typography: `--font-size-sm`, `--font-size-base`, `--font-size-lg`
- Radii: `--radius-base`

## Color scale (palette naming)

We follow a numeric shade scale for palette tokens (e.g. `--palette-accent-300`, `--palette-accent-500`).

- `100–300`: lighter tints (use for glows, backgrounds, subtle borders)
- `400–600`: base tones (500 is typically the brand/base color)
- `700–900`: darker shades (use for text, strong borders, focus states)

This convention makes it easier to add predictable variants later (hover, active, disabled).

Semantic tokens (the `--color-*` names) map to palette shades and are what components should consume.

## Backward compatibility

Legacy variable names have been removed from the theme. Components should use the semantic tokens listed above (`--color-*`, `--space-*`, etc.).

## Usage examples

In theme file (already present):

:root {
--color-primary: #4ade80;
--color-text: #ecfbfcd3;
}

In component CSS:

.button {
background: var(--color-primary);
color: var(--button-text-color, var(--color-text));
padding: var(--button-padding, 0.4rem 1rem);
}

## Migration guidance

1. Replace hard-coded values in component CSS with semantic tokens (`var(--color-...)`, `var(--space-...)`).
2. For component-specific exceptions create component tokens (e.g. `--card-radius`) in the theme and reference them.
3. Keep layout-only rules (margins, grid placement) inside component CSS or use utility classes.
4. Remove old theme imports inside components and import the theme centrally (e.g. in `src/main.js`).

If you need a tokens JSON or cross-platform export (for tooling or design handoff), consider adding Style Dictionary later.

## Contrast checks

Accessibility requires sufficient contrast between foreground and background colors. Recommended quick checks:

- Chrome DevTools (manual): open DevTools → Accessibility → Contrast ratio for an inspected element.
- Lighthouse (auto): run against your local dev server to get an accessibility score and contrast issues.
  - Example: `npx lighthouse http://localhost:5173 --only-categories=accessibility --port=9222`
  - Tip: run with Chrome headless or use `--view` to open the report.
- axe-core CLI: automated WCAG checks from the command-line.
  - Example: `npx @axe-core/cli http://localhost:5173`
- Pa11y: automated accessibility testing with concise output.
  - Example: `npx pa11y http://localhost:5173`

Interpreting results:

- WCAG AA: contrast ratio >= 4.5:1 for normal text, 3:1 for large text.
- WCAG AAA: 7:1 for normal text, 4.5:1 for large text.

If a check flags a contrast issue, adjust the semantic tokens in this theme (for example `--color-text` or `--color-primary`) and re-run the tests. Prefer changing semantic tokens rather than component CSS so the fix propagates everywhere.
