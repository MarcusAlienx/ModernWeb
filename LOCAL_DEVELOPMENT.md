# Desarrollo Local - Alberto Rodríguez Couture

## 🛠️ Configuración para VSCode

### Requisitos Previos

1. **Node.js 18+**
   ```bash
   # Verificar versión
   node --version
   npm --version
   ```

2. **Git**
   ```bash
   git --version
   ```

3. **VSCode**
   - Descargar desde [code.visualstudio.com](https://code.visualstudio.com/)

### Instalación del Proyecto

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/alberto-rodriguez-couture.git
cd alberto-rodriguez-couture

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

### Variables de Entorno Locales

Crear archivo `.env` en la raíz:

```bash
# Base de datos (opcional para desarrollo)
DATABASE_URL="postgresql://user:password@localhost:5432/alberto_couture"

# Configuración de desarrollo
NODE_ENV=development
PORT=5000

# URLs para desarrollo
VITE_API_URL=http://localhost:5000
VITE_SITE_URL=http://localhost:5000
```

## 🚀 Scripts de Desarrollo

### Comandos Principales

```bash
# Desarrollo completo (frontend + backend)
npm run dev

# Solo build de producción
npm run build

# Verificación de tipos TypeScript
npm run check

# Base de datos (si usas PostgreSQL)
npm run db:push
```

### Estructura de Scripts

- **`npm run dev`**: Inicia servidor Express + Vite dev server
- **`npm run build`**: Build optimizado para producción
- **`npm run start`**: Servidor de producción
- **`npm run check`**: Verificación TypeScript sin compilar

## 🔧 Configuración VSCode

### Extensiones Recomendadas

VSCode instalará automáticamente estas extensiones:

- **Tailwind CSS IntelliSense**: Autocompletado CSS
- **Prettier**: Formateo automático
- **TypeScript Hero**: Imports automáticos
- **Auto Rename Tag**: Sincroniza tags HTML
- **Path Intellisense**: Autocompletado de rutas
- **TODO Tree**: Gestión de tareas
- **Code Spell Checker**: Corrector ortográfico

### Configuración Automática

El proyecto incluye configuración VSCode:

- **`.vscode/settings.json`**: Configuración del editor
- **`.vscode/extensions.json`**: Extensiones recomendadas
- **`.vscode/launch.json`**: Debug configuration
- **`.vscode/tasks.json`**: Tareas automatizadas

## 🐛 Debug y Testing

### Debug en VSCode

1. **Debug Frontend**:
   - Presiona `F5` o ve a "Run and Debug"
   - Selecciona "Launch Chrome Debug"
   - Coloca breakpoints en archivos `.tsx`

2. **Debug Backend**:
   - Selecciona "Debug Server"
   - Coloca breakpoints en archivos `.ts` del servidor

### Comandos de Debug

```bash
# Servidor con debug
node --inspect server/index.ts

# Frontend con source maps
npm run dev -- --debug
```

## 📁 Estructura del Proyecto

```
alberto-rodriguez-couture/
├── .vscode/                    # Configuración VSCode
│   ├── settings.json          # Configuración del editor
│   ├── extensions.json        # Extensiones recomendadas
│   ├── launch.json           # Debug configuration
│   └── tasks.json            # Tareas automatizadas
├── client/                    # Frontend React + Vite
│   ├── src/
│   │   ├── components/       # Componentes reutilizables
│   │   ├── pages/           # Páginas principales
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilidades y configuración
│   │   └── App.tsx          # Componente principal
│   ├── public/              # Assets estáticos
│   └── index.html           # Template HTML
├── server/                   # Backend Express
│   ├── index.ts            # Servidor principal
│   ├── routes.ts           # API endpoints
│   ├── storage.ts          # Interfaz de datos
│   └── vite.ts             # Configuración Vite
├── shared/                  # Tipos compartidos
│   └── schema.ts           # Esquemas Drizzle + Zod
├── dist/                   # Build de producción
├── .env                    # Variables de entorno
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración TypeScript
├── vite.config.ts         # Configuración Vite
├── tailwind.config.ts     # Configuración Tailwind
└── netlify.toml           # Configuración Netlify
```

## ⚡ Flujo de Desarrollo

### 1. Iniciar Desarrollo

```bash
# Terminal integrado de VSCode (Ctrl+`)
npm run dev

