import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Search,
  LayoutGrid,
  FileText,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Seo from "../components/Seo";
import { routeSeo } from "../config/seoConfig";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  hidden: {},
};

const phaseCards = [
  {
    num: 1,
    icon: Search,
    headline: "Understand your goals, users, and success metrics.",
    subhead:
      "Discovery isn't a delay—it's what makes the rest of the project accountable.",
    body: "We start by aligning on what the project must achieve, who it's for, and how you'll measure success. No design work until we're clear on priorities. This reduces rework and keeps feedback focused on goals, not opinions.",
    deliverables: [
      "Business goals and priority outcomes (ranked)",
      "Primary audiences and main user tasks",
      "Competitive/category scan (structure and messaging)",
      "Measurement plan (conversion events, analytics)",
      "Risks and constraints (timeline, approvals, dependencies)",
      "Technical and content inventory (for redesigns)",
    ],
  },
  {
    num: 2,
    icon: LayoutGrid,
    headline: "Shape the site structure and user paths.",
    subhead:
      "Structure is the silent driver of conversion—we get it right before visuals.",
    body: "We turn strategy into a clear sitemap and page hierarchy. Every page has a defined purpose and a place in the user journey. This avoids \"every page trying to do everything\" and keeps navigation and conversion paths logical.",
    deliverables: [
      "Sitemap and page hierarchy",
      "Definition of what each page must do (persuade, validate, support)",
      "Navigation and menu structure",
      "Content plan (what each page must say; who owns copy)",
    ],
  },
  {
    num: 3,
    icon: FileText,
    headline: "Align content and design from day one.",
    subhead: "Late content breaks layouts and timelines—we plan it early.",
    body: "Design is informed by real content direction from the start. We define sections, key messages, and assets (images, video, downloads) per page so layouts don't break when copy lands and timelines stay predictable.",
    deliverables: [
      "Page-by-page intent and primary message",
      "Required sections and proof points per page",
      "Asset list (photography, video, icons, diagrams)",
      "Content sources and ownership (who writes, who approves)",
      "SEO and search intent (if organic growth is a goal)",
    ],
  },
  {
    num: 4,
    icon: Palette,
    headline: "Design that moves people toward action.",
    subhead:
      "When discovery and structure are strong, design is faster and more coherent.",
    body: "We design with a clear system: wireframes first, then visual design. Components, responsive behavior, and conversion paths are defined up front. We design for accessibility and mobile from the start, not as an afterthought.",
    deliverables: [
      "Wireframes or layout studies for core templates",
      "Component system (cards, forms, navigation, etc.)",
      "Visual design (brand, typography, color, UI)",
      "Responsive behavior and interaction rules",
      "Design QA (accessibility, edge cases, empty states)",
    ],
  },
  {
    num: 5,
    icon: Code,
    headline: "Build that's fast, accessible, and maintainable.",
    subhead:
      "Performance and accessibility are part of brand trust—we treat them as baseline.",
    body: "We build to performance and accessibility standards from the start. Code is clean, components are reusable, and we test on real devices. You get staging previews and clear handoff so your team can own the site long term.",
    deliverables: [
      "Implementation from approved designs",
      "Performance targets (e.g. Core Web Vitals) and optimization",
      "Accessibility (WCAG-oriented; keyboard, contrast, semantics)",
      "Staging environment and review points",
      "Security and hosting considerations",
    ],
  },
  {
    num: 6,
    icon: Rocket,
    headline: "Controlled launch and ongoing support.",
    subhead:
      "Launch isn't the last meeting—it's when governance and improvement begin.",
    body: "We use a launch checklist so nothing is left to chance: analytics, redirects, SEO, and final QA. After launch, we can define governance—who updates what, how often, and how we monitor and improve.",
    deliverables: [
      "QA and launch checklist (forms, analytics, redirects, SEO)",
      "Go-live and post-launch monitoring",
      "Handover and documentation",
      "Optional: ongoing support, retainer, or improvement backlog",
    ],
  },
];

const timelineSteps = [
  { label: "Discovery", weeks: "1–2" },
  { label: "IA & content", weeks: "2–4" },
  { label: "Design", weeks: "4–7" },
  { label: "Build", weeks: "7–11" },
  { label: "Launch", weeks: "11–13" },
];

