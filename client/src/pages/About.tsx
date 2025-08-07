import { motion } from 'framer-motion';
import HeroSection from '@/components/UI/HeroSection';

const About = () => {
  const milestones = [
    {
      year: '1986',
      title: 'FUNDACIÓN',
      description: 'Alberto Rodríguez establece su primera casa de modas en Guadalajara'
    },
    {
      year: '1995',
      title: 'RECONOCIMIENTO',
      description: 'Primera participación en Mercedes-Benz Fashion Week México'
    },
    {
      year: '2010',
      title: 'EXPANSIÓN',
      description: 'Colaboración con Swarovski Company y presencia internacional'
    },
    {
      year: '2025',
      title: 'LEGADO',
      description: 'Más de 35 años creando momentos únicos en alta costura'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="MUNDO ALBERTO RODRÍGUEZ"
        description="Una historia de pasión, dedicación y excelencia en el mundo de la alta costura mexicana"
        backgroundImage="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      />

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Alberto Rodríguez"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 tracking-wide">
                EL DISEÑADOR
              </h2>
              <div className="w-24 h-px bg-luxury-gold mb-8"></div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Alberto Rodríguez es un reconocido diseñador mexicano de alta costura, 
                  especializado en vestidos de novia y de gala. Su trayectoria comenzó en 1986, 
                  cuando fundó su casa de modas en Guadalajara, Jalisco.
                </p>
                <p>
                  Con más de 35 años de experiencia, Alberto ha desarrollado un estilo único 
                  que combina la elegancia clásica con toques contemporáneos. Su trabajo ha 
                  sido reconocido tanto nacional como internacionalmente.
                </p>
                <p>
                  Inspirado por los grandes maestros de la moda como Chanel, Dior y Oscar de la Renta, 
                  Alberto ha creado un lenguaje propio que define la alta costura mexicana contemporánea.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 tracking-wide">
              FILOSOFÍA
            </h2>
            <div className="w-24 h-px bg-luxury-gold mx-auto mb-12"></div>
            
            <blockquote className="text-2xl md:text-3xl font-light italic max-w-4xl mx-auto mb-8">
              "En la moda hay que evolucionar más allá de las tendencias y estilos. 
              Cada pieza debe contar una historia única y reflejar la personalidad de quien la porta."
            </blockquote>
            
            <cite className="text-luxury-gold text-lg tracking-luxury">
              — Alberto Rodríguez
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              NUESTRA HISTORIA
            </h2>
            <div className="w-24 h-px bg-luxury-gold mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-full bg-luxury-gold"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`w-full lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'
                }`}>
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="text-luxury-gold font-serif text-2xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="font-medium text-xl mb-3 tracking-luxury">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-luxury-gold rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              NUESTROS VALORES
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
              <h3 className="font-serif text-2xl font-medium mb-4 tracking-luxury">
                EXCELENCIA
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cada detalle importa. Desde la selección de materiales hasta los acabados finales, 
                buscamos la perfección en cada pieza.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl font-medium mb-4 tracking-luxury">
                EXCLUSIVIDAD
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creamos piezas únicas que reflejan la personalidad y estilo individual 
                de cada cliente.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-serif text-2xl font-medium mb-4 tracking-luxury">
                TRADICIÓN
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Preservamos las técnicas artesanales de la alta costura, 
                transmitiendo nuestro conocimiento a las nuevas generaciones.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
