import { useQuery } from '@tanstack/react-query';
// Importamos el tipo 'Collection' directamente desde nuestro esquema compartido de Drizzle
import type { Collection } from '@shared/schema';

// Función para obtener los datos desde la API del servidor local (Express)
const fetchCollections = async (): Promise<Collection[]> => {
  const res = await fetch('/api/collections');

  if (!res.ok) {
    throw new Error('La respuesta de la red no fue correcta');
  }

  // La API local devuelve el array de colecciones directamente
  return res.json();
};

// Hook personalizado para usar en los componentes de React
export function useCollections() {
  return useQuery<Collection[], Error>({
    // La queryKey identifica unívocamente esta consulta. La cambio para evitar conflictos.
    queryKey: ['db-collections'],
    queryFn: fetchCollections,
  });
}

// Re-exportamos el tipo para que los componentes puedan importarlo desde el hook
export type { Collection };
