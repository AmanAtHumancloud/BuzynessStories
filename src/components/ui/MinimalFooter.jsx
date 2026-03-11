import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  GithubIcon,
  Grid2X2Plus,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

/**
 * Minimal footer for all pages. Uses Tailwind (no shadcn).
 * Links wired to app routes and existing social URLs.
 */
export function MinimalFooter() {
  const year = new Date().getFullYear();

  const company = [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "#" },
    { title: "Brand assets", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
  ];

  const resources = [
    { title: "Blog", href: "/blog" },
    { title: "Help Center", href: "#" },
    { title: "Contact Support", href: "/contact" },
    { title: "Community", href: "#" },
    { title: "Security", href: "#" },
  ];

  const socialLinks = [
    { icon: <FacebookIcon className="size-4" />, link: "#" },
    { icon: <GithubIcon className="size-4" />, link: "https://github.com/vikasipar" },
    { icon: <InstagramIcon className="size-4" />, link: "#" },
    { icon: <LinkedinIcon className="size-4" />, link: "https://www.linkedin.com/in/vikas-ipar/" },
    { icon: <TwitterIcon className="size-4" />, link: "#" },
    { icon: <YoutubeIcon className="size-4" />, link: "#" },
  ];

  return (
    <footer className="relative">
      <div className="bg-white mx-auto max-w-4xl md:border-x border-stone-200">
        <div className="absolute inset-x-0 top-0 h-px w-full bg-stone-200" />
        <div className="grid max-w-4xl grid-cols-6 gap-6 p-4 md:p-6">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link to="/" className="w-max opacity-80 hover:opacity-100 transition-opacity" aria-label="BuzinessStories home">
              BuzynessStories
            </Link>
            <p className="text-stone-600 max-w-sm font-mono text-sm text-balance">
              Web design and development agency. We build and grow your digital presence.
            </p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-stone-200 rounded-md border border-stone-200 p-1.5 text-stone-600 transition-colors"
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
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-stone-500 mb-1 text-xs font-medium uppercase tracking-wide">
              Resources
            </span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }, i) => (
                href.startsWith("/") ? (
                  <Link
                    key={i}
                    className="w-max py-1 text-sm text-stone-700 duration-200 hover:underline"
                    to={href}
                  >
                    {title}
                  </Link>
                ) : (
                  <a
                    key={i}
                    className="w-max py-1 text-sm text-stone-700 duration-200 hover:underline"
                    href={href}
                  >
                    {title}
                  </a>
                )
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-stone-500 mb-1 text-xs font-medium uppercase tracking-wide">Company</span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                href.startsWith("/") ? (
                  <Link
                    key={i}
                    className="w-max py-1 text-sm text-stone-700 duration-200 hover:underline"
                    to={href}
                  >
                    {title}
                  </Link>
                ) : (
                  <a
                    key={i}
                    className="w-max py-1 text-sm text-stone-700 duration-200 hover:underline"
                    href={href}
                  >
                    {title}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-stone-200 flex max-w-4xl flex-col justify-between gap-2 pt-4 pb-5 px-4 md:px-6">
          <p className="text-black text-center text-sm font-thin">
            © BuzinessStories. All rights reserved {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
