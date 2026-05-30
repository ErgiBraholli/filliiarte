import React from "react";
import logo from "../assets/filliiarte-logo-circle.png";
import { scrollToId } from "./SmoothScroll";
import "./Footer.css";

const LINKS = [
  { label: "Historia", id: "about" },
  { label: "Koleksioni", id: "products" },
  { label: "Galeria", id: "gallery" },
  { label: "Porosia", id: "info" },
  { label: "Kontakt", id: "contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <button
            className="footer__brand"
            onClick={() => scrollToId("home")}
            aria-label="Kthehu lart"
          >
            <span className="footer__mark">
              <img src={logo} alt="" aria-hidden="true" />
            </span>
            <span className="footer__wordmark display">Filli i Artë</span>
          </button>

          <nav className="footer__nav" aria-label="Footer">
            {LINKS.map((l) => (
              <button
                key={l.id}
                className="footer__navLink"
                onClick={() => scrollToId(l.id)}
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>

        <p className="footer__statement display">
          Qirinj artizanalë nga dylli i sojës dhe lule të thata — punuar me dorë,
          ndjerë me zemër.
        </p>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} Filli i Artë · Të gjitha të drejtat e
            rezervuara
          </span>
          <div className="footer__social">
            <a
              className="linkUnderline"
              href="https://www.instagram.com/filliiarte/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <button className="linkUnderline" onClick={() => scrollToId("home")}>
              Lart ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
