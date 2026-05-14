---
name: create-slide-image-prompts
description: Use this skill when generating image prompts for Master Of Slide decks, especially when a slide needs hero artwork, infographics, posters, thumbnails, UI mockups, product visuals, avatars, or storyboard-like assets. It distills the user's GPT Image 2 prompt cheat-sheet into a reusable slide-image prompt workflow.
---

# Create Slide Image Prompts

This skill turns a short visual request or slide outline into image-generation
prompts suitable for slide assets. Use it inside `create-slide`,
`create-slide-from-markdown`, and `slide` whenever bitmap visuals would improve
the deck.

Only write generated or copied assets under `apps/demo/slides/<id>/assets/`. Do not modify
the source Markdown note.

When invoked from `/slide`, respect the user's requested image count. If the
count is missing, ask for it before planning assets. If the user delegates the
choice, default to generating **one image per slide** whenever possible. Ensure the prompts generate clean, simple, and structured visual aids (e.g., infographics, diagrams) that directly aid in understanding the content.

## Prompt Assembly

Use this structure:

```text
[subject] + [composition] + [style] + [environment] + [lighting] + [typography/layout] + [details] + [aspect_ratio]
```

Fill these variables:

- `subject`: what the image shows
- `composition`: framing, focal subject, hierarchy
- `style`: visual aesthetic
- `environment`: background or setting
- `lighting`: lighting mood
- `typography`: text-safe area, labels, callouts, or no text
- `details`: materials, props, texture, atmosphere
- `aspect_ratio`: landscape, portrait, or square

Default ratios:

- Slide hero, cover, thumbnail, banner, UI mockup: `landscape`
- Poster, profile, vertical campaign: `portrait`
- Logo experiment, product cutout, general asset: `square`

## Category Recipes

### Profile / Avatar

```text
polished portrait of [subject], centered composition, clean background,
expressive face, premium editorial photography or stylized illustration,
natural texture, soft cinematic lighting, clear focal separation, [aspect_ratio]
```

Use for profile images, character avatars, host portraits, and persona cards.

### YouTube Thumbnail / High-Impact Cover

```text
bold YouTube thumbnail about [topic], dramatic focal subject, strong headline
area, high contrast colors, attention-grabbing composition, expressive emotion,
layered graphic elements, clear readable text space, energetic creator
aesthetic, [aspect_ratio]
```

Use for attention-grabbing cover slides, video-style section openers, and
high-contrast talk titles.

### Infographic / Educational Diagram

```text
clean educational infographic about [topic], central hero visual, multiple
labeled callouts, structured information blocks, precise diagram layout,
readable typography, balanced spacing, professional editorial design, crisp
iconography, high information density, [aspect_ratio]
```

Use for explanation slides, workflows, layered systems, comparisons, and
step-by-step visuals.

### Product Marketing / Brand Poster

```text
premium product marketing poster for [product or brand], hero-centered
composition, luxury editorial styling, polished material rendering, clean brand
typography area, sophisticated color palette, high-end commercial lighting,
subtle background texture, campaign-ready visual, [aspect_ratio]
```

Use for product, company, service, brand, or campaign-like visuals.

### E-Commerce Hero

```text
e-commerce hero image for [product], clean isolated composition, premium studio
lighting, realistic material detail, conversion-focused layout, tidy product
hierarchy, optional feature badges, soft shadow grounding, polished online
retail aesthetic, [aspect_ratio]
```

Use for sales decks, landing-page mockups, and product-detail visuals.

### UI Mockup / App Screen

```text
high-fidelity UI mockup for [app or service], realistic mobile or desktop frame,
rich interface hierarchy, detailed widgets and controls, modern product design
language, polished screen glow, realistic spacing system, dense but readable
layout, startup-grade product presentation, [aspect_ratio]
```

Use for app concepts, dashboards, SaaS products, and interface slides.

### Storyboard / Character Sheet

```text
cinematic character sheet or storyboard for [character or scene], consistent
design language, expressive poses, multi-panel layout, labeled costume and prop
details, dynamic framing, stylized linework or anime finish, strong visual
storytelling, [aspect_ratio]
```

Use for scenarios, journeys, campaign narratives, and character-based explainers.

## Slide Asset Rules

- Generate **one image per slide** unless specified otherwise.
- The images should prioritize **simplified infographics, clean diagrams, flowcharts, graphs, or structured charts** that directly help the audience understand the content. Avoid photorealistic imagery or complex abstract metaphors; focus on clear, minimalist visual aids (e.g., process flows, comparisons, architectural outlines).
- Prefer strong, context-aware imagery over decorative filler.
- Keep Korean text out of generated images unless the user explicitly needs it;
  add Korean text as React text for editability.
- Ask for or use real screenshots, logos, and private photos instead of
  hallucinating them.
- Avoid fake charts and fake documents. Use diagram-style abstractions instead.
- Save generated images under `apps/demo/slides/<id>/assets/`.
- Import assets with `import hero from './assets/hero.png';` and render with
  `<img src={hero} alt="..." />`.

## Using Nano Banana 2 for Image Generation

Since the Antigravity agent environment has access to **Nano Banana 2 (nanobanana2)** via the `generate_image` tool, you must actively utilize it to create the bitmap assets after writing the final prompt. Save the generated images under `apps/demo/slides/<id>/assets/` with descriptive filenames.

If for any reason image generation fails or is unavailable, write precise `ImagePlaceholder` hints or include an `imagePrompts` section in your final handoff so the user can generate assets later.

## Output

For each planned asset, produce:

- page number or page role
- category recipe used
- final prompt
- target filename under `apps/demo/slides/<id>/assets/`
- whether the asset was generated, copied, or left as a placeholder
