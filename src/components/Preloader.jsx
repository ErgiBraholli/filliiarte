import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE } from "../lib/motion";
import "./Preloader.css";

/**
 * Preloader — a brief, cinematic brand intro. Shows the studio name rising
 * behind a curtain that lifts to reveal the hero. Runs once per session and
 * is skipped entirely for reduced-motion users. Reports completion so the
 * hero can begin its own reveal in sequence.
 */
const Preloader = ({ onDone }) => {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce || sessionStorage.getItem("fa_intro")) {
      setDone(true);
      onDone?.();
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem("fa_intro", "1");
      setDone(true);
      onDone?.();
      document.body.style.overflow = "";
    }, 2400);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce, onDone]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <div className="preloader__inner">
            <motion.span
              className="eyebrow eyebrow--light preloader__kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            >
              Studio Artizanale
            </motion.span>

            <h1 className="preloader__word display">
              {"Filli i Artë".split("").map((ch, i) => (
                <span key={i} className="preloader__charMask">
                  <motion.span
                    className="preloader__char"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1,
                      ease: EASE,
                      delay: 0.35 + i * 0.045,
                    }}
                  >
                    {ch === " " ? " " : ch}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              className="preloader__rule"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.9 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