const differentiators = [
  "We lock goals before we open Figma.",
  "We treat performance and accessibility as non-negotiable.",
  "We plan content and structure so design doesn't have to guess.",
  "We give you a launch checklist and a path for what happens after.",
];

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function PhaseCard({ phase }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const Icon = phase.icon;
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex items-center gap-4">
          <motion.span
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white text-lg font-semibold"
          >
            {phase.num}
          </motion.span>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-600 group-hover:bg-stone-200 transition-colors">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-semibold text-stone-900 mb-1">
            {phase.headline}
          </h3>
          <p className="text-stone-500 text-sm italic mb-3">{phase.subhead}</p>
          <p className="text-stone-600 mb-4">{phase.body}</p>
          <ul className="space-y-2">
            {phase.deliverables.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                className="flex items-start gap-2 text-sm text-stone-600"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

const HowWeWorkPage = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const diffRef = useRef(null);
  const ctaRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-50px" });
  const diffInView = useInView(diffRef, { once: true, margin: "-50px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  return (
    <>
      <Seo
        {...(routeSeo["/how-we-work"] || {
          title: "How We Work – Our Process | BuzynessStories",
          description:
            "From discovery to launch: see our 6-phase process for web design and development. Clear deliverables, no surprises.",
        })}
        canonicalPath="/how-we-work"
      />
      <div className="w-full min-h-screen bg-stone-50 text-stone-900">
        {/* Hero */}
        <motion.header
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16 max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-sm font-medium uppercase tracking-wider mb-2"
          >
            Our process
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-900"
          >
            How we work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-lg md:text-xl text-stone-600 max-w-2xl"
          >
            We don't start with pixels—we start with your goals and your users. Our process is built so you always know what's happening, what we need from you, and what "done" looks like.
          </motion.p>
        </motion.header>

        {/* Intro */}
        <AnimatedSection className="px-6 md:px-12 pb-12 max-w-4xl mx-auto">
          <motion.p
            variants={fadeInUp}
            className="text-stone-600 text-lg leading-relaxed"
          >
            Fewer surprises, fewer revisions, and a site that's built to perform. A clear process means every phase has defined deliverables and decision points—so the work stays predictable and aligned with your outcomes.
          </motion.p>
        </AnimatedSection>

        {/* Timeline */}
        <section ref={timelineRef} className="px-6 md:px-12 pb-16 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-sm font-medium uppercase tracking-wider mb-4"
          >
            Typical project timeline
          </motion.p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-center gap-2"
              >
                <span className="rounded-full bg-stone-200 px-3 py-1 text-sm font-medium text-stone-700">
                  {step.label}
                </span>
                <span className="text-stone-400 text-sm">Weeks {step.weeks}</span>
                {i < timelineSteps.length - 1 && (
                  <span className="text-stone-300 hidden md:inline">→</span>
                )}
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-3 text-sm text-stone-500"
          >
            Indicative; varies by scope and team availability.
          </motion.p>
        </section>

        {/* Phase cards */}
        <section className="px-6 md:px-12 pb-20 max-w-4xl mx-auto space-y-8">
          {phaseCards.map((phase) => (
            <PhaseCard key={phase.num} phase={phase} />
          ))}
        </section>

        {/* What makes us different */}
        <section
          ref={diffRef}
          className="px-6 md:px-12 py-16 bg-white border-y border-stone-200"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={diffInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-stone-900 mb-6"
            >
              What makes us different
            </motion.h2>
            <ul className="grid gap-3 md:gap-4">
              {differentiators.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={diffInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3 text-stone-600"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          ref={ctaRef}
          className="px-6 md:px-12 py-20 md:py-28 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-stone-900 text-white p-8 md:p-12"
          >
            <p className="text-xl md:text-2xl font-medium mb-6">
              Ready to build something clear and measurable? Tell us about your project and we'll outline how we'd approach it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-stone-900 px-6 py-3 font-medium hover:bg-stone-100 transition-colors"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors"
              >
                See our work
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default HowWeWorkPage;

