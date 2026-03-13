import React, { useRef, useEffect } from "react";

/**
 * Video wrapper that ensures reliable playback on mobile Chrome and Safari:
 * - sets playsinline/webkit-playsinline on the DOM element (iOS)
 * - uses Intersection Observer to play when in view, pause when out of view
 *   (works when autoplay is blocked but programmatic play() on scroll is allowed)
 */
const MobileVideo = ({
  src,
  className,
  loop = true,
  muted = true,
  autoPlay = true,
  ...props
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const ensureInlinePlaybackAttributes = () => {
      // Required for iOS Safari (including older versions)
      video.setAttribute("playsinline", "true");
      video.setAttribute("webkit-playsinline", "true");
      // Ensure muted + autoplay are applied at the DOM level (some mobile browsers
      // ignore JSX-only attributes until a user gesture)
      video.muted = true;
      video.autoplay = true;
      video.setAttribute("muted", "true");
      video.setAttribute("autoplay", "true");
    };

    const attemptPlay = () => {
      if (!videoRef.current) return;
      const playPromise = videoRef.current.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {});
      }
    };

    // Set attributes immediately and try to start playback right away.
    ensureInlinePlaybackAttributes();
    attemptPlay();

    // On some mobile browsers autoplay only works reliably after metadata/canplay.
    video.addEventListener("loadedmetadata", attemptPlay);
    video.addEventListener("canplaythrough", attemptPlay);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            attemptPlay();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { rootMargin: "50px", threshold: 0.1 }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.removeEventListener("loadedmetadata", attemptPlay);
      video.removeEventListener("canplaythrough", attemptPlay);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      playsInline
      controls={false}
      preload="auto"
      className={className}
      {...props}
    />
  );
};

export default MobileVideo;
