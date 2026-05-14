# open-slide — Agent Guide

You are authoring **slides** in this repo. Every slide is arbitrary React code that you write.

## Hard rules

- Put your slide under `apps/demo/slides/<kebab-case-id>/`.
- The entry is `apps/demo/slides/<id>/index.tsx`.
- Put images/videos/fonts under `apps/demo/slides/<id>/assets/`.
- **CRITICAL**: The default export in `index.tsx` MUST be a non-empty array of individual `Page` components (e.g., `export default [Slide1, Slide2]`). Do NOT export a single component that returns multiple slides.
- Do **not** touch `package.json`, `open-slide.config.ts`, or other slides.
- Do not add dependencies. Use only `react` and standard web APIs.

## Which skill to use

- **Drafting a new deck** — use the `create-slide` skill. It walks through scoping questions, structure, and hand-off.
- **Applying inspector comments** (`@slide-comment` markers in a page) — use the `apply-comments` skill.
- **Creating or extracting a theme** — use the `create-theme` skill. Themes live as markdown under `themes/<id>.md` and are read by `create-slide` before authoring.
- **Any other slide edit** — read the `slide-authoring` skill before writing. It is the technical reference for everything inside `apps/demo/slides/<id>/`: file contract, the 1920×1080 canvas, type scale, palette, layout, assets, self-review checklist, and anti-patterns. `create-slide` and `apply-comments` both defer to it for the *how*.

Keep this file short: hard rules only. All deeper guidance lives in the skills above.
