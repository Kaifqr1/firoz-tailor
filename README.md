# Firoz Tailor

A premium, standalone men’s custom-tailoring storefront. Customers can browse the collection, select a garment, enter measurements, and send a pre-filled request to Firoz Tailor on WhatsApp.

## Run locally

```bash
pnpm install
pnpm dev
```

## Verify and build

```bash
pnpm test
pnpm check
pnpm build
```

## Publishing

This is intentionally separate from QRServe. Upload the project to a separate private Git repository, import it into Vercel, keep the build command as `pnpm build`, and set the output directory to `dist`.

## WhatsApp flow

The approved WhatsApp destination is configured in `src/App.tsx`. Customer-entered measurements are safely URL-encoded by `src/order.ts`; no order is stored in a database.
