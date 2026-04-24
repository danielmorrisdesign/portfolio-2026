# danielmorris.nl

Personal portfolio site for Daniel Morris — built with [Astro](https://astro.build) and deployed on Vercel.

## Development

```sh
npm install     # install dependencies
npm run dev     # start dev server at localhost:4321
npm run build   # production build to ./dist
npm run preview # preview the production build locally
```

## Project structure

```
src/
├── layouts/
│   └── BaseLayout.astro   # shared <html> shell, fonts, theme bootstrap
├── pages/
│   └── index.astro        # routes
└── styles/
    └── global.css         # reset + design tokens (CSS custom properties)
```

Theme is set on `<html data-theme="...">`, persisted in `localStorage` under the key `theme`, and falls back to `prefers-color-scheme`.
