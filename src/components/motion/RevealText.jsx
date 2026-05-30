import React from "react";
import { motion } from "framer-motion";
import { lineParent, lineChild, inView } from "../../lib/motion";

/**
 * RevealText — line-by-line clip reveal for editorial headings.
 * Pass an array of strings (one per visual line) via `lines`,
 * or a single string. Each line rises out from an overflow-hidden mask.
 */
const RevealText = ({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
  delay = 0,
  animate, // optional: force "show" without scroll (e.g. hero after preloader)
}) => {
  const arr = Array.isArray(lines) ? lines : [lines];

  const parent = {
    hidden: {},
    show: {
      transition: {
        ...lineParent.show.transition,
        delayChildren: delay,
      },
    },
  };

  const viewProps = animate
    ? { animate: "show" }
    : { whileInView: "show", viewport: inView };

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: "block" }}
        variants={parent}
        initial="hidden"
        {...viewProps}
      >
        {arr.map((line, i) => (
          <span
            key={i}
            className={lineClassName}
            style={{ display: "block", overflow: "hidden" }}
          >
            <motion.span
              style={{ display: "block", willChange: "transform" }}
              variants={lineChild}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default RevealText;
