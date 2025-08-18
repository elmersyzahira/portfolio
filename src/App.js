// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GraphicDesign from './components/GraphicDesign';



function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <GraphicDesign />
      <Skills />
      <Contact />
      <Footer />
      {/* Add more components as needed */}
    </div>
  );
}

export default App;
