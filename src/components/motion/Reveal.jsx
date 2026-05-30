import React from "react";
import { motion } from "framer-motion";
import { fadeRise, inView } from "../../lib/motion";

/**
 * Reveal — fade + rise + soft blur as the element scrolls into view.
 * `as` lets you keep semantic tags; `delay` offsets the start.
 */
const Reveal = ({ children, as = "div", delay = 0, className, style, ...rest }) => {
  const MotionTag = motion[as] || motion.div;

  const variants = {
    hidden: fadeRise.hidden,
    show: {
      ...fadeRise.show,
      transition: { ...fadeRise.show.transition, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
