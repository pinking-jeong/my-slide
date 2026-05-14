Create a Master Of Slide deck from a Markdown or Obsidian note.

Usage:

```text
/slide /absolute/path/to/source.md
```

Instructions:

- Use the `slide` skill.
- Treat `$ARGUMENTS` as the Markdown path plus any optional user constraints.
- Before writing files, ask for missing values:
  - slide page count
  - generated image count
- Read the source note, but do not modify it.
- Create the deck under `slides/<kebab-case-id>/index.tsx`.
- Copy referenced local assets into `slides/<id>/assets/` when possible.
- Always use your image generation capabilities (`generate_image` or similar) to create the requested number of image assets.
- Save the generated images to `slides/<id>/assets/` and use `<img>` tags in the slide code. Do not use `ImagePlaceholder` for these.
- Follow `slide-authoring` before writing React.

User arguments:

```text
$ARGUMENTS
```
