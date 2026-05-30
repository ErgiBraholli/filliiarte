# Filli i Artë – Candle & Dried Flower Studio (Frontend Website)

A cinematic, editorial, informational-only one-page website for **Filli i Artë**,
a handmade soy-wax candle and dried-flower composition studio.  
The experience is designed to feel like a boutique studio: warm ivory and wax-cream
tones, muted gold accents, oversized serif headlines, atmospheric film grain, and
slow, intentional motion — premium and ready for deployment.

---

## Features

- Full-viewport **cinematic hero** with looping background video, layered scrims,
  floating ambient light, parallax, and a line-by-line headline reveal
- **Lenis** inertial smooth scrolling with anchor navigation
- Transparent → solid **navbar** with an elegant fullscreen mobile menu
- Editorial **manifesto** (About), a lookbook-style **collection index** with a
  cursor-following image preview, and a numbered **ordering flow**
- **Gallery** with parallax columns, cinematic hover zoom, and a fullscreen lightbox
  (keyboard + arrow navigation)
- Atmospheric layer: film grain, vignette, ambient gradients, subtle custom cursor
- A reusable motion system (`Reveal`, `RevealText`, `MagneticButton`) on a single
  signature easing — `cubic-bezier(.22, 1, .36, 1)`
- Fully responsive and mobile-first; honours `prefers-reduced-motion` throughout
- No backend – frontend only

---

## Tech Stack

- React 19 (Create React App)
- [Framer Motion](https://www.framer.com/motion/) — animation & scroll-linked motion
- [Lenis](https://lenis.darkroom.engineering/) — smooth scrolling
- CSS (vanilla, design-token driven) — co-located per-component stylesheets
- Type: Cormorant Garamond (display serif) + Jost (sans), via Google Fonts
- JavaScript (ES6+)

---

## Project Structure

src/  
├── assets/  
│ ├── filliart.mp4          # hero background video  
│ ├── image1.jpeg … image9.jpeg  
│ └── filliiarte-logo-circle.png  
│  
├── lib/  
│ └── motion.js             # shared easing + animation variants  
│  
├── components/  
│ ├── motion/               # reusable motion primitives  
│ │ ├── Reveal.jsx          # fade + rise + blur on scroll into view  
│ │ ├── RevealText.jsx      # line-by-line heading reveal  
│ │ └── MagneticButton.jsx  # cursor-magnetic button  
│ │  
│ ├── SmoothScroll.jsx      # Lenis provider + scrollToId()  
│ ├── Atmosphere.jsx        # fixed film grain + vignette overlay  
│ ├── Cursor.jsx            # subtle ambient custom cursor  
│ ├── Preloader.jsx         # cinematic intro  
│ ├── Navbar.jsx            # + Navbar.css  
│ ├── HomeBanner.jsx        # hero  + Hero.css  
│ ├── About.jsx             # manifesto + About.css  
│ ├── Products.jsx          # collection index + Products.css  
│ ├── Gallery.jsx           # parallax gallery + lightbox + Gallery.css  
│ ├── Info.jsx              # ordering flow + Info.css  
│ ├── Contact.jsx           # + Contact.css  
│ └── Footer.jsx            # + Footer.css  
│  
├── App.js  
├── index.js  
├── index.css                # design tokens, base, utilities, atmosphere  
└── setupTests.js

---

## Gallery Images

Gallery images are loaded locally from:

src/assets/

Images are imported directly inside `Gallery.jsx`.

To change images:

1. Replace files inside `src/assets/`
2. Keep filenames the same **or**
3. Update imports in `Gallery.jsx`

---

## Ordering & Delivery

This website is **informational only**.

- No cart
- No checkout
- No payments

Orders are handled via:

- Instagram direct messages
- WhatsApp messages

Delivery:

- Available across Albania
- Free postal delivery inside Albania

---

## Running the Project Locally

npm install  
npm start

The app will run at:

http://localhost:3000

---

## Deployment

This project is ready to deploy on:

- Vercel
- Netlify
- GitHub Pages

Build command:

npm run build

---

## Design Philosophy

- Cinematic, editorial, handcrafted — a boutique studio, not a SaaS landing page
- Warm ivory / wax cream / champagne blush / muted gold / soft charcoal palette
- Oversized serif headlines, generous whitespace, asymmetrical editorial layouts
- Atmospheric depth: film grain, vignette, ambient light, subtle parallax
- Motion that is slow, intentional and restrained — one signature easing curve
- Accessible by default: semantic markup, keyboard-navigable lightbox/menu, and
  full `prefers-reduced-motion` support

## Hero Video

The looping hero video lives at `src/assets/filliart.mp4` and is imported directly
in `HomeBanner.jsx`. It autoplays muted, loops, and plays inline, with `image2.jpeg`
as the poster fallback. To swap it, replace the file (keep the name) or update the
import.

---

## External Links

- Instagram: https://www.instagram.com/filliiarte/

---

## Notes

- This site is intended as a **brand presence**, not an e-commerce platform
- All content can be updated directly in React components
- No backend or database is required

---

## © License

This project was created for **Filli i Artë** and is intended for informational and promotional use only.
