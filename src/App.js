import React from "react";
import SmoothScroll from "./components/SmoothScroll";
import Atmosphere from "./components/Atmosphere";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <Atmosphere />

      <Navbar />
      <main>
        <HomeBanner />
        <About />
        <Products />
        <Gallery />
        <Info />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
