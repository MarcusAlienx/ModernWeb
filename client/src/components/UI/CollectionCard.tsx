import { motion } from 'framer-motion';

interface CollectionCardProps {
  title: string;
  subtitle: string;
  image: string;
  href?: string;
  className?: string;
}

const CollectionCard = ({ title, subtitle, image, href = '#', className = '' }: CollectionCardProps) => {
  return (
    <motion.div
      className={`group cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <a href={href}>
        <div className="relative overflow-hidden bg-white">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-96 object-cover transition-transform duration-700"
            whileHover={{ scale: 1.05 }}
            loading="lazy"
            onError={(e) => {
              console.error('Image failed to load:', image);
              // Fallback to a more reliable image if current one fails
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200';
            }}
          />
          <motion.div
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
        <div className="pt-6 text-center">
          <h3 className="font-serif text-2xl font-light mb-2 tracking-luxury">
            {title}
          </h3>
          <p className="text-sm text-gray-600 tracking-luxury">
            {subtitle}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default CollectionCard;
