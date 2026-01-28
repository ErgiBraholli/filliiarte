import React from "react";

const HomeBanner = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero">
      <div className="heroBg" aria-hidden="true" />
      <div className="container heroGrid">
        <div className="heroLeft">
          <p className="pill">Handmade • 100% Dyll Soje</p>
          <h1 className="heroTitle">
            Kompozime me <span className="gradText">QIRINJ</span> &{" "}
            <span className="gradText">LULE TË THATA</span>
          </h1>
          <p className="heroSub">
            Dhurata elegante dhe minimaliste — të personalizuara sipas stilit,
            ngjyrës dhe rastit.
          </p>

          <div className="heroCtas">
            <button className="btn" onClick={() => scrollTo("gallery")}>
              Shiko Galerinë
            </button>
            <button
              className="btn btnGhost"
              onClick={() => scrollTo("contact")}
            >
              Na Kontakto
            </button>
          </div>

          <div className="trustRow">
            <div className="trustItem">
              <span>Qirinj 100% dyll soje</span>
            </div>
            <div className="trustItem">
              <span>Punim me dorë</span>
            </div>
            <div className="trustItem">
              <span>Dërgesa në gjithë Shqipërinë</span>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="heroCard">
            <div className="heroCardTop">
              <span className="badge">Info</span>
              <span className="muted">Porosi me mesazh</span>
            </div>
            <h3 className="heroCardTitle">Si porositet?</h3>
            <ol className="steps">
              <li>Zgjidh modelin nga galeria</li>
              <li>Dërgo detajet (ngjyra, emër, datë, qytet)</li>
              <li>Konfirmo dhe nisja bëhet me postë</li>
            </ol>
            <a
              className="btn btnWide"
              href="https://www.instagram.com/filliiarte/"
              target="_blank"
              rel="noreferrer"
            >
              Shkruaj në Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
