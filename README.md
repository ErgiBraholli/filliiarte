# Filli i Artë – Candle & Dried Flower Studio (Frontend Website)

A clean, elegant, informational-only one-page website built for **Filli i Artë**, a handmade candle and dried flower composition studio.  
The site is designed to feel warm, minimal, and premium — suitable for a candle brand — and is ready for deployment.

---

## Features

- One-page layout with smooth scrolling
- Sticky navigation bar with active section highlight
- Warm, light, candle-friendly colour palette
- Hero section with clear call-to-actions
- About section describing the brand philosophy
- Products & services cards
- Image gallery (local images from `src/assets`)
- Delivery & ordering information (no checkout)
- Contact section with Instagram / WhatsApp / Email
- Fully responsive (mobile, tablet, desktop)
- No backend – frontend only

---

## Tech Stack

- React (Create React App)
- CSS (vanilla) – no frameworks
- JavaScript (ES6+)

---

## Project Structure

src/  
├── assets/  
│ ├── image1.jpeg  
│ ├── image2.jpeg  
│ └── ...  
│  
├── components/  
│ ├── Navbar.jsx  
│ ├── HomeBanner.jsx  
│ ├── About.jsx  
│ ├── Products.jsx  
│ ├── Gallery.jsx  
│ ├── Info.jsx  
│ ├── Contact.jsx  
│ └── Footer.jsx  
│  
├── App.js  
├── index.js  
├── index.css  
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

- Warm, light colours inspired by candles and natural materials
- Minimalist layout to keep focus on the products
- Soft gradients and subtle shadows for a premium feel
- Clear typography and spacing for readability

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
