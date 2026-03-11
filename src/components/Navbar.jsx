import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showBorder, setShowBorder] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const pastVideo = window.scrollY >= window.innerHeight * 1.6;
      setShowBorder(!pastVideo);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between items-center text-base md:text-lg px-6 md:px-12 py-4 bg-white overflow-hidden`}
    >
      <div className="relative z-10 flex w-full justify-between items-center">
      <Link to="/" className="font-semibold">
        BuzynessStories
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-full bg-stone-950 text-white"
              : "px-4 py-2 rounded-full border border-stone-900"
          }
        >
          Get a quote
        </NavLink>
      </nav>
      <HiOutlineMenuAlt4 className="md:hidden hover:cursor-pointer text-3xl" />
      </div>
    </header>
  );
};

export default Navbar;