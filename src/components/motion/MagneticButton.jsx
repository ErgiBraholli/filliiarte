import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../../lib/motion";

/**
 * MagneticButton — element drifts subtly toward the cursor, then eases back.
 * Renders an anchor or button. Magnetic effect is disabled for touch /
 * reduced-motion users. Keep the pull gentle — luxury, not playful.
 */
const MagneticButton = ({
  children,
  as = "button",
  className = "",
  strength = 0.35,
  ...rest
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const handleMove = (e) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const MotionTag = as === "a" ? motion.a : motion.button;

  return (
    <MotionTag
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.4 }}
      {...rest}
    >
      <motion.span
        style={{ display: "inline-flex", alignItems: "center", gap: "0.6em" }}
        animate={{ x: pos.x * 0.25, y: pos.y * 0.25 }}
        transition={{ ease: EASE, duration: 0.4 }}
      >
        {children}
      </motion.span>
    </MotionTag>
  );
};

export default MagneticButton;
