import React from "react";

const ITEMS = [
  {
    title: "Kompozime me qirinj & lule të thata",
    desc: "Kompozime dekorative, ideale për dhuratë ose ambient.",
    icon: "🕯️",
  },
  {
    title: "Kuti dhuratë (Box sets)",
    desc: "Sete elegante me përzgjedhje qirinjsh dhe elemente dekorative.",
    icon: "🎁",
  },
  {
    title: "Qirinj dekorativë (Soy wax)",
    desc: "Forma moderne, aromë e lehtë (opsionale) dhe përfundim premium.",
    icon: "✨",
  },
  {
    title: "Personalizim emri / ngjyra",
    desc: "Përshtatje sipas preferencave: emër, paletë ngjyrash, mesazh.",
    icon: "🖋️",
  },
  {
    title: "Sezonale",
    desc: "Modele për Shën Valentin, Krishtlindje dhe koleksione të veçanta.",
    icon: "❄️",
  },
  {
    title: "Evente",
    desc: "Kompozime për ditëlindje, fejesa, ceremoni dhe surpriza.",
    icon: "🎉",
  },
];

const Products = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Produktet & Shërbimet</h2>
          <p className="sectionSub">
            Zgjidh një stil, ne e bëjmë realitet — minimal, elegant, i pastër.
          </p>
        </div>

        <div className="grid3">
          {ITEMS.map((it) => (
            <div className="card" key={it.title}>
              <div className="cardIcon" aria-hidden="true">
                {it.icon}
              </div>
              <h3 className="cardTitle">{it.title}</h3>
              <p className="muted">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="ctaStrip">
          <div>
            <h3 className="ctaTitle">Do më shumë foto?</h3>
            <p className="muted">Shiko gjithë punimet në Instagram.</p>
          </div>
          <a
            className="btn"
            href="https://www.instagram.com/filliiarte/"
            target="_blank"
            rel="noreferrer"
          >
            Hap Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
