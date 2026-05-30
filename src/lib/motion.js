/* =========================================================
   Motion system — Filli i Artë
   Shared easing + variants for a slow, intentional, luxurious feel.
   Preferred easing: cubic-bezier(.22, 1, .36, 1)
   ========================================================= */

// Signature easing — used everywhere for cohesion.
export const EASE = [0.22, 1, 0.36, 1];
export const EASE_SOFT = [0.4, 0, 0.2, 1];

// Reduced-motion check (safe for SSR / first paint).
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Default viewport config for scroll-triggered reveals.
export const inView = { once: true, margin: "-12% 0px -12% 0px" };

/* ---- Core reveal: rise + fade + soft blur ---- */
export const fadeRise = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE },
  },
};

/* ---- Gentle fade (no movement) ---- */
export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, ease: EASE } },
};

/* ---- Stagger container for grouped children ---- */
export const stagger = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

/* ---- Line-by-line heading reveal (clip + rise) ---- */
export const lineParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const lineChild = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 1.05, ease: EASE },
  },
};

/* ---- Image cover reveal (mask wipe) ---- */
export const imageMask = {
  hidden: { scale: 1.18 },
  show: { scale: 1, transition: { duration: 1.6, ease: EASE } },
};
