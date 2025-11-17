## Rohit Malakar — Portfolio

Modernised single-page experience (plus deep links) powered by Next.js App Router, Tailwind CSS, Framer Motion micro-interactions, and an accessible design system. All original content (text, projects, imagery, links, resume) is preserved while improving responsiveness, theming, and performance.

### Tech Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS w/ design tokens + CSS variables (light/dark modes)
- Framer Motion for animation, Headless UI for modals/overlays
- EmailJS (default) + optional SendGrid serverless fallback
- Jest + React Testing Library for unit tests

## Getting Started

```bash
npm install
npm run dev          # start local dev server
npm run build        # production build
npm start            # serve the build
npm test             # run unit tests (Button, ContactForm, Sidebar)
```

Visit `http://localhost:3000` after running `npm run dev`.

## Environment Variables

Create `.env.local` with the following (EmailJS is the default option used client-side):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: serverless fallback via SendGrid (app/api/contact)
SENDGRID_API_KEY=your_sendgrid_key
SENDGRID_TO_EMAIL=receiver@example.com
SENDGRID_FROM_EMAIL=verified_sender@example.com

# Optional logging flag for the lightweight analytics hook
NEXT_PUBLIC_ENABLE_LOGS=true
```

### Contact Form Delivery Options

1. **EmailJS (default)** – set the three `NEXT_PUBLIC_EMAILJS_*` keys above. The form calls `emailjs-com` directly.
2. **Serverless + SendGrid** – comment the `sendEmail` call inside `ContactForm` and uncomment `sendViaServer`. Configure the SendGrid keys (and verify sender addresses) before deploying to Vercel/Netlify.
3. **Fallback** – a `mailto:` link is always available to users if a request fails.

### Resume Download

- Direct download link is generated from Google Drive file ID `1ZcFpDreEBNMfwF42v6qLByKbHYUrKlrb`.
- To update, change the `fileId` in `lib/content.ts` and keep the same pattern:
  - Direct: `https://drive.google.com/uc?export=download&id=<FILE_ID>`
  - Viewer fallback: `https://drive.google.com/file/d/<FILE_ID>/view`

## Project Structure

- `app/layout.tsx` – global metadata, theme provider, sidebar/header chrome, structured data.
- `app/page.tsx` – landing page sections: Home, Resume, Projects, About, Toolstack, Contact.
- `components/*` – modular UI (Sidebar, Header, Hero, ToolStackGrid, ContactForm, etc.).
- `styles/globals.css` – CSS variables + Tailwind base overrides (WCAG AA contrast).
- `app/api/contact/route.ts` – optional SendGrid endpoint scaffold.
- `__tests__/*` – Jest tests for Button, ContactForm, and Sidebar.

## QA & Manual Test Checklist

- [ ] Keyboard navigation covers every interactive element, including the mobile menu and modal.
- [ ] Focus outlines are visible; skip link jumps to `#main`.
- [ ] Sidebar collapses on hover/blur, mobile header hamburger opens/closes correctly.
- [ ] Contact form validates (name ≥2 chars, valid email, message ≥10 chars) and shows success/error states.
- [ ] EmailJS submission succeeds locally (or SendGrid endpoint returns 200).
- [ ] Resume download button fetches the file or shows the fallback viewer link.
- [ ] Theme toggle persists between reloads (localStorage).
- [ ] Reduced motion mode respects `prefers-reduced-motion`.
- [ ] Responsive grid verified on ≤640px, 641–1024px, and ≥1025px widths.
- [ ] Run `npm run build` then `npm start` to confirm zero console warnings.

## Deployment

1. Add the required environment variables in Vercel (Project Settings → Environment Variables).
2. Push to your repository; Vercel auto-builds via `npm run build`.
3. After deployment, re-run the QA checklist (especially contact form + resume download) on Chrome, Firefox, Safari, and at least one mobile browser.
