import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Rreth Nesh</h2>
          <p className="sectionSub">
            Ne krijojmë kompozime dhuratë me qirinj prej dylli soje dhe lule të
            thata — të punuara me dorë dhe të personalizuara sipas kërkesës.
          </p>
        </div>

        <div className="aboutGrid">
          <div className="card soft">
            <h3 className="cardTitle">Stil & Elegancë</h3>
            <p className="muted">
              Dizajn i pastër, ngjyra të balancuara dhe kompozime që duken bukur
              në çdo ambient.
            </p>
          </div>

          <div className="card soft">
            <h3 className="cardTitle">Materiale cilësore</h3>
            <p className="muted">
              Qirinj 100% dyll soje, punim me kujdes dhe detaje të rafinuara për
              një dhuratë premium.
            </p>
          </div>

          <div className="card soft">
            <h3 className="cardTitle">Personalizim</h3>
            <p className="muted">
              Emër, ngjyra, mesazh, tematikë sezonale — e përshtatim sipas
              rastit (ditëlindje, fejesë, etj.).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
