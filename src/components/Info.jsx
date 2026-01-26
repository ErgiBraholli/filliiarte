import React from "react";

const Info = () => {
  return (
    <section id="info" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Dërgesa & Porositë</h2>
          <p className="sectionSub">
            Faqja është vetëm informuese — porositë bëhen me mesazh.
          </p>
        </div>

        <div className="infoGrid">
          <div className="card">
            <h3 className="cardTitle">Dërgesa</h3>
            <ul className="list">
              <li>Dërgesa në gjithë Shqipërinë</li>
              <li>Posta brenda Shqipërisë: falas</li>
              <li>Paketim i sigurt për transport</li>
            </ul>
            <p className="muted small">
              (Nëse do, mund të shtosh afatet tipike të dërgesës këtu.)
            </p>
          </div>

          <div className="card">
            <h3 className="cardTitle">Si porosit?</h3>
            <ol className="steps stepsLight">
              <li>Zgjidh një model nga galeria</li>
              <li>Na shkruaj në Instagram/WhatsApp me detajet</li>
              <li>Konfirmo porosinë dhe dërgesën</li>
            </ol>
            <div className="btnRow">
              <a
                className="btn"
                href="https://www.instagram.com/filliiarte/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="btn btnGhost"
                href="https://wa.me/355000000000"
                target="_blank"
                rel="noreferrer"
                title="Zëvendëso numrin me numrin real"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
