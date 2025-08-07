import { Link } from 'wouter';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-light mb-6 tracking-luxury">
              ALBERTO RODRÍGUEZ
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Casa de alta costura fundada en 1986, especializada en vestidos de novia 
              y de gala con más de 35 años creando momentos únicos.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-luxury-light rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-luxury-light rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-luxury-light rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 tracking-luxury">COLECCIONES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/couture">
                  <a className="text-gray-600 hover:text-luxury-gold transition-colors duration-300">
                    Couture
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/novias">
                  <a className="text-gray-600 hover:text-luxury-gold transition-colors duration-300">
                    Novias
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ready-to-wear">
                  <a className="text-gray-600 hover:text-luxury-gold transition-colors duration-300">
                    Ready-to-Wear
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/accesorios">
                  <a className="text-gray-600 hover:text-luxury-gold transition-colors duration-300">
                    Accesorios
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 tracking-luxury">EMPRESA</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/historia">
                  <a className="text-gray-600 hover:text-luxury-gold transition-colors duration-300">
                    Historia
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/filosofia">
                  <a className="text-gray-600 hover:text-luxury-gold transition-colors duration-300">
                    Filosofía
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/noticias">
                  <a className="text-gray-600 hover:text-luxury-gold transition-colors duration-300">
                    Noticias
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <a className="text-gray-600 hover:text-luxury-gold transition-colors duration-300">
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 Alberto Rodríguez Couture. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad">
              <a className="text-gray-600 hover:text-luxury-gold text-sm transition-colors duration-300">
                Privacidad
              </a>
            </Link>
            <Link href="/terminos">
              <a className="text-gray-600 hover:text-luxury-gold text-sm transition-colors duration-300">
                Términos
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
