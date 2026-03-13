import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MinimalFooter } from "./components/ui/MinimalFooter";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import WebApplicationPage from "./pages/WebApplicationPage";
import MobileApplicationPage from "./pages/MobileApplicationPage";
import CustomSaaSPage from "./pages/CustomSaaSPage";
import AiAutomationPage from "./pages/AiAutomationPage";
import GameDevelopmentPage from "./pages/GameDevelopmentPage";
import DesktopApplicationPage from "./pages/DesktopApplicationPage";
import Analytics from "./components/Analytics";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // If using LocomotiveScroll, also reset the native scroll position
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Analytics />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/web-application" element={<WebApplicationPage />} />
          <Route path="/mobile-application" element={<MobileApplicationPage />} />
          <Route path="/custom-saas" element={<CustomSaaSPage />} />
          <Route path="/ai-automation" element={<AiAutomationPage />} />
          <Route path="/game-development" element={<GameDevelopmentPage />} />
          <Route path="/desktop-application" element={<DesktopApplicationPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      <footer className="mt-auto">
        <MinimalFooter />
      </footer>
    </div>
  );
};

export default App;
