import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Send, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
    preferredContact: 'phone'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    'Vestido de Novia',
    'Vestido de Gala',
    'Vestido de Cóctel',
    'Vestido de Madrina',
    'Vestido de XV Años',
    'Ready-to-Wear',
    'Consulta General'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: '',
      preferredContact: 'phone'
    });
    
    setIsSubmitting(false);
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      details: ['Av. Vallarta #1300', 'Guadalajara, Jalisco', 'México C.P. 44100'],
      link: 'https://maps.google.com/?q=Av.+Vallarta+1300+Guadalajara'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['(33) 3826 2041', 'WhatsApp: (33) 1234 5678'],
      link: 'tel:+523338262041'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@albertorodriguez.com', 'citas@albertorodriguez.com'],
      link: 'mailto:info@albertorodriguez.com'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lunes - Viernes: 10:00 - 19:00', 'Sábado: 10:00 - 16:00', 'Domingo: Cerrado'],
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@albertorodriguezco',
      link: 'https://instagram.com/albertorodriguezco',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'Alberto Rodriguez Couture',
      link: 'https://facebook.com/albertorodriguezco',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            alt="Contacto Alberto Rodríguez"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-luxury" style={{ fontFamily: 'var(--font-logo)' }}>
              CONTACTO
            </h1>
            <motion.div 
              className="w-32 h-px bg-luxury-gold mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Comencemos a crear el vestido de tus sueños.<br/>
              Agenda tu cita personalizada hoy mismo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl font-light mb-8 tracking-luxury">
                  Agenda Tu Cita
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Completa el formulario y nos pondremos en contacto contigo para agendar 
                  una cita personalizada en nuestro atelier. Cada consulta incluye asesoría 
                  de diseño sin costo.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors duration-300"
                        placeholder="(33) 1234 5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Evento *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors duration-300"
                      >
                        <option value="">Selecciona una opción</option>
                        {eventTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha del Evento (Aproximada)
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Método de Contacto Preferido
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="text-luxury-gold focus:ring-luxury-gold border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Teléfono</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="text-luxury-gold focus:ring-luxury-gold border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="whatsapp"
                          checked={formData.preferredContact === 'whatsapp'}
                          onChange={handleInputChange}
                          className="text-luxury-gold focus:ring-luxury-gold border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">WhatsApp</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje Adicional
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors duration-300"
                      placeholder="Cuéntanos sobre tu visión, inspiración o cualquier detalle especial que quieras compartir..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-gold text-white py-4 px-8 font-medium tracking-luxury hover:bg-luxury-gold/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        ENVIANDO...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        ENVIAR MENSAJE
                      </div>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info & Map */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Contact Information */}
                <div>
                  <h3 className="font-serif text-2xl font-light mb-6 tracking-luxury">
                    Información de Contacto
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-luxury-gold" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-gray-600">
                              {info.link && idx === 0 ? (
                                <a href={info.link} className="hover:text-luxury-gold transition-colors duration-300">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-serif text-2xl font-light mb-6 tracking-luxury">
                    Síguenos
                  </h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 bg-gradient-to-r hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center`}>
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-gray-700">
                            {social.name}
                          </h4>
                          <p className="text-sm text-gray-600">{social.handle}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-luxury-light p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 h-6 text-luxury-gold" />
                    <h3 className="font-serif text-xl font-light tracking-luxury">
                      Citas de Emergencia
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Para eventos con menos de 30 días de anticipación, contacta 
                    directamente por WhatsApp para verificar disponibilidad.
                  </p>
                  <motion.a
                    href="https://wa.me/523312345678"
                    className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">WhatsApp Directo</span>
                    <Phone className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl font-light mb-4 tracking-luxury">
              Visita Nuestro Atelier
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ubicado en el corazón de Guadalajara, nuestro atelier te espera 
              para crear juntos el vestido de tus sueños.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <p className="text-gray-600">
                  Av. Vallarta #1300<br/>
                  Guadalajara, Jalisco
                </p>
                <motion.a
                  href="https://maps.google.com/?q=Av.+Vallarta+1300+Guadalajara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-luxury-gold hover:text-luxury-black transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Ver en Google Maps
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;