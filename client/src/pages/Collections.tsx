import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronRight, Star, Calendar, User } from 'lucide-react';

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Detectar fragmento de URL para navegar a categoría específica
    const hash = window.location.hash.replace('#', '');
    if (hash && ['novias', 'gala', 'coctel', 'rtw'].includes(hash)) {
      setSelectedCategory(hash);
    }
  }, []);

  const categories = [
    { id: 'all', label: 'TODAS LAS COLECCIONES' },
    { id: 'novias', label: 'NOVIAS' },
    { id: 'gala', label: 'GALA' },
    { id: 'coctel', label: 'CÓCTEL' },
    { id: 'rtw', label: 'READY-TO-WEAR' }
  ];

  const collections = [
    {
      id: 1,
      title: 'Novias Eternas',
      description: 'Vestidos de novia únicos diseñados para el día más importante. Cada pieza es creada a medida con las mejores telas y técnicas de alta costura.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0c02e8ec2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200',
      link: '/novias',
      category: 'novias',
      season: 'Colección 2025',
      pieces: 12,
      price: 'Desde $85,000 MXN'
    },
    {
      id: 2,
      title: 'Gala Imperial',
      description: 'Elegancia y sofisticación para eventos especiales. Diseños que capturan la esencia de la realeza con un toque moderno y mexicano.',
      image: 'https://images.unsplash.com/photo-1566479179817-02b2e5b2c7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200',
      link: '/gala',
      category: 'gala',
      season: 'Colección 2025',
      pieces: 18,
      price: 'Desde $45,000 MXN'
    },
    {
      id: 3,
      title: 'Cóctel Dorado',
      description: 'Diseños sofisticados para ocasiones semi-formales. La perfecta combinación entre elegancia y versatilidad para la mujer moderna.',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200',
      link: '/coctel',
      category: 'coctel',
      season: 'Colección 2025',
      pieces: 24,
      price: 'Desde $28,000 MXN'
    },
    {
      id: 4,
      title: 'Ready-to-Wear Signature',
      description: 'Piezas listas para usar con el sello de calidad AR. Elegancia cotidiana sin comprometer el estilo ni la calidad artesanal.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200',
      link: '/ready-to-wear',
      category: 'rtw',
      season: 'Colección 2025',
      pieces: 35,
      price: 'Desde $15,000 MXN'
    },
    {
      id: 5,
      title: 'Madrina Celestial',
      description: 'Diseños especiales para madrinas de boda. Elegancia que complementa sin competir, creando armonía en el día perfecto.',
      image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200',
      link: '/madrina',
      category: 'gala',
      season: 'Colección 2025',
      pieces: 15,
      price: 'Desde $35,000 MXN'
    },
    {
      id: 6,
      title: 'XV Años Princesa',
      description: 'Vestidos de quinceañera que marcan el paso a la feminidad. Diseños que capturan la magia de este momento único.',
      image: 'https://images.unsplash.com/photo-1582639592587-6d82b83fcef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200',
      link: '/quince',
      category: 'gala',
      season: 'Colección 2025',
      pieces: 20,
      price: 'Desde $25,000 MXN'
    }
  ];

  const filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(collection => collection.category === selectedCategory);

  const stats = [
    { icon: Star, label: 'Colecciones', value: '' },
    { icon: User, label: 'Diseños Únicos', value: '' },
    { icon: Calendar, label: 'Años de Experiencia', value: '' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            alt="Colecciones Alberto Rodríguez"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-luxury" style={{ fontFamily: 'var(--font-logo)' }}>
              COLECCIONES
            </h1>
            <motion.div 
              className="w-32 h-px bg-luxury-gold mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Cada pieza es una obra de arte que refleja la pasión por la perfección<br/>
              y el detalle que nos caracteriza desde 1986.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-luxury-light">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-xl font-medium text-luxury-black tracking-luxury">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 text-sm font-medium tracking-luxury transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-luxury-gold text-white'
                    : 'bg-transparent text-luxury-black hover:bg-luxury-light border border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Collection Sections */}
      <section id="novias" className="py-2"></section>
      <section id="gala" className="py-2"></section>
      <section id="coctel" className="py-2"></section>
      <section id="rtw" className="py-2"></section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-luxury-gold font-medium tracking-wide uppercase">
                        {collection.season}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-light mb-4 tracking-luxury">
                      {collection.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {collection.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-luxury-black font-medium">
                        {collection.price}
                      </span>
                      <motion.button
                        className="flex items-center text-luxury-gold hover:text-luxury-black transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm font-medium mr-2">VER MÁS</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 tracking-luxury">
              ¿Te Imaginas Tu Vestido Ideal?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Agenda una cita personalizada y convierte tu visión en realidad
              con nuestro proceso de diseño exclusivo.
            </p>
            
            <motion.button
              className="inline-block border-2 border-luxury-gold text-luxury-gold px-12 py-4 text-sm font-medium tracking-luxury hover:bg-luxury-gold hover:text-black transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AGENDAR CITA PRIVADA
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Collections;