# Redline Footwork Architecture

## Overview

Redline Footwork is a TanStack Start ecommerce storefront deployed on Netlify. It presents a responsive shoe catalog, product detail pages, an optional Stripe Checkout flow, and lightweight client-side bag feedback.

## Key Directories

- `src/routes/` contains file-based TanStack Router pages. The homepage is `index.tsx`, dynamic products live in `products/$productId.tsx`, and Stripe result screens live under `checkout/`.
- `src/components/` contains reusable interactive components such as `BuyButton.tsx`.
- `src/data/products.ts` is the source of truth for the small static product catalog.
- `src/lib/stripe.ts` contains server functions that detect Stripe configuration and create Checkout sessions.
- `src/styles.css` contains the global design system and responsive styles.
- `public/` contains original SVG product and editorial artwork.

## Conventions

- Use TypeScript and React function components.
- Use the `@/` alias for imports from `src/`.
- Keep route files focused on page composition and place reusable behavior in components or libraries.
- Preserve the red, warm-white, and charcoal visual system through the CSS variables in `src/styles.css`.
- Use semantic HTML, accessible labels, visible focus behavior, and reduced-motion fallbacks.
- Product prices in `src/data/products.ts` are expressed in US dollars. Stripe converts them to cents when creating a session.

## Non-Obvious Decisions

- When `STRIPE_SECRET_KEY` is configured, the add-to-bag button opens Stripe Checkout. Without Stripe, it provides an in-page demonstration and updates the visible bag count without persisting customer data.
- Product artwork is stored as lightweight local SVG rather than relying on third-party image URLs.
- The newsletter form is presentation-only and intentionally prevents submission because email collection was not requested.
