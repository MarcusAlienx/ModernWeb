import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import HeroSection from '@/components/UI/HeroSection';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="CONTACTO"
        description="Estamos aquí para hacer realidad tus sueños de alta costura. Agenda tu cita personalizada."
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      />

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl font-light mb-8 tracking-wide">
                AGENDA TU CITA
              </h2>
              <div className="w-24 h-px bg-luxury-gold mb-8"></div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium mb-2 tracking-luxury">
                      NOMBRE *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="apellido" className="block text-sm font-medium mb-2 tracking-luxury">
                      APELLIDO *
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 tracking-luxury">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-2 tracking-luxury">
                    TELÉFONO *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium mb-2 tracking-luxury">
                    SERVICIO DE INTERÉS *
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold outline-none transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="vestido-novia">Vestido de Novia</option>
                    <option value="vestido-gala">Vestido de Gala</option>
                    <option value="alta-costura">Alta Costura</option>
                    <option value="ready-to-wear">Ready-to-Wear</option>
                    <option value="accesorios">Accesorios</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="fecha-evento" className="block text-sm font-medium mb-2 tracking-luxury">
                    FECHA DEL EVENTO
                  </label>
                  <input
                    type="date"
                    id="fecha-evento"
                    name="fecha-evento"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-2 tracking-luxury">
                    MENSAJE
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu visión, estilo preferido o cualquier detalle especial..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-luxury-gold text-white py-3 px-8 font-medium tracking-luxury hover:bg-luxury-black transition-all duration-300"
                >
                  ENVIAR SOLICITUD
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-serif text-2xl font-light mb-6 tracking-wide">
                  INFORMACIÓN DE CONTACTO
                </h3>
                <div className="w-24 h-px bg-luxury-gold mb-8"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2 tracking-luxury">DIRECCIÓN</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Av. Vallarta #1300, Col. Americana<br />
                      (Entre Atenas y Emerson)<br />
                      C.P. 44160, Guadalajara, Jalisco, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2 tracking-luxury">TELÉFONOS</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Teléfono: (33) 3826 2041<br />
                      WhatsApp: 33 31 96 80 24
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2 tracking-luxury">EMAIL</h4>
                    <p className="text-gray-600 leading-relaxed">
                      info@albertorodriguez.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2 tracking-luxury">HORARIOS</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Lunes a Viernes: 10:00 AM - 3:00 PM y 4:00 PM - 7:00 PM<br />
                      Sábados: 10:00 AM - 3:00 PM<br />
                      <span className="text-luxury-gold font-medium">Atención con cita previa</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4 tracking-luxury">FORMAS DE PAGO</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Efectivo: 10% de descuento</li>
                  <li>• Cheque/transferencia: sin descuento</li>
                  <li>• Tarjetas: cargo adicional del 3%</li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="tel:+523338262041"
                  className="inline-block bg-luxury-gold text-white px-8 py-3 text-sm font-medium tracking-luxury hover:bg-luxury-black transition-all duration-300 mr-4"
                >
                  LLAMAR AHORA
                </a>
                <a
                  href="https://wa.me/523331968024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-luxury-gold text-luxury-gold px-8 py-3 text-sm font-medium tracking-luxury hover:bg-luxury-gold hover:text-white transition-all duration-300"
                >
                  WHATSAPP
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-luxury-light">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
              VISÍTANOS
            </h2>
            <div className="w-24 h-px bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Te esperamos en nuestro atelier en el corazón de Guadalajara, 
              donde cada sueño de alta costura se hace realidad.
            </p>
          </motion.div>

          {/* Placeholder for map - In production, integrate with Google Maps */}
          <motion.div
            className="bg-gray-200 h-96 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <MapPin className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="font-medium text-lg mb-2">ALBERTO RODRÍGUEZ COUTURE</h3>
              <p className="text-gray-600">Av. Vallarta #1300, Col. Americana, Guadalajara</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
