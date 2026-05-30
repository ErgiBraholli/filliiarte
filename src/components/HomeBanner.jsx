import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import RevealText from "./motion/RevealText";
import MagneticButton from "./motion/MagneticButton";
import { scrollToId } from "./SmoothScroll";
import { EASE } from "../lib/motion";
import heroVideo from "../assets/filliart.mp4";
import poster from "../assets/image2.jpeg";
import "./Hero.css";

const HomeBanner = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const reduce = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  // Parallax: media drifts slower than content as the hero leaves the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Scroll-scrubbed video: the clip is driven by scroll position, not autoplay.
  // currentTime is eased toward the scroll target each frame for smoothness.
  const durationRef = useRef(0);
  const targetTimeRef = useRef(0);

  const handleMeta = () => {
    const v = videoRef.current;
    if (!v) return;
    durationRef.current = v.duration || 0;
    v.pause();
    // Prime decoding so seeking paints a frame (esp. on iOS), then hold still.
    const prime = v.play();
    if (prime && typeof prime.then === "function") {
      prime
        .then(() => {
          v.pause();
          try {
            v.currentTime = targetTimeRef.current;
          } catch (e) {}
        })
        .catch(() => {});
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;

    let raf = null;
    let running = false;
    let applied = 0; // eased numeric time — always converges, independent of decode

    const tick = () => {
      const target = targetTimeRef.current;
      applied += (target - applied) * 0.15;
      const settled = Math.abs(target - applied) < 0.01;
      if (settled) applied = target;

      // Seek at most once per frame, and never while a seek is in flight.
      if (
        durationRef.current &&
        v.readyState >= 2 &&
        !v.seeking &&
        Math.abs(v.currentTime - applied) > 0.03
      ) {
        try {
          v.currentTime = applied;
        } catch (e) {}
      }

      // Keep animating only until we've eased onto the target, then idle.
      if (!settled) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const kick = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const unsub = scrollYProgress.on("change", (p) => {
      targetTimeRef.current = p * (durationRef.current || 0);
      kick();
    });

    return () => {
      unsub();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce, scrollYProgress]);

  return (
    <section id="home" className="hero" ref={ref} style={{ position: "relative" }}>
      {/* Cinematic media layer */}
      <motion.div
        className="hero__media"
        style={reduce ? undefined : { y: mediaY, scale: mediaScale }}
      >
        <video
          ref={videoRef}
          className={`hero__video ${videoReady ? "is-ready" : ""}`}
          muted
          playsInline
          preload="auto"
          poster={poster}
          onLoadedMetadata={handleMeta}
          onLoadedData={() => setVideoReady(true)}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Layered cinematic scrims */}
        <div className="hero__scrim" />
        <div className="hero__scrim hero__scrim--bottom" />
        <div className="hero__grain" />

        {/* Floating ambient lighting */}
        <motion.div
          className="hero__glow hero__glow--gold"
          animate={
            reduce
              ? undefined
              : { x: [0, 36, -12, 0], y: [0, -28, 14, 0], opacity: [0.55, 0.8, 0.6, 0.55] }
          }
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="hero__glow hero__glow--blush"
          animate={
            reduce
              ? undefined
              : { x: [0, -30, 16, 0], y: [0, 22, -16, 0], opacity: [0.4, 0.62, 0.45, 0.4] }
          }
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="hero__content container"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.span
          className="eyebrow eyebrow--light hero__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
        >
          Punuar me dorë · 100% dyll soje
        </motion.span>

        <RevealText
          as="h1"
          className="display hero__title"
          lines={["Qirinj që duken", "si kujtime."]}
          animate
          delay={0.7}
        />

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.15 }}
        >
          Kompozime nga dylli i sojës dhe lule të thata, modeluar me dorë —
          krijuar për momentet që duam të mbajmë gjatë.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.4 }}
        >
          <MagneticButton
            className="btn btn--glass"
            onClick={() => scrollToId("gallery")}
          >
            Zbulo galerinë
          </MagneticButton>
          <MagneticButton
            className="btn btn--gold"
            onClick={() => scrollToId("contact")}
          >
            Porosit një kompozim
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll"
        onClick={() => scrollToId("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 1.8 }}
        aria-label="Zbrit te seksioni tjetër"
      >
        <span className="hero__scrollLabel">Zbrit</span>
        <span className="hero__scrollLine">
          <span className="hero__scrollDot" />
        </span>
      </motion.button>
    </section>
  );
};

export default HomeBanner;
