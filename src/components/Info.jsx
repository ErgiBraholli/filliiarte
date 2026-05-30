import React from "react";
import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";
import RevealText from "./motion/RevealText";
import { fadeRise, stagger, inView } from "../lib/motion";
import "./Info.css";

const STEPS = [
  {
    n: "01",
    t: "Zgjidh",
    d: "Shfleto galerinë ose Instagram-in dhe gjej kompozimin që të flet.",
  },
  {
    n: "02",
    t: "Personalizo",
    d: "Na shkruaj ngjyrën, emrin, datën dhe rastin — e përshtatim për ty.",
  },
  {
    n: "03",
    t: "Merr",
    d: "E modelojmë me dorë, e paketojmë me kujdes dhe e nisim kudo në Shqipëri.",
  },
];

const FACTS = [
  ["Dërgesa", "Në gjithë Shqipërinë"],
  ["Posta", "Brenda vendit · falas"],
  ["Paketimi", "I sigurt për transport"],
  ["Personalizimi", "Emër · ngjyra · mesazh"],
];

const Info = () => {
  return (
    <section id="info" className="section info">
      <div className="container">
        <div className="sectionMark">
          <span className="sectionMark__num">04</span>
          <span className="eyebrow">Porosia</span>
        </div>

        <div className="info__head">
          <RevealText
            as="h2"
            className="display info__title"
            lines={["Si lind një", "kompozim"]}
          />
          <Reveal as="p" className="lede info__intro" delay={0.1}>
            Faqja është informuese — porositë i pranojmë me mesazh, që çdo detaj
            ta bisedojmë bashkë.
          </Reveal>
        </div>

        <motion.ol
          className="info__steps"
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          {STEPS.map((s) => (
            <motion.li key={s.n} className="info__step" variants={fadeRise}>
              <span className="info__stepNum display">{s.n}</span>
              <h3 className="info__stepTitle">{s.t}</h3>
              <p className="info__stepText muted">{s.d}</p>
            </motion.li>
          ))}
        </motion.ol>

        <Reveal className="info__facts">
          {FACTS.map(([k, v]) => (
            <div className="info__fact" key={k}>
              <span className="info__factKey">{k}</span>
              <span className="info__factVal">{v}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Info;
