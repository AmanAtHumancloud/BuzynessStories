import React from "react";

const Reel = () => {
  return (
    <div className="w-full h-fit md:h-screen overflow-hidden bg-stone-950">
      <video
        src="https://cdn.cuberto.com/cb/showreel/2.mp4"
        loop
        autoPlay
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Reel;
