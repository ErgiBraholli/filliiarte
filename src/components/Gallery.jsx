import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Reveal from "./motion/Reveal";
import RevealText from "./motion/RevealText";
import MagneticButton from "./motion/MagneticButton";
import { EASE, inView } from "../lib/motion";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import "./Gallery.css";

const IMAGES = [
  { src: image1, label: "Kompozim blush" },
  { src: image2, label: "Buqetë lila" },
  { src: image3, label: "Kuti për djalë" },
  { src: image4, label: "Tonet e qiellit" },
  { src: image5, label: "Sete pastel" },
  { src: image6, label: "Zemra rozë" },
  { src: image7, label: "Detaj me dorë" },
  { src: image8, label: "Edicion i kuq" },
  { src: image9, label: "Lule të thata" },
];

// Distribute into 3 columns for parallax; collapses to 1 on mobile via CSS.
const COLUMNS = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const IG = "https://www.instagram.com/filliiarte/";

const Gallery = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [lightbox, setLightbox] = useState(null); // index or null

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const colMid = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const colSide = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % IMAGES.length)),
    []
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length
      ),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, next, prev]);

  return (
    <section
      id="gallery"
      className="section gallery"
      ref={ref}
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="sectionMark">
          <span className="sectionMark__num">03</span>
          <span className="eyebrow">Galeria</span>
        </div>

        <div className="gallery__head">
          <RevealText
            as="h2"
            className="display gallery__title"
            lines={["Punime", "që flasin vetë"]}
          />
          <Reveal as="p" className="lede gallery__intro" delay={0.1}>
            Një përzgjedhje nga kompozimet tona. Çdo copë e fotografuar ashtu siç
            del nga duart — pa filtra, pa shtirje.
          </Reveal>
        </div>

        <div className="gallery__columns">
          {COLUMNS.map((col, ci) => (
            <motion.div
              key={ci}
              className="gallery__col"
              style={
                reduce ? undefined : { y: ci === 1 ? colMid : colSide }
              }
            >
              {col.map((idx) => {
                const item = IMAGES[idx];
                return (
                  <motion.button
                    key={idx}
                    className="gallery__item"
                    onClick={() => setLightbox(idx)}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={inView}
                    transition={{ duration: 1.1, ease: EASE }}
                    aria-label={`Hap foton: ${item.label}`}
                  >
                    <span className="gallery__frame">
                      <img src={item.src} alt={item.label} loading="lazy" />
                    </span>
                    <span className="gallery__caption">
                      <span className="gallery__captionText">{item.label}</span>
                      <span className="gallery__captionView">Shiko</span>
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          ))}
        </div>

        <div className="gallery__cta">
          <MagneticButton
            as="a"
            className="btn"
            href={IG}
            target="_blank"
            rel="noreferrer"
          >
            Shiko më shumë në Instagram
          </MagneticButton>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={close}
          >
            <button
              className="lightbox__close"
              onClick={close}
              aria-label="Mbyll"
            >
              <span />
              <span />
            </button>

            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="E mëparshme"
            >
              ‹
            </button>

            <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.figure
                  key={lightbox}
                  className="lightbox__figure"
                  initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <img src={IMAGES[lightbox].src} alt={IMAGES[lightbox].label} />
                  <figcaption className="lightbox__caption">
                    <span className="eyebrow eyebrow--light">
                      {String(lightbox + 1).padStart(2, "0")} /{" "}
                      {String(IMAGES.length).padStart(2, "0")}
                    </span>
                    <span>{IMAGES[lightbox].label}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Tjetra"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
