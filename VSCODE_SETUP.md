# Configuración VSCode - Alberto Rodríguez Couture

## 🎯 Guía Rápida de Instalación

### 1. Clonar y Configurar

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/alberto-rodriguez-couture.git
cd alberto-rodriguez-couture

# Configuración automática
node dev-local.js --vscode
```

### 2. Abrir en VSCode

```bash
# Opción 1: Desde terminal
code .

# Opción 2: VSCode > File > Open Folder
# Seleccionar carpeta alberto-rodriguez-couture
```

## 🔧 Configuración Automática

El proyecto incluye configuración completa para VSCode:

### Extensiones (Instalación Automática)
- **Tailwind CSS IntelliSense**: Autocompletado para clases CSS
- **Prettier**: Formateo automático de código  
- **TypeScript Hero**: Gestión de imports
- **Auto Rename Tag**: Sincronización de tags HTML
- **Path Intellisense**: Autocompletado de rutas de archivos
- **TODO Tree**: Gestión visual de tareas pendientes
- **Code Spell Checker**: Corrector ortográfico

### Configuración del Editor
- **Formateo automático** al guardar
- **Auto imports** de TypeScript
- **IntelliSense mejorado** para Tailwind CSS
- **Validación CSS** deshabilitada (usa Tailwind)
- **Emmet** habilitado para TSX

## 🚀 Comandos de Desarrollo

### Atajos de Teclado en VSCode

| Atajo | Acción |
|-------|--------|
| `Ctrl+Shift+P` | Command Palette |
| `F5` | Iniciar Debug |
| `Ctrl+`` | Terminal integrado |
| `Ctrl+Shift+E` | Explorador de archivos |
| `Ctrl+Shift+G` | Control de versiones Git |
| `Ctrl+Shift+X` | Extensiones |

### Tareas Configuradas

Accede con `Ctrl+Shift+P` > "Tasks: Run Task":

- **Install Dependencies**: Instala npm packages
- **Start Development Server**: Inicia `npm run dev`
- **Build Production**: Ejecuta build completo  
- **TypeScript Check**: Verificación de tipos
- **Database Push**: Sincroniza esquema DB

## 🐛 Debug Configuration

### Debug Frontend (React)
1. Ejecutar `npm run dev`
2. Presionar `F5` en VSCode
3. Seleccionar "Launch Chrome Debug"
4. Colocar breakpoints en archivos `.tsx`

### Debug Backend (Express)
1. Seleccionar "Debug Server" en Run and Debug
2. Colocar breakpoints en archivos `.ts` del servidor
3. Iniciar con `F5`

### Debug con Inspector
```bash
# Terminal integrado
npm run dev:debug
# Luego F5 > "Attach to Node Server"
```

## 📁 Estructura Optimizada para VSCode

```
.vscode/
├── settings.json      # Configuración del workspace
├── extensions.json    # Extensiones recomendadas
├── launch.json       # Configuración de debug
├── tasks.json        # Tareas automatizadas
└── snippets.json     # Code snippets personalizados
```

## 🎨 Code Snippets Personalizados

### React Component con Framer Motion
```typescript
// Escribir: rmc + Tab
// Genera componente React con animaciones
```

### Página de Lujo
```typescript
// Escribir: luxpage + Tab  
// Genera página con hero section luxury
```

### Collection Card
```typescript
// Escribir: collectioncard + Tab
// Genera card de colección completa
```

## ⚡ Flujo de Trabajo Recomendado

### 1. Desarrollo Inicial
```bash
# Terminal VSCode (Ctrl+`)
npm run dev

# Nueva terminal para comandos
Ctrl+Shift+`
```

### 2. Estructura de Ventanas
- **Panel izquierdo**: Explorer + Git
- **Panel central**: Editor de código
- **Panel inferior**: Terminal integrado
- **Panel derecho**: Debug Console (cuando sea necesario)

### 3. Desarrollo de Componentes
1. Crear archivo en `client/src/components/`
2. Usar snippet `rmc` para template
3. Desarrollar con hot reload activo
4. Test en navegador en tiempo real

### 4. Desarrollo de Páginas
1. Crear archivo en `client/src/pages/`
2. Usar snippet `luxpage` para template
3. Registrar ruta en `client/src/App.tsx`
4. Verificar routing funciona

## 🔍 IntelliSense y Autocompletado

### Tailwind CSS
- **Autocompletado completo** de clases
- **Hover info** con valores CSS
- **Color previews** en editor
- **Regex patterns** para clases dinámicas

### TypeScript
- **Auto imports** de componentes
- **Error detection** en tiempo real
- **Refactoring tools** automáticos
- **Go to definition** con `F12`

### Path IntelliSense
```typescript
// Autocompletado para aliases
import Component from '@/components/...'  // client/src/components/
import { schema } from '@shared/...'      // shared/
```

## 📊 Monitoreo y Performance

### Terminal Integrado
```bash
# Análisis de bundle
npm run build:analyze

# Verificación TypeScript continua
npm run check:watch

# Database studio (si usas Drizzle)
npm run db:studio
```

### Extensiones de Monitoreo Recomendadas
- **Import Cost**: Muestra tamaño de imports
- **Bundle Analyzer**: Análisis visual de bundles
- **GitLens**: Historia avanzada de Git
- **Thunder Client**: Cliente REST integrado

## 🎛️ Configuraciones Avanzadas

### settings.json Personalizado
```json
{
  "editor.fontSize": 14,
  "editor.fontFamily": "'Fira Code', 'Cascadia Code', monospace",
  "editor.fontLigatures": true,
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme"
}
```

### Workspace Específico
El proyecto incluye configuración optimizada para:
- **Performance**: Fast file watching
- **Memory**: Optimized TypeScript service  
- **Debugging**: Source maps configurados
- **Linting**: ESLint integration ready

## 🔧 Troubleshooting VSCode

### Problemas Comunes

1. **Extensions no se instalan**:
   ```bash
   # Reinstalar VSCode extensions
   code --install-extension bradlc.vscode-tailwindcss
   ```

2. **TypeScript lento**:
   ```json
   // settings.json
   "typescript.preferences.maxTsServerMemory": 4096
   ```

3. **IntelliSense no funciona**:
   - `Ctrl+Shift+P` > "TypeScript: Restart TS Server"
   - Verificar que `tsconfig.json` esté correcto

4. **Debug no conecta**:
   - Verificar puerto 5000 disponible
   - Reiniciar terminal integrado
   - Verificar `.vscode/launch.json`

### Reset Completo VSCode
```bash
# Cerrar VSCode
# Eliminar configuración workspace
rm -rf .vscode/
git checkout .vscode/

# Reabrir VSCode
code .
```

## ✅ Checklist de Configuración VSCode

- [ ] VSCode instalado y actualizado
- [ ] Extensiones recomendadas instaladas
- [ ] Terminal integrado funciona
- [ ] `npm run dev` inicia correctamente
- [ ] Debug configuration probada
- [ ] IntelliSense Tailwind activo
- [ ] TypeScript sin errores
- [ ] Git integration funciona
- [ ] Hot reload operativo
- [ ] Snippets personalizados disponibles

¡VSCode configurado perfectamente para Alberto Rodríguez Couture!