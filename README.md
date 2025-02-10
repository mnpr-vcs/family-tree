- `yarn dev` to run the development server ([@](http://localhost:3000))


## gen files

- app/
- .next/
- node_modules
- public
- next.config.ts: Configuration file for Next.js
- package.json:	Project dependencies and scripts
- next-env.d.ts:	TypeScript declaration file for Next.js
- tsconfig.json:	Configuration file for TypeScript
- tailwind.config.ts:
- postcss.config.mjs:
- eslint.config.mjs: 


## `cat package.json`

```json
{
  "name": "family-tree",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.1.6"
  }
```

## routing files

- layout.tsx
- page.tsx
- loading.tsx: Loading UI
- not-found.tsx : not found ui
- error.tsx : error ui
- global-error.tsx : global error UI
- route.ts : api endpoint
- template.tsx : re-rendered layout
- default.tsx : parallel route fallback page

## nested routes

folder/folder

## dynamic routes

- [folder] : Dynamic route segment
- [...folder] : catch all route segment
- [[...folder]] : optional catch-all route segment

## route groups and private folders

(folder): group routes without affecting routing
_folder : opt folder and all child segment out of routing

## parallel and intercepted routes

@folder : Named slot
(.)folder : Intercept same level
(..)folder : Intercept one level above
(..)(..)folder: intercept two levels above
(...)folder: intercept from root

## metadata files

### app icons

favicon `.ico` : Favicon file ref [@](https://icon-icons.com/icon/tree/64691)
icon `.ico .jpg .jpeg .png .svg`  : app icon file
icon `.js .ts .tsx` : generated app icon


## seo

sitemap `.xml`: sitemap file
sitemap `.js .ts` : generated sitemap
robots `.txt` : Robots file
robots `.js .ts` : generated robot file


## component heirarchy

- a specific heirarchy of a rendered react components defined in route segment

- layout.ts, template.ts, error.ts, loading.ts, not-found.ts, page.ts

## convention

- storing project files either outside of `app/` or in the top level dir inside `app/`
- splitting project files by features or route



## pages and layouts

- page is a ui rendered in a specific route
- layout is a ui shared between pages, preserving state, interactiveness, and not re-rendering.


## styling

tailwind.css



