import 'dotenv/config';
import { storage } from "./storage";
import { InsertCollection } from "@shared/schema";

const collectionsData: Omit<InsertCollection, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: "NOVIA",
    slug: "novia",
    description: "Vestidos de novia únicos diseñados para el día más importante. Cada pieza es creada a medida con las mejores telas y técnicas de alta costura.",
    images: ["/uploads/novia.avif"],
    featured: true,
  },
  {
    title: "XV",
    slug: "xv",
    description: "Vestidos de quinceañera que marcan el paso a la feminidad. Diseños que capturan la magia de este momento único.",
    images: ["/uploads/xv.avif"],
    featured: true,
  },
  {
    title: "NOCHE",
    slug: "noche",
    description: "Elegancia y sofisticación para eventos especiales. Diseños que capturan la esencia de la realeza con un toque moderno y mexicano.",
    images: ["/uploads/noche.avif"],
    featured: true,
  },
  {
    title: "PRIMAVERA",
    slug: "primavera",
    description: "Diseños con elegancia que realzan la belleza natural, creando armonía en el día perfecto.",
    images: ["/uploads/primavera.avif"],
    featured: true,
  },
  {
    title: "CORTOS",
    slug: "cortos",
    description: "Diseños sofisticados para ocasiones semi-formales. La perfecta combinación entre elegancia y versatilidad para la mujer moderna.",
    images: ["/uploads/cortos.avif"],
    featured: true,
  },
  {
    title: "ALQUILER",
    slug: "alquiler",
    description: "Piezas listas para usar con el sello de calidad AR. Elegancia cotidiana sin comprometer el estilo ni la calidad artesanal.",
    images: ["/uploads/alquiler.avif"],
    featured: true,
  },
];

async function seed() {
  console.log("Iniciando el proceso de seeding...");

  try {
    console.log("Borrando colecciones existentes...");
    await storage.deleteCollections();
    console.log("Colecciones existentes borradas.");

    console.log("Insertando nuevas colecciones...");
    for (const collection of collectionsData) {
      await storage.createCollection(collection as InsertCollection);
      console.log(`- Colección creada: ${collection.title}`);
    }
    console.log("Nuevas colecciones insertadas.");

    console.log("¡Seeding de la base de datos completado!");
  } catch (error) {
    console.error("Error durante el seeding de la base de datos:", error);
    process.exit(1);
  }
}

seed().then(() => {
  process.exit(0);
});
