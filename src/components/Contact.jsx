import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contactCard">
          <div className="contactLeft">
            <h2 className="sectionTitle">Kontakt</h2>
            <p className="sectionSub">
              Na shkruaj për modele, çmime dhe personalizime. Përgjigjemi sa më
              shpejt.
            </p>

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
              <a className="btn btnGhost" href="mailto:example@email.com">
                Email
              </a>
            </div>

            <p className="muted small">
              *Kjo faqe është vetëm informuese — nuk ka porosi/checkout.
            </p>
          </div>

          <div className="contactRight">
            <div className="miniInfo">
              <div className="miniRow">
                <span className="miniKey">Dërgesa</span>
                <span className="miniVal">Në gjithë Shqipërinë</span>
              </div>
              <div className="miniRow">
                <span className="miniKey">Posta</span>
                <span className="miniVal">Brenda Shqipërisë: falas</span>
              </div>
              <div className="miniRow">
                <span className="miniKey">Personalizim</span>
                <span className="miniVal">Emër • Ngjyra • Mesazh</span>
              </div>
            </div>

            <div className="contactGlow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
