import React from "react";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Works from "./components/sections/Works.jsx";
import Resume from "./components/sections/Resume.jsx";
import Contact from "./components/sections/Contact.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Works />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
