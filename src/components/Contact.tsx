import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Contacte-nos</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Tem perguntas ou deseja fazer uma reserva? Entre em contacto connosco através de qualquer um dos seguintes canais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-6">Entre em Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Telefone</h4>
                    <p className="text-gray-600">+351 217 958 995</p>
                    <p className="text-gray-600">+351 969 524 991 (Telemóvel)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <p className="text-gray-600">geral.cinderela@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Morada</h4>
                    <p className="text-gray-600">Av. das Forças Armadas 22</p>
                    <p className="text-gray-600">1600-082 Lisboa, Portugal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda - Sábado: 07:00 - 00:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-primary mb-2">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/cindereladeentrecampos/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-secondary transition-colors" 
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com/cinderela_de_entrecampos_/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-secondary transition-colors" 
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Onde Estamos</h3>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.1545417122396!2d-9.153149684686394!3d38.74702997959419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a3d5cd2c41%3A0x5b94dbc1a0c0e4c8!2sAv.%20das%20For%C3%A7as%20Armadas%2022%2C%201600-082%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Localização do Restaurante Cinderela"
                  aria-label="Google Maps mostrando a localização do Restaurante Cinderela"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;