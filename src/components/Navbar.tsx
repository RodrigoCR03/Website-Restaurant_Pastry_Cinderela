import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import useSmoothScroll from '../hooks/useSmoothScroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'menu', 'pastries', 'gallery', 'testimonials', 'contact', 'reservation'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (section: string) => {
    return `text-[#D4AF37] hover:text-white transition-colors duration-300 ${
      activeSection === section ? 'text-white' : ''
    }`;
  };

  return (
    <header className="fixed w-full z-50">
      {/* Top info bar */}
      <div className={`bg-[#1C2E4A] text-white py-2 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center mb-2 md:mb-0">
              <Phone size={16} className="mr-2" />
              <span className="mr-4">+351 217 958 995</span>
              <Clock size={16} className="mr-2" />
              <span>Seg-Sáb: 07:00-00:00</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span>Av. das Forças Armadas 22, 1600-082 Lisboa</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav 
        className={`${
          isScrolled ? 'bg-[#1C2E4A] shadow-lg py-2' : 'bg-[#1C2E4A] py-4'
        } transition-all duration-300`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center"
            >
              <img 
                src="/images/logotipo.png" 
                alt="Cinderela Logo" 
                className="h-20 transform hover:scale-105 transition-all duration-300 ease-in-out" 
              />
            </a>
            
            <div className="hidden md:flex space-x-8">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className={getLinkClass('home')}
                aria-current={activeSection === 'home' ? 'page' : undefined}
              >
                Início
              </a>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className={getLinkClass('about')}
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                Sobre
              </a>
              <a 
                href="#menu" 
                onClick={(e) => scrollToSection(e, 'menu')}
                className={getLinkClass('menu')}
                aria-current={activeSection === 'menu' ? 'page' : undefined}
              >
                Ementa
              </a>
              <a 
                href="#pastries" 
                onClick={(e) => scrollToSection(e, 'pastries')}
                className={getLinkClass('pastries')}
                aria-current={activeSection === 'pastries' ? 'page' : undefined}
              >
                Pastelaria
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => scrollToSection(e, 'gallery')}
                className={getLinkClass('gallery')}
                aria-current={activeSection === 'gallery' ? 'page' : undefined}
              >
                Galeria
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => scrollToSection(e, 'testimonials')}
                className={getLinkClass('testimonials')}
                aria-current={activeSection === 'testimonials' ? 'page' : undefined}
              >
                Clientes
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className={getLinkClass('contact')}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
              >
                Contacto
              </a>
            </div>
            
            <div className="hidden md:block">
              <a 
                href="#reservation" 
                onClick={(e) => scrollToSection(e, 'reservation')}
                className="bg-[#D4AF37] text-[#1C2E4A] px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300"
              >
                Fazer Reserva
              </a>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#D4AF37] hover:text-white transition-colors duration-300"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#1C2E4A]`}
          aria-hidden={!isOpen}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a 
              href="#home" 
              onClick={(e) => {
                scrollToSection(e, 'home');
                setIsOpen(false);
              }}
              className={`block px-3 py-2 text-[#D4AF37] hover:text-white transition-colors duration-300 ${
                activeSection === 'home' ? 'text-white' : ''
              }`}
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Início
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                scrollToSection(e, 'about');
                setIsOpen(false);
              }}
              className={`block px-3 py-2 text-[#D4AF37] hover:text-white transition-colors duration-300 ${
                activeSection === 'about' ? 'text-white' : ''
              }`}
            >
              Sobre
            </a>
            <a 
              href="#menu" 
              onClick={(e) => {
                scrollToSection(e, 'menu');
                setIsOpen(false);
              }}
              className={`block px-3 py-2 text-[#D4AF37] hover:text-white transition-colors duration-300 ${
                activeSection === 'menu' ? 'text-white' : ''
              }`}
            >
              Ementa
            </a>
            <a 
              href="#pastries" 
              onClick={(e) => {
                scrollToSection(e, 'pastries');
                setIsOpen(false);
              }}
              className={`block px-3 py-2 text-[#D4AF37] hover:text-white transition-colors duration-300 ${
                activeSection === 'pastries' ? 'text-white' : ''
              }`}
            >
              Pastelaria
            </a>
            <a 
              href="#gallery" 
              onClick={(e) => {
                scrollToSection(e, 'gallery');
                setIsOpen(false);
              }}
              className={`block px-3 py-2 text-[#D4AF37] hover:text-white transition-colors duration-300 ${
                activeSection === 'gallery' ? 'text-white' : ''
              }`}
            >
              Galeria
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => {
                scrollToSection(e, 'testimonials');
                setIsOpen(false);
              }}
              className={`block px-3 py-2 text-[#D4AF37] hover:text-white transition-colors duration-300 ${
                activeSection === 'testimonials' ? 'text-white' : ''
              }`}
            >
              Clientes
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                scrollToSection(e, 'contact');
                setIsOpen(false);
              }}
              className={`block px-3 py-2 text-[#D4AF37] hover:text-white transition-colors duration-300 ${
                activeSection === 'contact' ? 'text-white' : ''
              }`}
            >
              Contacto
            </a>
            <a 
              href="#reservation" 
              onClick={(e) => {
                scrollToSection(e, 'reservation');
                setIsOpen(false);
              }}
              className={`block px-3 py-2 bg-[#D4AF37] text-[#1C2E4A] hover:bg-white transition-colors duration-300 ${
                activeSection === 'reservation' ? 'bg-white' : ''
              }`}
            >
              Fazer Reserva
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;