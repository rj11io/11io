# 11io website

The personal website and portfolio for Ricardo Jorge, an AI Product Engineer.
It is a Next.js app using TypeScript, Tailwind CSS, theme switching, and a
shared shadcn/ui component set.

The page structure is in `app/page.tsx`. Most visible copy, navigation, social
links, project links, and career data live in `lib/site.ts`.

## Local development

This app requires Node.js and npm. Run the commands from this directory:

```bash
npm install
npm run dev
```

The app does not read environment variables in its source code.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run format` | Format TypeScript and TSX files with Prettier |

## Adding components

The shadcn/ui configuration in `components.json` writes components to
`components/ui/`:

```bash
npx shadcn@latest add <component>
```

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

## Editing the site

Update the text and links in `lib/site.ts`. Change the page structure in
`app/page.tsx` and site metadata in `app/layout.tsx`.
