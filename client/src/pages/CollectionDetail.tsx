import { useStrapiCollection } from '../hooks/useStrapiCollection';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

// El router 'wouter' pasa los parámetros de la URL como una prop 'params'
interface CollectionDetailProps {
  params: {
    slug: string;
  };
}

const CollectionDetail = ({ params }: CollectionDetailProps) => {
  const { slug } = params;
  const { data: collection, isLoading, error } = useStrapiCollection(slug);

  // La URL base de tu API de Strapi
  const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Cargando...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error.message}</div>;
  }

  if (!collection) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Colección no encontrada</h1>
        <p className="mb-8">No pudimos encontrar la colección que estás buscando.</p>
        <Link href="/collections">
          <a className="px-6 py-3 bg-luxury-gold text-white hover:bg-luxury-black transition-colors cursor-pointer">
            Volver a Colecciones
          </a>
        </Link>
      </div>
    );
  }

  const { title, description, season, images } = collection.attributes;

  return (
    <div className="pt-20 min-h-screen bg-white">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Encabezado de la Colección */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-light text-luxury-black tracking-luxury" style={{ fontFamily: 'var(--font-logo)' }}>
            {title}
          </h1>
          {season && <p className="text-lg text-gray-600 mt-4">{season}</p>}
          <motion.div 
            className="w-24 h-px bg-luxury-gold mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Descripción */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed mb-16"
        >
          {description}
        </motion.p>

        {/* Galería de Imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.data.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img 
                src={`${STRAPI_API_URL}${image.attributes.url}`} 
                alt={image.attributes.alternativeText || title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Botón para Volver */}
        <div className="text-center mt-16">
            <Link href="/collections">
                <motion.a 
                    className="inline-block border-2 border-luxury-gold text-luxury-gold px-12 py-4 text-sm font-medium tracking-luxury hover:bg-luxury-gold hover:text-black transition-all duration-500 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    VOLVER A COLECCIONES
                </motion.a>
            </Link>
        </div>
      </main>
    </div>
  );
};

export default CollectionDetail;
