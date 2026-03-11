import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  className = "",
  children,
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const relX = (e.clientX - centerX) / rect.width;
    const relY = (e.clientY - centerY) / rect.height;
    x.set(relX);
    y.set(relY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div className="perspective-[1000px]" style={{ transformStyle: "preserve-3d" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`relative rounded-2xl border border-stone-200 bg-white p-6 md:p-8 text-left transition-shadow duration-300 ${className}`}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
      >
        <div className="relative flex flex-col h-full" style={{ transform: "translateZ(20px)" }}>
          {Icon && (
            <div className="mb-4 text-stone-950">
              <Icon className="w-10 h-10 md:w-12 md:h-12" aria-hidden />
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-medium text-stone-950 mb-2">
            {title}
          </h3>
          <p className="text-stone-600 text-base md:text-lg font-normal leading-relaxed">
            {description}
          </p>
          {children && <div className="mt-6">{children}</div>}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
