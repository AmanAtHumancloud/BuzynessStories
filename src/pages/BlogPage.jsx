import React from "react";
import Seo from "../components/Seo";
import { routeSeo } from "../config/seoConfig";

const BlogPage = () => {
  return (
    <>
      <Seo {...routeSeo["/blog"]} canonicalPath="/blog" />
      <div className="w-full px-6 md:px-32 py-16">
        <h1 className="text-4xl md:text-6xl font-light mb-6">Blog</h1>
        <p className="text-base md:text-lg text-stone-700">
          Our thoughts on web design, development, SaaS and AI automation. Blog
          content will be wired up from the central data file.
        </p>
      </div>
    </>
  );
};

export default BlogPage;

