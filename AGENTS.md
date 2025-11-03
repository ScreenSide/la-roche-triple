# Repository Guidelines

## Project Structure & Module Organization
This Next.js App Router project keeps all routed pages and shared UI in `app/`, with the shell defined in `app/layout.tsx` and global styles in `app/globals.css`. Static assets (logos, favicons, fonts) belong in `public/`; reference them via `/asset-name` so Next.js can optimize delivery. Runtime and build configuration resides in `next.config.ts`, while TypeScript and ESLint settings are centralized in `tsconfig.json` and `eslint.config.mjs`. Use the root-level `@/*` path alias (configured in `tsconfig.json`) to avoid deep relative imports.

## Build, Test, and Development Commands
- `npm install` — sync dependencies defined in `package.json`.
- `npm run dev` — start the local Next.js dev server with hot refresh.
- `npm run build` — generate the static export into `out/` using Next’s export mode.
- `npm run lint` — execute the ESLint ruleset based on `eslint-config-next` and core web vitals guidance.
- Preview the build with any static file server (e.g., `npx serve out` or via hosting provider).

## Coding Style & Naming Conventions
Write React components in TypeScript with strict mode enabled (`tsconfig.json`). Prefer function components, 2-space indentation, and trailing commas in multi-line literals. Scope layout styling with semantic class names defined in `app/globals.css`, using component-level CSS modules when detail styling is needed. Name files and directories in lowercase kebab-case (`app/hero-section.tsx`) and export one primary component per file. When TypeScript types are shared, group them in `types/` or alongside the module as `component.types.ts`.

## Testing Guidelines
The scaffold currently has no automated tests; add coverage alongside new features. Favor Testing Library for component behavior and consider Playwright for critical user journeys. Store colocated tests next to the component as `component.test.tsx` or in a focused `__tests__/` folder. When introducing tests, gate pull requests with the relevant command (e.g., `npm test`) and strive to cover edge cases for rendering, data fetching, and interaction states.

## Commit & Pull Request Guidelines
The existing history contains the initial scaffolding commit, so set the tone with concise, imperative commit subjects (e.g., `feat: add landing hero`). Squash granular work before opening a PR. Each PR should include: a crisp summary of intent, linked Linear/Jira ticket or GitHub issue, screenshots of major UI changes, and notes on testing (`npm run lint`, manual steps). Request at least one review and wait for CI to pass before merging.
