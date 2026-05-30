import React from "react";
import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";
import RevealText from "./motion/RevealText";
import MagneticButton from "./motion/MagneticButton";
import { fadeRise, stagger, inView } from "../lib/motion";
import "./Contact.css";

const CHANNELS = [
  {
    k: "Instagram",
    v: "@filliiarte",
    href: "https://www.instagram.com/filliiarte/",
    note: "Mënyra më e shpejtë për të porositur",
  },
  {
    k: "WhatsApp",
    v: "Na shkruaj",
    href: "https://wa.me/355000000000",
    note: "Bisedo detajet dhe afatet",
  },
  {
    k: "Email",
    v: "filliiarte@email.com",
    href: "mailto:filliiarte@email.com",
    note: "Për kërkesa më të mëdha",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section section--dark contact">
      <div className="contact__glow contact__glow--a" aria-hidden="true" />
      <div className="contact__glow contact__glow--b" aria-hidden="true" />

      <div className="container contact__inner">
        <div className="sectionMark">
          <span className="sectionMark__num">05</span>
          <span className="eyebrow eyebrow--light">Kontakt</span>
        </div>

        <RevealText
          as="h2"
          className="display contact__title"
          lines={["Le ta kthejmë", "në kujtim."]}
        />

        <Reveal as="p" className="lede contact__sub muted-light" delay={0.1}>
          Na shkruaj për modele, ngjyra, çmime dhe personalizime. Përgjigjemi me
          dashuri dhe sa më shpejt.
        </Reveal>

        <motion.ul
          className="contact__channels"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          {CHANNELS.map((c) => (
            <motion.li key={c.k} variants={fadeRise}>
              <a
                className="contact__channel"
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span className="contact__channelK">{c.k}</span>
                <span className="contact__channelV display">{c.v}</span>
                <span className="contact__channelNote muted-light">{c.note}</span>
                <span className="contact__channelArrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal className="contact__footerLine" delay={0.1}>
          <MagneticButton
            as="a"
            className="btn btn--gold"
            href="https://www.instagram.com/filliiarte/"
            target="_blank"
            rel="noreferrer"
          >
            Porosit në Instagram
          </MagneticButton>
          <p className="contact__note muted-light">
            Kjo faqe është vetëm informuese — pa shportë e pa pagesa online.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
