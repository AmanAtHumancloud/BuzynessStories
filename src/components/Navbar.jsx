import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";

const NAVBAR_HEIGHT = 72;

const Navbar = () => {
  const [showBorder, setShowBorder] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const pastVideo = window.scrollY >= window.innerHeight * 1.6;
      setShowBorder(!pastVideo);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Native DOM listener in capture phase so nothing (e.g. Locomotive Scroll) can block the burger click
  useEffect(() => {
    const el = burgerRef.current;
    if (!el) return;
    const handle = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsMenuOpen((prev) => !prev);
    };
    el.addEventListener("click", handle, true);
    return () => el.removeEventListener("click", handle, true);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const mobileMenu = isMenuOpen && (
    <nav
      className="md:hidden fixed left-0 right-0 bg-white border-t border-stone-200 shadow-lg z-[9999]"
      style={{ top: NAVBAR_HEIGHT }}
    >
      <div className="flex flex-col gap-4 px-6 py-4">
        <NavLink to="/services" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")} onClick={closeMenu}>
          Services
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")} onClick={closeMenu}>
          Work
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")} onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")} onClick={closeMenu}>
          Blog
        </NavLink>
      </div>
    </nav>
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center justify-between text-base md:text-lg px-6 md:px-12 py-4 bg-white transition-colors duration-300 ${
          showBorder ? "border-b border-stone-200" : "border-b border-transparent"
        }`}
        style={{ height: NAVBAR_HEIGHT }}
      >
        <Link to="/" className="font-semibold">
          BuzynessStories
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/services" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
            Work
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
            About
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "px-4 py-2 rounded-full bg-stone-950 text-white" : "px-4 py-2 rounded-full border border-stone-900"
            }
          >
            Get a quote
          </NavLink>
        </nav>

        {/* Mobile: Get a quote + burger */}
        <div className="flex items-center gap-3 md:hidden">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "px-3 py-2 rounded-full bg-stone-950 text-white text-sm" : "px-3 py-2 rounded-full border border-stone-900 text-sm"
            }
          >
            Get a quote
          </NavLink>
          <button
            ref={burgerRef}
            type="button"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="relative w-6 h-4 flex flex-col justify-between">
              <span
                className={`block h-[2px] w-full rounded-full bg-stone-900 transform transition-all duration-300 ease-linear origin-center ${
                  isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full rounded-full bg-stone-900 transform transition-all duration-300 ease-linear ${
                  isMenuOpen ? "opacity-0 -translate-x-2" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-full rounded-full bg-stone-900 transform transition-all duration-300 ease-linear origin-center ${
                  isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Navbar;
