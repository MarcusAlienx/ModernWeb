import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/couture', label: 'COUTURE', left: true },
    { href: '/ready-to-wear', label: 'READY-TO-WEAR', left: true },
    { href: '/novias', label: 'NOVIAS', left: true },
    { href: '/red-carpet', label: 'RED CARPET', left: false },
    { href: '/mundo-alberto', label: 'MUNDO ALBERTO', left: false },
    { href: '/noticias', label: 'NOTICIAS', left: false },
    { href: '/boutique', label: 'BOUTIQUE', left: false },
  ];

  const leftNavItems = navigationItems.filter(item => item.left);
  const rightNavItems = navigationItems.filter(item => !item.left);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation Left */}
          <div className="hidden lg:flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`text-sm font-medium tracking-luxury transition-colors duration-300 ${
                  location === item.href
                    ? 'text-luxury-gold'
                    : 'hover:text-luxury-gold'
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center lg:flex-none">
            <Link href="/">
              <a className="flex items-center">
                <span className="font-serif text-2xl font-light tracking-luxury">
                  ALBERTO RODRÍGUEZ
                </span>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation Right */}
          <div className="hidden lg:flex items-center space-x-8">
            {rightNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`text-sm font-medium tracking-luxury transition-colors duration-300 ${
                  location === item.href
                    ? 'text-luxury-gold'
                    : 'hover:text-luxury-gold'
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4 bg-white border-t border-gray-100">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`block text-lg font-medium tracking-luxury transition-colors duration-300 ${
                      location === item.href
                        ? 'text-luxury-gold'
                        : 'hover:text-luxury-gold'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
