import React from "react";
import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";
import RevealText from "./motion/RevealText";
import { scrollToId } from "./SmoothScroll";
import { fadeRise, stagger, inView } from "../lib/motion";
import "./Products.css";

const ITEMS = [
  {
    title: "Kompozime me qirinj & lule",
    desc: "Buqeta të qëndrueshme nga dylli i sojës, të shoqëruara me lule të thata.",
  },
  {
    title: "Kuti dhuratë",
    desc: "Sete elegante të paketuara me kujdes, gati për t’u dhuruar.",
  },
  {
    title: "Qirinj dekorativë soje",
    desc: "Forma skulpturore — trëndafila, zemra, lule — me përfundim premium.",
  },
  {
    title: "Personalizim",
    desc: "Emër, paletë ngjyrash dhe mesazh, sipas rastit dhe stilit tënd.",
  },
  {
    title: "Koleksione sezonale",
    desc: "Shën Valentin, Krishtlindje dhe edicione të limituara.",
  },
  {
    title: "Evente & ceremoni",
    desc: "Ditëlindje, fejesa dhe surpriza — kompozime që mbahen mend.",
  },
];

const Products = () => {
  return (
    <section id="products" className="section section--dark products">
      <div className="container">
        <div className="sectionMark">
          <span className="sectionMark__num">02</span>
          <span className="eyebrow eyebrow--light">Koleksioni</span>
        </div>

        <div className="products__head">
          <RevealText
            as="h2"
            className="display products__title"
            lines={["Çfarë krijojmë"]}
          />
          <Reveal as="p" className="lede products__intro muted-light" delay={0.1}>
            Gjashtë mënyra për ta thënë “të mendoj” — secila e modeluar me dorë,
            secila e personalizueshme.
          </Reveal>
        </div>

        <motion.ul
          className="products__list"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          {ITEMS.map((item, i) => (
            <motion.li key={item.title} variants={fadeRise}>
              <button
                className="products__row"
                onClick={() => scrollToId("gallery")}
              >
                <span className="products__index">0{i + 1}</span>
                <span className="products__name display">{item.title}</span>
                <span className="products__desc">{item.desc}</span>
                <span className="products__arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Products;
