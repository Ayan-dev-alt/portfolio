# M Ayan Ali — React Portfolio

Component-based Vite + React portfolio converted from the original static portfolio concept.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes
- CV is available at `public/M-Ayan-Ali-CV.pdf` and the Download CV button works.
- Contact form uses the original Formspree endpoint.
- Social/project links are centralized in `src/data/portfolio.js`.
- No Tailwind dependency is used, so the project avoids Tailwind/PostCSS setup issues.
- Social icons use `react-icons`; GitHub is not imported from `lucide-react`, avoiding the previous named-export error.
