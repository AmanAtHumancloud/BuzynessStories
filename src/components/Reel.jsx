import React from "react";
import MobileVideo from "./MobileVideo";

const Reel = () => {
  return (
    <div className="w-full h-fit md:h-screen overflow-hidden bg-stone-950">
      <MobileVideo
        src="https://cdn.cuberto.com/cb/showreel/2.mp4"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Reel;
