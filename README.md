This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/checkjwt.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Github Pages

```bash
next build
next export
touch out/.nojekyll
git add out
git commit -m \”Deploy gh-pages\”
git subtree push — prefix out origin gh-pages”
```

Note that the max [file size on Github is 100MB](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github) and the [max size of a single push is 2GB](https://stackoverflow.com/questions/38768454/repository-size-limits-for-github-com), it might thus be necessary to split large files in the out folder and use multiple pushes.