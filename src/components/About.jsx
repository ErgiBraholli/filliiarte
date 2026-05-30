import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "./motion/Reveal";
import RevealText from "./motion/RevealText";
import { fadeRise, stagger, inView } from "../lib/motion";
import aboutImg from "../assets/image6.jpeg";
import "./About.css";

const PRINCIPLES = [
  {
    k: "Materiali",
    t: "Dyll soje 100% natyral, që digjet pastër dhe ngadalë — pa kompromis.",
  },
  {
    k: "Dora",
    t: "Çdo lule e çdo zemër modelohet një nga një. Asnjë copë nuk është krejt e njëjtë.",
  },
  {
    k: "Kujtimi",
    t: "E personalizojmë sipas emrit, ngjyrës dhe rastit — që dhurata të flasë për dikë.",
  },
];

const About = () => {
  const imgWrap = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imgWrap,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="sectionMark">
          <span className="sectionMark__num">01</span>
          <span className="eyebrow">Historia</span>
        </div>

        <div className="about__grid">
          <div className="about__lead">
            <RevealText
              as="h2"
              className="display about__statement"
              lines={[
                "Nuk bëjmë thjesht",
                "qirinj. Modelojmë",
                "ndjenja në dyll.",
              ]}
            />
          </div>

          <div className="about__body">
            <Reveal as="p" className="lede about__text">
              Filli i Artë lindi nga dëshira për t’i dhënë formë momenteve të
              vogla. Çdo kompozim është një buqetë e qëndrueshme — trëndafila,
              zemra dhe lule të modeluara me dorë nga dylli i sojës, të shoqëruara
              me lule të thata.
            </Reveal>
            <Reveal as="p" className="about__text muted" delay={0.1}>
              Pa makineri, pa seri. Vetëm duar të durueshme, paleta ngjyrash që
              i zgjedhim me kujdes, dhe detaje që e kthejnë një dhuratë në
              kujtim.
            </Reveal>
          </div>
        </div>

        <div className="about__feature">
          <div
            className="about__imageWrap"
            ref={imgWrap}
            style={{ position: "relative" }}
          >
            <motion.img
              src={aboutImg}
              alt="Kompozim me qirinj dhe lule të thata nga Filli i Artë"
              className="about__image"
              style={reduce ? undefined : { y: imgY }}
              loading="lazy"
              initial={{ scale: 1.16 }}
              whileInView={{ scale: 1 }}
              viewport={inView}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className="about__imageTag">Punuar me dëshirë</span>
          </div>

          <motion.ul
            className="about__principles"
            variants={stagger(0.16)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            {PRINCIPLES.map((p, i) => (
              <motion.li
                key={p.k}
                className="about__principle"
                variants={fadeRise}
              >
                <span className="about__principleNum">0{i + 1}</span>
                <div>
                  <h3 className="about__principleKey">{p.k}</h3>
                  <p className="about__principleText muted">{p.t}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default About;
