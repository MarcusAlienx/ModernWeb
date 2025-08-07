import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-20 h-20 mx-auto mb-6 bg-luxury-light rounded-full flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-300">
        <Icon className="w-8 h-8 text-luxury-gray group-hover:text-white" />
      </div>
      <h3 className="font-serif text-xl font-medium mb-4 tracking-luxury">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
