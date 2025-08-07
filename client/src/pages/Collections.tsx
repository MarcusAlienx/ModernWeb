import { motion } from 'framer-motion';
import HeroSection from '@/components/UI/HeroSection';
import CollectionCard from '@/components/UI/CollectionCard';

const Collections = () => {
  const collections = [
    {
      title: 'ALTA COSTURA',
      subtitle: 'COLECCIÓN PRIMAVERA 2025',
      image: 'https://images.unsplash.com/photo-1594736797933-d0c02e8ec2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000',
      href: '/collections/alta-costura'
    },
    {
      title: 'VESTIDOS DE NOVIA',
      subtitle: 'COLECCIÓN ETERNA',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000',
      href: '/collections/novias'
    },
    {
      title: 'VESTIDOS DE GALA',
      subtitle: 'RED CARPET COLLECTION',
      image: 'https://images.unsplash.com/photo-1566479179817-0b00b3c6f7c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000',
      href: '/collections/gala'
    },
    {
      title: 'READY-TO-WEAR',
      subtitle: 'OCASIONES ESPECIALES',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000',
      href: '/collections/ready-to-wear'
    },
    {
      title: 'ACCESORIOS',
      subtitle: 'COMPLEMENTOS DE LUJO',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000',
      href: '/collections/accesorios'
    },
    {
      title: 'JOYERÍA',
      subtitle: 'PIEZAS ÚNICAS',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000',
      href: '/collections/joyeria'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="COLECCIONES"
        description="Descubre nuestras colecciones exclusivas de alta costura, donde cada pieza cuenta una historia única de elegancia y sofisticación"
        backgroundImage="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      />

      {/* Collections Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
              NUESTRAS COLECCIONES
            </h2>
            <div className="w-24 h-px bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada colección representa nuestra pasión por la excelencia, combinando técnicas tradicionales 
              de alta costura con diseños contemporáneos que trascienden el tiempo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionCard
                key={collection.title}
                title={collection.title}
                subtitle={collection.subtitle}
                image={collection.image}
                href={collection.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              NUESTRO PROCESO
            </h2>
            <div className="w-24 h-px bg-luxury-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif">
                1
              </div>
              <h3 className="font-serif text-xl font-medium mb-4 tracking-luxury">CONSULTA</h3>
              <p className="text-gray-600 leading-relaxed">
                Conocemos tus gustos, necesidades y la ocasión especial para crear el diseño perfecto.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif">
                2
              </div>
              <h3 className="font-serif text-xl font-medium mb-4 tracking-luxury">DISEÑO</h3>
              <p className="text-gray-600 leading-relaxed">
                Creamos bocetos únicos y seleccionamos los mejores materiales para tu pieza exclusiva.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif">
                3
              </div>
              <h3 className="font-serif text-xl font-medium mb-4 tracking-luxury">CONFECCIÓN</h3>
              <p className="text-gray-600 leading-relaxed">
                Nuestros artesanos expertos dan vida a tu diseño con técnicas de alta costura.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
