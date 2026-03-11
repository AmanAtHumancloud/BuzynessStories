## Web Agency Site Plan

### Phase 1 — Understand Current Codebase

- **Stack**: Vite + React 18 + Tailwind CSS + Framer Motion + GSAP + Locomotive Scroll + React Icons.
- **Structure**:
  - `index.html` bootstraps React with fonts and Locomotive CSS.
  - `src/main.jsx` mounts `<App />`.
  - `src/App.jsx` is a single-page layout rendering: `Navbar`, `Hero`, `Reel`, `Services`, `Projects`, `Philosophy`, `FollowUs`, `SocialMediaLinks`, `ContactDetails`.
  - `src/components/*` contains all current sections and a simple `ProjectCard`.
  - `tailwind.config.js` and `postcss.config.js` are standard and minimal.
- **Design**:
  - Fonts from Google: `"Poppins"` globally, `"Roboto Flex"` (italic) for `#design` spans.
  - Colors: heavy use of `bg-stone-950` with white text, white sections with dark text, large rounded corners and pill buttons, video-heavy visuals.
  - Existing subtle animations via Framer Motion, GSAP marquee, and Locomotive scroll.
- **Routing**:
  - No router yet; everything lives on `/` inside `App.jsx` as a long-scrolling landing page.
- **Data**:
  - All content is hardcoded in components (services copy, projects arrays, social links, contact details).
- **Key gaps**:
  - No multi-page routing (`/services`, `/portfolio`, `/about`, `/contact`, `/blog`).
  - No centralized content file.
  - No Footer, Accordion, Modal, or reusable Button/SectionHeading/ServiceCard/etc.
  - No contact form or client-side validation.

### Phase 2 — Overall Goals

- Build a **full web agency website** for a beginner-stage agency:
  - **Modern / Gen Z**: bold type, video, strong contrast, slightly edgy but not chaotic.
  - **Trustworthy**: clear services, case studies, testimonials, team, and contact.
  - **Fast & lightweight**: minimal dependencies; reuse existing animations and styles.
  - **Easy to update**: all content in a central data module, not scattered through components.
- Strictly **preserve the existing UI style** (colors, fonts, layout feel, videos, rounded shapes); only extend it.

### Phase 3 — Pages to Build

- **Home (`/`)**

  - Hero with bold headline, subheadline, and CTA button (e.g., “Let’s Talk” / “See Our Work”).
  - “What We Do” section with 3–4 service cards (Web Design, Development, Branding, SEO).
  - “Why Us” section with 3 trust points (Fast Delivery, Transparent Pricing, Dedicated Support).
  - Mini portfolio strip (2–3 featured projects with image/video, title, link).
  - Short testimonials strip (2–3 quotes).
  - CTA banner (“Ready to build something great? Let’s go.”).
  - Footer.

- **Services (`/services`)**

  - Page hero with headline/subheadline.
  - Detailed service cards (icon, title, description, feature bullets).
  - Services: Web Design, Web Development, Landing Pages, E‑commerce, SEO, Maintenance.
  - Comparison table or pricing teaser (e.g., “Starting from $X” or “Custom quote”).
  - Bottom CTA.

- **Portfolio (`/portfolio` or `/work`)**

  - Filterable project grid (filters: All, Web Design, E‑commerce, Branding).
  - Each card: thumbnail image/video, project name, category tag, short description.
  - Clicking a card opens a project detail view (Modal or dedicated route) with description, tech used, live link, and extra images/screens.

- **About (`/about`)**

  - Agency story: who, when started, what you believe.
  - Team section: cards with name, role, photo placeholder, fun one-liner.
  - Values section: 3–4 core values with simple icons.
  - “We’re hiring” / “Work with us” teaser.

- **Contact (`/contact`)**

  - Contact form: Name, Email, Budget (dropdown), Project description (textarea), Submit button.
  - Client-side validation: non-empty fields + basic email format check.
  - On submit: simulated success state and visible confirmation message.
    - `// TODO: Connect to backend or email service (EmailJS, Formspree, etc.)`
  - Also show: email, WhatsApp/phone, social links (pulled from data file).
  - Optional FAQ accordion: 3–5 questions/answers.

- **Blog (`/blog`)** (optional but recommended)
  - Blog list page: grid/list of posts with thumbnail, title, date, excerpt, “Read More”.
  - Single post page: full article layout with title, date, content, and back link.
  - Content sourced from local JSON/JS data; optional markdown parsing later.

### Phase 4 — Shared Components

- **Navbar**

  - Left: logo text (BuzinessStories / agency name from data).
  - Right: nav links (Home, Services, Work, About, Blog, Contact) + primary CTA button (“Get a Quote”).
  - Mobile: hamburger menu preserving existing icon; slide-down or overlay menu.

- **Footer**

  - Logo, short description, quick nav links, social icons, copyright.
  - Matches existing dark/light sections and spacing.

- **Button**

  - Primary and secondary variants using Tailwind classes aligned with current pills.
  - Reused across hero, CTAs, forms, etc.

