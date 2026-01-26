import React from "react";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerBrand">
          <span className="brandMark sm" aria-hidden="true">
            <img src={logo} alt="filli i arte logo" style={{ width: 30 }} />
          </span>
          <div>
            <div className="footerName">FilliiArtë</div>
            <div className="muted small">
              Qirinj soje • Lule të thata • Handmade
            </div>
          </div>
        </div>

        <div className="footerLinks">
          <a
            className="footerLink"
            href="https://www.instagram.com/filliiarte/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <span className="muted small">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
