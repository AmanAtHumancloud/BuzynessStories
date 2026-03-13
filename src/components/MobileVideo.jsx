import React, { useRef, useEffect } from "react";

/**
 * Video wrapper that ensures reliable playback on mobile Chrome and Safari:
 * - sets playsinline/webkit-playsinline on the DOM element (iOS)
 * - uses Intersection Observer to play when in view, pause when out of view
 *   (works when autoplay is blocked but programmatic play() on scroll is allowed)
 */
const MobileVideo = ({ src, className, loop = true, muted = true, autoPlay = true, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Required for iOS Safari (including older versions)
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            videoRef.current.pause();
          }
        });
      },
      { rootMargin: "50px", threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      playsInline
      preload="metadata"
      className={className}
      {...props}
    />
  );
};

export default MobileVideo;
