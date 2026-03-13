import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

/**
 * Simple dark footer (original style): full-width dark bg, logo, tagline, social links, copyright.
 */
export function MinimalFooter() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FacebookIcon className="size-4" />, link: "#" },
    { icon: <GithubIcon className="size-4" />, link: "#" },
    { icon: <InstagramIcon className="size-4" />, link: "#" },
    { icon: <LinkedinIcon className="size-4" />, link: "#" },
    { icon: <TwitterIcon className="size-4" />, link: "#" },
    { icon: <YoutubeIcon className="size-4" />, link: "#" },
  ];

  return (
    <footer className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-xl font-semibold text-white/90 hover:text-white transition-colors w-max"
              aria-label="BuzynessStories home"
            >
              BuzynessStories
            </Link>
            <p className="text-stone-400 text-sm max-w-xs">
              Web design and development agency. We build and grow your digital presence.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="text-stone-400 hover:text-white p-1.5 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  aria-label={`Social link ${i + 1}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-stone-400">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Work</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-stone-800">
          <p className="text-stone-500 text-sm">
            © {year} BuzynessStories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
