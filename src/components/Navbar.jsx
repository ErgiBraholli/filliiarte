import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";

const NAV = [
  { label: "Kreu", href: "#home" },
  { label: "Rreth Nesh", href: "#about" },
  { label: "Produktet", href: "#products" },
  { label: "Galeria", href: "#gallery" },
  { label: "Dërgesa", href: "#info" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.1, 0.2, 0.35, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const onNavClick = (href) => {
    setActive(href);
    setOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navWrap">
      <nav className="nav container">
        <button
          className="brand"
          onClick={() => onNavClick("#home")}
          aria-label="Go home"
        >
          <span className="brandMark" aria-hidden="true">
            <img src={logo} alt="filli i arte logo" style={{ width: 30 }} />
          </span>
          <span className="brandText">
            <span className="brandName">Filli i Artë</span>
            <span className="brandTag">Qirinj soje & lule të thata</span>
          </span>
        </button>

        <div className={`navLinks ${open ? "isOpen" : ""}`}>
          {NAV.map((item) => (
            <button
              key={item.href}
              className={`navLink ${active === item.href ? "isActive" : ""}`}
              onClick={() => onNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="navActions">
          <a
            className="btn btnGhost"
            href="https://www.instagram.com/filliiarte/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <button
            className="btnIcon navBurger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="burger" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