- **SectionHeading**

  - Title + optional subtitle / eyebrow label.
  - Styled to match existing large headings (`#design` font where relevant).

- **ServiceCard**

  - Icon (via `react-icons`), title, short description, feature bullet list.
  - Used on Home “What We Do” and `/services`.

- **ProjectCard**

  - Extend existing `ProjectCard` to accept: title, category tag, description, image/video, click handler.
  - Reuse in Home mini portfolio and `/portfolio`.

- **TestimonialCard**

  - Quote, name, company/role, optional avatar placeholder.

- **Badge / Tag**

  - Small rounded label for categories (e.g., “Web Design”, “E‑commerce”).

- **Accordion**

  - For FAQ: question row that toggles answer panel with framer-motion for subtle animation.

- **Modal**
  - Full-screen or centered overlay for project detail view, respecting existing dark/light theme and rounded corners.

### Phase 5 — Content & Data Structure

- Create `src/data/siteContent.js` (or `.ts` if converted later) exporting structured content:
  - **agencyInfo**: name, tagline, description, foundingYear, location, contact email, phone/WhatsApp, social links.
  - **services**: array of `{ id, slug, title, shortDescription, fullDescription, iconName, features, startingPrice }`.
  - **projects**: array of `{ id, slug, title, category, summary, description, image, videoUrl, techStack, liveUrl, isFeatured }`.
  - **team**: array of `{ id, name, role, bio, image, funOneLiner }`.
  - **values**: array of `{ id, title, description, iconName }`.
  - **testimonials**: array of `{ id, quote, name, company, role }`.
  - **blogPosts**: array of `{ id, slug, title, date, excerpt, content }`.
  - **faq**: array of `{ id, question, answer }`.
- Refactor existing components to consume this file:
  - `Hero` uses agency name/tagline & CTA text from `agencyInfo`.
  - `Services` uses a subset of `services` and possibly `values`.
  - `Projects` uses `projects.filter(p => p.isFeatured)` for the current home section.
  - `SocialMediaLinks` uses `agencyInfo.socialLinks`.
  - `ContactDetails` uses `agencyInfo.email` and `agencyInfo.phone`.

### Phase 6 — Design Rules

- Preserve:
  - Current fonts, colors, and layout density.
  - Video usage, dark/light blocks, rounded corners, and hover animations.
- If a new design token is needed:
  - Add minimal Tailwind theme extensions (e.g., `colors.primary`) that **match existing colors**.
- All new sections:
  - **Mobile-first** with responsive Tailwind classes.
  - Use semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<form>`, etc.
  - Smooth scroll for anchor links (`scroll-behavior: smooth`).
  - Light on-scroll animations (fade/slide via `framer-motion`), consistent with current motion.
  - All images/videos get meaningful `alt` text or descriptive context.

### Phase 7 — Technical Implementation Details

- **Routing**

  - Install `react-router-dom`.
  - In `main.jsx`, wrap `<App />` with `<BrowserRouter>`.
  - Turn `App.jsx` into a layout:
    - Always render `Navbar` and `Footer`.
    - Use `<Routes>` and `<Route>` for `/`, `/services`, `/portfolio`, `/about`, `/contact`, `/blog`, `/blog/:slug`.
  - Ensure navigation uses `<Link>` components; no full-page reloads.

- **Pages & Reuse**

  - `HomePage` reuses existing sections (`Hero`, `Reel`, `Services`, `Projects`, `Philosophy`, `FollowUs`, social strip, contact CTA).
  - Other pages use shared components (`SectionHeading`, `ServiceCard`, `ProjectCard`, `Accordion`, `TestimonialCard`, `Button`).

- **Forms & Validation**

  - Implement controlled inputs for the contact form.
  - Basic validation:
    - Name non-empty.
    - Email non-empty & matches simple regex.
    - Budget selected.
    - Project description meets minimum length.
  - On submit:
    - If invalid: show inline error messages.
    - If valid: set “submitted” state and show success message.
    - Leave clear TODO comment for backend/email integration.

- **Code Quality**
  - DRY components (reuse cards, buttons, layouts).
  - Consistent naming: PascalCase for components, camelCase for variables/functions.
  - Keep comments focused on **intent and usage**, not obvious line-by-line narration.

### Phase 8 — Final Checklist

- All core routes exist and work: `/`, `/services`, `/portfolio` (or `/work`), `/about`, `/contact`, `/blog` (+ single post).
- `Navbar` and `Footer` appear on every page; nav links highlight current page where appropriate.
- All textual and structural content is sourced from `src/data/siteContent.js`.
- Layout is responsive for mobile and desktop (checked at common breakpoints).
- No broken links, missing imports, or unused large dependencies.
- Existing visual identity is preserved and extended, not replaced.
- Contact form has client-side validation and success state, with a clear backend TODO.
- Animations are smooth, subtle, and do not hurt performance.
- Project builds and runs via `npm run dev` / `npm run build` without additional configuration, ready for deployment on Vercel, Netlify, or GitHub Pages.
