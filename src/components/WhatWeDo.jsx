import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineDesktopComputer,
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineSearchCircle,
} from "react-icons/hi";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: HiOutlineCode,
    title: "Web App Development",
    description:
      "Modern web app development service solutions for growing digital businesses worldwide, built for speed, scalability, and long-term performance.",
    href: "/web-application",
  },
  {
    icon: HiOutlineDesktopComputer,
    title: "Mobile App Development",
    description:
      "Secure enterprise-grade mobile app development services with scalable architecture and seamless user experience.",
    href: "/mobile-application",
  },
  {
    icon: HiOutlineSparkles,
    title: "Custom SaaS Development",
    description:
      "Custom SaaS development services from MVP launch to full-scale product growth, designed for flexibility, recurring revenue, and seamless user management.",
    href: "/custom-saas",
  },
  {
    icon: HiOutlineSearchCircle,
    title: "AI Automation & Voice Agents",
    description:
      "AI agents and advanced AI automation services to reduce manual work, improve customer support, streamline workflows, and boost overall operational efficiency.",
    href: "/ai-automation",
  },
  {
    icon: HiOutlineDesktopComputer,
    title: "Game Development",
    description:
      "Engaging game development solutions with immersive design, smooth performance, and interactive gameplay.",
    href: "/game-development",
  },
  {
    icon: HiOutlineDesktopComputer,
    title: "Desktop App Development",
    description:
      "Reliable desktop app development services for productivity tools, smart dashboards, and enterprise software systems.",
    href: "/desktop-application",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const WhatWeDo = () => {
  return (
    <section className="w-full bg-white text-stone-950 py-16 md:py-24 px-6 md:px-32 md:rounded-t-[4rem] md:-mt-[4rem] relative z-10">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.header className="mb-12 md:mb-16" variants={item}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            What{" "}
            <span id="design" className="font-normal tracking-wide">
              we do
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-lg md:text-xl font-normal max-w-2xl">
            End-to-end digital solutions that launch, scale, and transform your business.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              >
                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center rounded-full border border-stone-900 px-5 py-2.5 text-sm md:text-base font-medium text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
                >
                  <span>Discuss for Projects</span>
                  <span className="ml-1 text-lg leading-none">→</span>
                </Link>
              </ServiceCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;
