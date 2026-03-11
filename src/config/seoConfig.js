const SITE_NAME = "BuzynessStories";
const DEFAULT_COUNTRY = "India";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "") ||
  "https://buzynessstories.com";

export const defaultSeo = {
  title: SITE_NAME,
  description:
    "BuzynessStories is a web design and development agency in India helping startups and brands build modern digital products.",
  robots: "index,follow",
  ogType: "website",
};

export const routeSeo = {
  "/": {
    title: `Custom software development agency in ${DEFAULT_COUNTRY} | ${SITE_NAME}`,
    description:
      "BuzynessStories is a custom software, web and mobile app development agency in India helping startups and brands design, build and scale modern digital products.",
    ogType: "website",
  },
  "/services": {
    title: `Software development services in ${DEFAULT_COUNTRY} | ${SITE_NAME}`,
    description:
      "Explore full-service web, mobile, SaaS, AI automation, game and desktop application development services from BuzynessStories in India.",
  },
  "/web-application": {
    title: `Custom web application development company in ${DEFAULT_COUNTRY} | ${SITE_NAME}`,
    description:
      "Custom web app development services for scalable, secure business platforms, dashboards, CRMs, marketplaces and SaaS products.",
  },
  "/mobile-application": {
    title: `Custom mobile app development company in ${DEFAULT_COUNTRY} | ${SITE_NAME}`,
    description:
      "End-to-end iOS, Android and cross-platform mobile app development services for startups and enterprises in India and worldwide.",
  },
  "/custom-saas": {
    title: `Custom SaaS development services in ${DEFAULT_COUNTRY} | ${SITE_NAME}`,
    description:
      "Product strategy, UX and engineering for subscription-based SaaS platforms, from MVP to global-scale cloud products.",
  },
  "/ai-automation": {
    title: `AI automation agency in ${DEFAULT_COUNTRY} | AI agents & workflows | ${SITE_NAME}`,
    description:
      "AI automation services for AI agents, voice bots and workflow automation that reduce manual work and improve customer experiences.",
  },
  "/game-development": {
    title: `Game development company in ${DEFAULT_COUNTRY} | Mobile & cross-platform games`,
    description:
      "Game development services for mobile, 2D/3D and cross-platform games with engaging design, strong performance and scalable backends.",
  },
  "/desktop-application": {
    title: `Desktop application development services in ${DEFAULT_COUNTRY} | ${SITE_NAME}`,
    description:
      "Desktop app development services for Windows and cross-platform business software, internal tools and productivity applications.",
  },
  "/portfolio": {
    title: `Design and development portfolio | ${SITE_NAME}`,
    description:
      "Selected design and development work from BuzynessStories, including web, mobile and product experiences for startups and brands.",
  },
  "/about": {
    title: `About ${SITE_NAME} | Product design and development team in ${DEFAULT_COUNTRY}`,
    description:
      "Learn about BuzynessStories, a web design and product development team combining UX, engineering and strategy to ship digital products.",
  },
  "/contact": {
    title: `Contact ${SITE_NAME} | Request a project quote`,
    description:
      "Tell us about your web, mobile, SaaS or AI project. Contact BuzynessStories to discuss scope, timelines and budgets.",
  },
  "/blog": {
    title: `Product, design and engineering insights | ${SITE_NAME} blog`,
    description:
      "Articles on product strategy, UX design, web and mobile development, SaaS, AI automation and more from the BuzynessStories team.",
  },
};

export const buildBlogPostSeo = (slug) => {
  const safeSlug = String(slug || "").replace(/[-_]/g, " ");
  const capitalized =
    safeSlug.charAt(0).toUpperCase() + safeSlug.slice(1).toLowerCase();
  return {
    title: `${capitalized} | ${SITE_NAME} blog`,
    description:
      "An in-depth article from BuzynessStories on product, design and engineering topics for modern digital businesses.",
    ogType: "article",
  };
};
