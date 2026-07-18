import { motion } from 'motion/react';

const UNIT_MAPS = [
  { 
    name: "Unidade Posto", 
    src: "https://res.cloudinary.com/ltukueen/image/upload/v1784404993/WhatsApp_Image_2026-07-18_at_5.01.57_PM_g1q4sd.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=-29.7724023,-57.0502608"
  },
  { 
    name: "Unidade Centro", 
    src: "https://res.cloudinary.com/ltukueen/image/upload/v1784404993/WhatsApp_Image_2026-07-18_at_5.01.58_PM_ga21a7.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=-29.7556614,-57.0893995"
  },
];

export default function StoreMap() {
  return (
    <div className="grid md:grid-cols-2 gap-8 w-full p-4">
      {UNIT_MAPS.map((unit) => (
        <motion.div
          key={unit.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/50 transition-shadow duration-300"
        >
          <a href={unit.link} target="_blank" rel="noreferrer">
            <img 
              src={unit.src} 
              alt={unit.name} 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl font-bold">{unit.name}</h3>
              <p className="text-white/80 text-sm">Clique para ver como chegar</p>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
