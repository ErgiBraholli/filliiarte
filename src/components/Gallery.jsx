import React from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";

const IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const Gallery = () => {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Galeria</h2>
          <p className="sectionSub">
            Disa nga punimet tona — për më shumë, shiko Instagram-in.
          </p>
        </div>

        <div className="galleryGrid">
          {IMAGES.map((src, idx) => (
            <a
              key={src}
              className="galleryItem"
              href={src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open image ${idx + 1}`}
            >
              <img
                src={src}
                alt={`Punim FilliiArtë ${idx + 1}`}
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div className="center">
          <a
            className="btn btnGhost"
            href="https://www.instagram.com/filliiarte/"
            target="_blank"
            rel="noreferrer"
          >
            Shiko më shumë në Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
