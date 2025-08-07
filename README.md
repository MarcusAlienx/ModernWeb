# Alberto Rodríguez Couture - Website

Sitio web de alta costura para Alberto Rodríguez Couture, replicando la elegancia y sofisticación de las marcas de lujo más prestigiosas del mundo. Este proyecto presenta una experiencia digital premium que refleja más de 35 años de excelencia en el diseño de alta costura.

## 🎨 Características

- **Diseño Luxury Premium**: Inspirado en Louis Vuitton y Zuhair Murad
- **Video Hero Principal**: Experiencia inmersiva con video de fondo
- **Menú Hamburguesa Animado**: Efectos suaves y transiciones elegantes
- **Responsive Design**: Optimizado para todos los dispositivos
- **Animaciones Framer Motion**: Interacciones fluidas y profesionales
- **Paleta de Colores Luxury**: Oro (#D4AF37) como acento principal
- **Tipografía Sofisticada**: Playfair Display + Inter

## 🚀 Tecnologías

### Frontend
- **React 18** con TypeScript
- **Vite** para desarrollo y build optimizado
- **Tailwind CSS** con configuración personalizada luxury
- **Framer Motion** para animaciones profesionales
- **Wouter** para routing ligero
- **TanStack Query** para manejo de estado
- **shadcn/ui** componentes accesibles

### Backend
- **Express.js** con TypeScript
- **Drizzle ORM** para base de datos
- **PostgreSQL** (Neon Database)
- **Zod** para validación de datos

## 📦 Instalación Local

### Prerrequisitos
- Node.js 18+ 
- npm 9+
- Cuenta en Neon Database (para PostgreSQL)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd alberto-rodriguez-couture
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Editar el archivo `.env` con tus configuraciones:
```env
DATABASE_URL="your_neon_database_url"
NODE_ENV="development"
PORT=5000
VITE_API_URL="http://localhost:5000"
```

4. **Configurar la base de datos**
```bash
# Generar la base de datos
npm run db:generate

# Hacer push del schema
npm run db:push
```

5. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5000`

## 🌐 Despliegue en Netlify

### Método 1: Netlify CLI (Recomendado)

1. **Instalar Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login en Netlify**
```bash
netlify login
```

3. **Inicializar el sitio**
```bash
netlify init
```

4. **Configurar variables de entorno en Netlify**
```bash
# Configurar DATABASE_URL
netlify env:set DATABASE_URL "your_production_database_url"

# Configurar otras variables necesarias
netlify env:set NODE_ENV "production"
netlify env:set VITE_API_URL "https://your-site-name.netlify.app"
```

5. **Build y deploy**
```bash
# Build local para testing
npm run build

# Deploy a preview
netlify deploy

# Deploy a producción
netlify deploy --prod
```

### Método 2: Git Integration

1. **Conectar repositorio a Netlify**
   - Ve a [Netlify Dashboard](https://app.netlify.com)
   - Click "New site from Git"
   - Conecta tu repositorio

2. **Configurar build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`
   - **Node version**: `18`

3. **Configurar variables de entorno**
   En Netlify Dashboard → Site settings → Environment variables:
   ```
   DATABASE_URL=your_production_database_url
   NODE_ENV=production
   VITE_API_URL=https://your-site-name.netlify.app
   ```

4. **Deploy automático**
   - Cada push a main ejecutará deploy automático

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo
npm run build           # Build para producción
npm run preview         # Preview del build

# Base de datos
npm run db:generate     # Genera migraciones
npm run db:push         # Aplica cambios al schema
npm run db:studio      # Abre Drizzle Studio

# Utilidades
npm run type-check     # Verificación de tipos TypeScript
npm run lint           # Linting con ESLint
```

## 📂 Estructura del Proyecto

```
alberto-rodriguez-couture/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilidades y configuración
│   │   └── index.css      # Estilos globales
│   ├── index.html
│   └── dist/              # Build output
├── server/                # Backend Express
│   ├── index.ts          # Servidor principal
│   ├── routes.ts         # Rutas API
│   └── storage.ts        # Capa de persistencia
├── shared/               # Tipos compartidos
│   └── schema.ts         # Schemas Drizzle + Zod
├── netlify.toml          # Configuración Netlify
├── .env.example          # Plantilla variables entorno
└── README.md
```

## 🎭 Componentes Principales

### VideoHero
Componente hero principal con video de fondo, controles personalizados y overlays elegantes.

### Header
Navegación responsive con menú hamburguesa animado, efectos de scroll y transiciones suaves.

### CollectionCard
Tarjetas de colección con hover effects y layouts adaptativos.

### ServiceCard
Componentes de servicios con iconografía luxury y micro-interacciones.

## 🎨 Sistema de Diseño

### Colores
```css
--luxury-gold: #D4AF37
--luxury-black: #1a1a1a
--luxury-light: #f8f8f8
--luxury-gray: #6b7280
```

### Tipografía
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Tracking**: Custom luxury letter-spacing

### Animaciones
- Entrada progresiva de elementos
- Hover effects sutiles
- Transiciones suaves entre páginas
- Micro-interacciones en botones

## 🌟 Características Premium

- **SEO Optimizado**: Meta tags y structured data
- **Performance**: Lazy loading y code splitting
- **Accessibility**: WCAG 2.1 AA compliance
- **PWA Ready**: Service worker y manifest
- **Analytics Ready**: Google Analytics integration
- **Form Handling**: Validación avanzada con Zod

## 🔒 Seguridad

- Headers de seguridad configurados
- Validación de datos en frontend y backend
- Sanitización de inputs
- HTTPS enforced en producción

## 📱 Compatibilidad

- **Navegadores**: Chrome 90+, Firefox 88+, Safari 14+
- **Dispositivos**: Desktop, Tablet, Mobile
- **Responsive**: 320px - 2560px+ breakpoints

## 🤝 Contribución

1. Fork el repositorio
2. Crear branch feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📞 Soporte

**Alberto Rodríguez Couture**
- **Dirección**: Av. Vallarta #1300, Guadalajara, Jalisco
- **Teléfono**: (33) 3826 2041
- **Email**: contacto@albertorodriguez-couture.com

## 📄 Licencia

© 2025 Alberto Rodríguez Couture. Todos los derechos reservados.

---

Desarrollado con 💛 para una experiencia digital luxury excepcional.