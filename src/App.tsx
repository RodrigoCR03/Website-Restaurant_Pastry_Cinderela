import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Pastries from './components/Pastries';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
// Removed PrivacyPolicy import

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
      <Testimonials />
      <Contact />
      <Reservation />
      <Footer />
      {/* Removed PrivacyPolicy component */}
    </>
  );
};

export default App;