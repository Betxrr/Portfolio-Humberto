import React from "react";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Works from "./components/sections/Works.jsx";
import Resume from "./components/sections/Resume.jsx";
import Contact from "./components/sections/Contact.jsx";
import FloatingActions from "./components/UI/FloatingActions.jsx"; // Caminho corrigido

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <Resume />
        <Works />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, margin: 0, padding: 0 }}>
          <Contact style={{ flex: 1, marginBottom: 0 }} />
          <Footer />
        </div>
        <FloatingActions /> 
      </main>
    </div>
  );
}