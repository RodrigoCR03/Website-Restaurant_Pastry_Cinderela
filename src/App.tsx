import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Pastries from './components/Pastries';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Pastries />
      <Gallery />
      <Contact />
      <Reservation />
      <Footer />
    </>
  );
};

export default App;