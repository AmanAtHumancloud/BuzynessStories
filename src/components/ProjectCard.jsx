import React from "react";
import MobileVideo from "./MobileVideo";

const ProjectCard = ({ title, url }) => {
  return (
    <div className="my-8 md:my-14">
      <div className="w-full h-fit rounded-3xl overflow-hidden">
        <MobileVideo src={url} className="w-full h-auto object-cover" />
      </div>
      <p className="my-4 text-xl">{title}</p>
    </div>
  );
};

export default ProjectCard;
