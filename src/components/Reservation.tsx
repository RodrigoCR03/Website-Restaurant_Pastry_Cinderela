import React, { useState } from 'react';
import { Phone, Loader2 } from 'lucide-react';

const Reservation: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '10',
    message: ''
  });

  // Function to check if user is on a mobile device
  const isMobileDevice = () => {
    return (
      typeof window !== 'undefined' &&
      (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i))
    );
  };

  // Function to generate WhatsApp message with reservation details
  const generateWhatsAppLink = (data: typeof formData) => {
    const whatsappNumber = '+351969524991'; // The provided WhatsApp number
    
    // Format the message with reservation details
    const message = `*Nova Reserva*\n\n*Nome:* ${data.name}\n*Email:* ${data.email}\n*Telefone:* ${data.phone}\n*Data:* ${data.date}\n*Hora:* ${data.time}\n*Número de Pessoas:* ${data.guests}\n${data.message ? `*Mensagem:* ${data.message}` : ''}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Generate the WhatsApp link based on device type
    return `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodedMessage}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('https://formspree.io/f/xblgrrpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nova Reserva - ${formData.name} - ${formData.guests} pessoas`,
          submittedAt: new Date().toISOString(),
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        // Generate WhatsApp link and redirect after successful form submission
        const whatsappLink = generateWhatsAppLink(formData);
        
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '10',
          message: ''
        });
        
        // Redirect to WhatsApp after a short delay to allow user to see success message
        setTimeout(() => {
          // Use the isMobileDevice function to determine how to open WhatsApp
          if (isMobileDevice()) {
            // On mobile, directly navigate to the WhatsApp link
            window.location.href = whatsappLink;
          } else {
            // On desktop, open in a new tab
            window.open(whatsappLink, '_blank');
          }
        }, 1500);
      } else {
        const data = await response.json();
        setError(data.error || 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
      }
    } catch (error) {
      setError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente ou entre em contato por telefone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'guests') {
      const guestCount = parseInt(value);
      if (guestCount > 200) {
        alert('O número máximo de convidados é 200.');
        return;
      }
      if (guestCount < 10) {
        alert('Para reservas com menos de 10 pessoas, por favor contacte-nos por telefone.');
        setFormData(prev => ({ ...prev, guests: '10' }));
        return;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="py-16 hero-pattern text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            Faça uma Reserva
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#D4AF37]"></span>
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Reserve a sua mesa online para grupos de 10 ou mais pessoas.
            Para grupos menores, entre em contacto por telefone.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-gray-800">
          <div className="mb-8 text-center">
            {/* Alerta para reservas no mesmo dia */}
            <div className="mb-6 p-4 bg-[#FFF3CD] border border-[#FFE69C] rounded-lg">
              <p className="text-[#856404]">
                <span className="font-semibold">Atenção:</span>
                &nbsp;Para reservas no próprio dia, por favor contacte-nos diretamente pelo telemóvel indicado abaixo.
              </p>
            </div>
            <div className="flex items-center justify-center text-[#F5F5DC] bg-[#1C2E4A] rounded-lg p-4">
              <Phone size={20} className="mr-2 text-[#D4AF37]" />
              <p>
                Reservas para menos de 10 pessoas: {' '}
                <a href="tel:+351969524991" className="font-semibold hover:text-[#D4AF37] transition-colors">+351 969 524 991</a>
              </p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-5xl text-green-500 mb-4">✓</div>
              <h3 className="text-2xl font-bold text-[#1C2E4A] mb-2">Reserva Recebida!</h3>
              <p className="text-gray-600 mb-4">
                Obrigado pelo seu pedido de reserva. Entraremos em contacto brevemente para confirmar a sua marcação.
              </p>
              <p className="text-gray-600 mb-4">
                A redirecionar para o WhatsApp para enviar os detalhes da reserva...
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-[#D4AF37] hover:text-[#1C2E4A] transition-colors duration-300"
              >
                Fazer outra reserva
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Data *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Hora *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    min="07:00"
                    max="23:00"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Pessoas * (mínimo 10)
                  </label>
                  {/* Input para Desktop */}
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="10"
                    max="200"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] md:block hidden"
                    disabled={isSubmitting}
                  />
                  {/* Select para Mobile */}
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] md:hidden block appearance-none bg-white"
                    disabled={isSubmitting}
                  >
                    {Array.from({ length: 191 }, (_, i) => i + 10).map((num) => (
                      <option key={num} value={num}>
                        {num} pessoas
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem ou Pedidos Especiais
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center" role="alert">
                  {error}
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#D4AF37] text-white px-8 py-3 rounded-md hover:bg-[#1C2E4A] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>A enviar...</span>
                    </>
                  ) : (
                    <span>Enviar Reserva</span>
                  )}
                </button>
                <p className="mt-4 text-xs text-gray-500">
                  Ao enviar, os detalhes da reserva serão enviados por email e WhatsApp para confirmação.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;