# El servidor estará disponible en:
# Frontend: http://localhost:5000
# Backend API: http://localhost:5000/api
```

### 2. Desarrollo Frontend

- **Componentes**: `client/src/components/`
- **Páginas**: `client/src/pages/`
- **Estilos**: Tailwind CSS + CSS custom properties
- **Rutas**: Wouter para SPA routing

### 3. Desarrollo Backend

- **API Routes**: `server/routes.ts`
- **Base de datos**: `server/storage.ts`
- **Middleware**: Express.js
- **Tipos**: Compartidos en `shared/schema.ts`

### 4. Hot Reload

Ambos frontend y backend tienen hot reload:
- **Frontend**: Cambios instantáneos con Vite HMR
- **Backend**: Reinicio automático con tsx/watch

## 📊 Performance y Optimización

### Monitoreo Local

```bash
# Análisis de bundle
npm run build
# Revisa el tamaño en dist/

# Lighthouse local
# Instalar: npm install -g lighthouse
lighthouse http://localhost:5000
```

### Optimizaciones Aplicadas

- **Code Splitting**: Automático con Vite
- **Tree Shaking**: Eliminación de código no usado
- **CSS Purging**: Solo CSS utilizado
- **Image Optimization**: Lazy loading + dimensiones optimizadas
- **Bundle Analysis**: Archivos minificados y comprimidos

## 🔗 Integración con Herramientas

### Git Workflow

```bash
# Feature branch
git checkout -b feature/nueva-funcionalidad
git add .
git commit -m "feat: nueva funcionalidad"
git push origin feature/nueva-funcionalidad

# Merge a main
git checkout main
git merge feature/nueva-funcionalidad
git push origin main
```

### Database Local (Opcional)

Si quieres usar PostgreSQL local:

```bash
# Docker (recomendado)
docker run --name postgres-couture \
  -e POSTGRES_DB=alberto_couture \
  -e POSTGRES_USER=couture \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -d postgres:15

# Conectar
DATABASE_URL="postgresql://couture:password@localhost:5432/alberto_couture"
```

## 🚀 Deployment desde Local

### Build Local

```bash
# Build completo
npm run build

# Verificar build
cd dist
python -m http.server 8000
# Visita http://localhost:8000
```

### Deploy a Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login y deploy
netlify login
netlify deploy --prod --dir=dist
```

## 🆘 Troubleshooting

### Problemas Comunes

1. **Puerto ocupado**:
   ```bash
   # Cambiar puerto en package.json
   # O matar proceso
   lsof -ti:5000 | xargs kill -9
   ```

2. **Errores de TypeScript**:
   ```bash
   npm run check
   # Revisar errores en terminal
   ```

3. **Dependencias**:
   ```bash
   # Limpiar node_modules
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Cache de Vite**:
   ```bash
   # Limpiar cache
   rm -rf .vite
   npm run dev
   ```

### Logs y Debug

```bash
# Logs detallados
DEBUG=* npm run dev

# Solo logs de servidor
DEBUG=express:* npm run dev

# Logs de base de datos
DEBUG=drizzle:* npm run dev
```

---

## ✅ Checklist de Configuración

- [ ] Node.js 18+ instalado
- [ ] VSCode con extensiones recomendadas
- [ ] Repositorio clonado
- [ ] `npm install` ejecutado exitosamente
- [ ] `.env` configurado
- [ ] `npm run dev` funciona
- [ ] http://localhost:5000 accesible
- [ ] Hot reload funcionando
- [ ] Debug configuration probada

¡Listo para desarrollar Alberto Rodríguez Couture localmente!