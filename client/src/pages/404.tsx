import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-light via-white to-luxury-light">
      <div className="text-center max-w-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Large 404 */}
          <motion.h1 
            className="text-9xl md:text-[12rem] font-serif font-light text-luxury-gold/20 leading-none mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            404
          </motion.h1>

          {/* Elegant Line */}
          <motion.div 
            className="w-32 h-px bg-luxury-gold mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Main Message */}
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-light text-luxury-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Página No Encontrada
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 font-light tracking-luxury mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            La página que buscas no existe o ha sido movida.<br/>
            Te invitamos a explorar nuestras colecciones de alta costura.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/">
              <motion.div
                className="inline-flex items-center justify-center px-8 py-4 bg-luxury-gold text-white text-sm font-medium tracking-luxury hover:bg-luxury-gold/90 transition-all duration-300 cursor-pointer min-w-[200px]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-4 h-4 mr-2" />
                VOLVER AL INICIO
              </motion.div>
            </Link>

            <Link href="/colecciones">
              <motion.div
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-luxury-black text-luxury-black text-sm font-medium tracking-luxury hover:bg-luxury-black hover:text-white transition-all duration-300 cursor-pointer min-w-[200px]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                VER COLECCIONES
              </motion.div>
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-sm text-gray-500 mb-2">
              ¿Necesitas ayuda? Contáctanos
            </p>
            <div className="text-sm text-luxury-black">
              <p>Av. Vallarta #1300, Guadalajara, Jalisco</p>
              <p className="mt-1">
                <a 
                  href="tel:+523338262041" 
                  className="hover:text-luxury-gold transition-colors duration-300"
                >
                  (33) 3826 2041
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Background Decoration */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border border-luxury-gold rounded-full"></div>
          <div className="absolute top-8 left-8 right-8 bottom-8 border border-luxury-gold/50 rounded-full"></div>
          <div className="absolute top-16 left-16 right-16 bottom-16 border border-luxury-gold/30 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;