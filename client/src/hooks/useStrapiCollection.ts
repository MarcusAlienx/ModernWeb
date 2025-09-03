import { useQuery } from '@tanstack/react-query';

// Interfaz para una imagen dentro de la respuesta de Strapi
export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: { url: string; };
      small: { url: string; };
      medium: { url: string; };
      large: { url: string; };
    };
    url: string;
  };
}

// Interfaz para una colección individual de Strapi
export interface StrapiCollection {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    season: string;
    // La relación de imágenes en Strapi
    images: {
      data: StrapiImage[];
    };
  };
}

// La URL base de tu API de Strapi (se puede configurar en .env)
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';

// Función que busca la colección en Strapi por su slug
const fetchStrapiCollection = async (slug: string): Promise<StrapiCollection | null> => {
  if (!slug) return null;

  // Construimos la URL para filtrar por slug y popular la galería de imágenes
  const res = await fetch(`${STRAPI_API_URL}/api/collections?filters[slug][$eq]=${slug}&populate=images`);
  
  if (!res.ok) {
    throw new Error('La respuesta de la red de Strapi no fue correcta');
  }
  
  const json = await res.json();
  
  // La API de Strapi devuelve un array, incluso para un solo resultado. Tomamos el primero.
  return json.data?.[0] ?? null;
};

// Hook personalizado que envuelve la lógica de fetching
export function useStrapiCollection(slug: string) {
  return useQuery<StrapiCollection | null, Error>({
    queryKey: ['strapi-collection', slug],
    queryFn: () => fetchStrapiCollection(slug),
    // La consulta no se ejecutará hasta que el 'slug' esté disponible
    enabled: !!slug, 
  });
}
