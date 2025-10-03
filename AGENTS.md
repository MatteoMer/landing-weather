# Repository Guidelines

## Project Structure & Module Organization
Source lives under `src/app`, using Next.js App Router conventions (`layout.tsx` for shared chrome, `page.tsx` for the landing view, and `globals.css` for base styles). Static assets, favicons, and generated images belong in `public/`. Tailwind and PostCSS config live at the repo root alongside `tsconfig.json` and `tailwind.config.ts`. Keep feature-specific helpers close to the consuming component inside `src/app`, and co-locate any new route segments under their own folder (e.g., `src/app/weather/page.tsx`).

## Build, Test, and Development Commands
Install dependencies with Bun to stay in sync with `bun.lock`: `bun install`. Start a hot-reloading dev server via `bun run dev`. Produce an optimized build with `bun run build` and serve it locally using `bun run start`. Run lint checks with `bun run lint` before opening a PR. (If you prefer npm, the matching `npm run …` commands behave the same.)

## Coding Style & Naming Conventions
Write components in TypeScript using React function components and hooks. Favor two-space indentation and keep files in PascalCase when they export a component (e.g., `WeatherCard.tsx`). Reuse Tailwind utility classes; extract repeatable patterns into `globals.css` instead of adding ad-hoc CSS. Rely on `eslint-config-next` defaults; address lint warnings immediately rather than suppressing them.

## Testing Guidelines
No automated test suite ships yet, so add coverage when introducing non-trivial logic. Follow the pattern `*.test.ts(x)` and place unit tests next to the implementation or inside `src/__tests__/` if shared. Use React Testing Library for component behavior and consider Playwright for end-to-end flows touching weather APIs. Always run linting plus any new tests locally before pushing.

## Commit & Pull Request Guidelines
Write commit messages in the imperative mood with a concise scope (e.g., `Add hero weather widget`). Group related changes together and avoid formatting-only commits unless they accompany tooling updates. Pull requests should describe the user-facing impact, list testing performed, and link tracking issues when available. Include screenshots or GIFs for UI changes so reviewers can verify rendering quickly.

## Environment & Configuration Tips
Secrets belong in `.env.local`, which Next.js loads automatically; never commit them. Document any required keys (such as third-party weather APIs) in `README.md` and provide sensible fallbacks for local development.
