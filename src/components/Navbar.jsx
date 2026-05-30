import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/filliiarte-logo-circle.png";
import { scrollToId } from "./SmoothScroll";
import { EASE } from "../lib/motion";
import "./Navbar.css";

const NAV = [
  { label: "Kreu", id: "home" },
  { label: "Historia", id: "about" },
  { label: "Koleksioni", id: "products" },
  { label: "Galeria", id: "gallery" },
  { label: "Porosia", id: "info" },
  { label: "Kontakt", id: "contact" },
];

const IG = "https://www.instagram.com/filliiarte/";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  /* Active section highlighting */
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Solid-on-scroll + hide-on-scroll-down */
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHidden(y > 600 && y > last && !open);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    // allow the overlay to start closing before the scroll begins
    setTimeout(() => scrollToId(id), open ? 480 : 0);
  };

  return (
    <>
      <motion.header
        className={`navWrap ${scrolled ? "is-scrolled" : ""} ${
          open ? "is-menu" : ""
        }`}
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="container nav">
          <button className="navBrand" onClick={() => go("home")}>
            <span className="navBrand__mark">
              <img src={logo} alt="" aria-hidden="true" />
            </span>
            <span className="navBrand__text">
              <span className="navBrand__name">Filli i Artë</span>
              <span className="navBrand__tag">Studio Artizanale</span>
            </span>
          </button>

          <nav className="navLinks" aria-label="Primare">
            {NAV.map((item) => (
              <button
                key={item.id}
                className={`navLink ${active === item.id ? "is-active" : ""}`}
                onClick={() => go(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="navRight">
            <a
              className="linkUnderline navIg"
              href={IG}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <button
              className={`navToggle ${open ? "is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Mbyll menunë" : "Hap menunë"}
              aria-expanded={open}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen editorial mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="navOverlay"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="navOverlay__inner container">
              <span className="eyebrow eyebrow--light">Menu</span>
              <nav className="navOverlay__links">
                {NAV.map((item, i) => (
                  <motion.button
                    key={item.id}
                    className="navOverlay__link display"
                    onClick={() => go(item.id)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.7,
                      ease: EASE,
                      delay: 0.2 + i * 0.07,
                    }}
                  >
                    <span className="navOverlay__idx">
                      0{i + 1}
                    </span>
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              <a
                className="linkUnderline navOverlay__ig"
                href={IG}
                target="_blank"
                rel="noreferrer"
              >
                Na ndiq në Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
