# SOUTHKART Footwork

A bold red-and-white ecommerce storefront for a fictional performance shoe label. The site includes an editorial homepage, responsive product catalog, detailed shoe pages, lightweight bag interactions, and an optional Stripe Checkout flow.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom global design system
- Netlify TanStack Start integration
- Stripe Checkout when `STRIPE_SECRET_KEY` is configured
- Lucide icons and original local SVG artwork

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The default Vite development URL is shown in the terminal. For Netlify feature emulation, use:

```bash
netlify dev --port 8889
```

## Stripe Checkout

Set `STRIPE_SECRET_KEY` in the Netlify environment to enable hosted checkout. `SITE_URL` may also be set to control the success and cancellation return URLs. Without Stripe configuration, add-to-bag actions remain available as a front-end demonstration.
