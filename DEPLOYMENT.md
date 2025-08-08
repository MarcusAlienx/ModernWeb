# Guía de Despliegue - Alberto Rodríguez Couture

## 🚀 Despliegue en Netlify

### Paso a Paso

1. **Preparar Repositorio GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Alberto Rodríguez Couture website"
git branch -M main
git remote add origin https://github.com/tu-usuario/alberto-rodriguez-couture.git
git push -u origin main
```

2. **Conectar con Netlify**
- Ve a [netlify.com](https://netlify.com)
- Haz clic en "New site from Git"
- Conecta tu repositorio de GitHub
- Selecciona el repositorio `alberto-rodriguez-couture`

3. **Configuración de Build**
```
Build command: npm run build
Publish directory: dist
Node version: 18
```

4. **Variables de Entorno**
En el panel de Netlify, ve a Site Settings > Environment Variables:
```
DATABASE_URL=tu_url_de_neon_database
NODE_ENV=production
```

5. **Deploy Site**
- Haz clic en "Deploy site"
- El primer despliegue tomará 3-5 minutos

### Verificación Post-Despliegue

✅ **Navegación**: Todas las rutas funcionan correctamente
✅ **Responsive**: Se ve bien en móvil y desktop
✅ **Performance**: Lighthouse score > 90
✅ **SEO**: Meta tags y Open Graph correctos
✅ **Enlaces**: Todos los enlaces internos funcionan

## 🔧 Configuración de Base de Datos

### Neon Database (Recomendado)

1. **Crear Cuenta en Neon**
- Ve a [neon.tech](https://neon.tech)
- Crea una cuenta gratuita
- Crea un nuevo proyecto "alberto-rodriguez-couture"

2. **Obtener Connection String**
```
postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb
```

3. **Configurar en Netlify**
- Añade `DATABASE_URL` en las variables de entorno
- Redespliega el sitio

### Alternativas de Base de Datos

- **Supabase**: Interfaz más amigable, incluye auth
- **PlanetScale**: MySQL serverless, buena para escalabilidad
- **Railway**: Simple setup, incluye PostgreSQL

## 📊 Monitoreo y Analytics

### Google Analytics 4

1. **Configurar GA4**
```typescript
// client/src/lib/analytics.ts
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
```

2. **Agregar Script en index.html**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Hotjar (UX Analytics)

1. **Configurar Hotjar**
```javascript
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
```

## 🔐 Configuración de Dominio

### Dominio Personalizado

1. **Comprar Dominio**
- Recomendado: `albertorodriguezc.com`
- Alternativas: `albertorodriguezcouture.com`, `arcouture.mx`

2. **Configurar DNS en Netlify**
```
CNAME record: www -> your-site.netlify.app
A record: @ -> 75.2.60.5
```

3. **SSL Automático**
- Netlify configura HTTPS automáticamente
- Let's Encrypt certificate renovación automática

### Configuración Avanzada

```toml
# netlify.toml - Configuración adicional
[[redirects]]
  from = "https://albertorodriguezcouture.netlify.app/*"
  to = "https://albertorodriguezc.com/:splat"
  status = 301
  force = true

[[headers]]
  for = "/*.html"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

## 📈 Optimización de Performance

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Mejoras Implementadas

1. **Image Optimization**
```typescript
// Lazy loading automático
<img 
  loading="lazy" 
  src={image} 
  alt={alt}
  className="object-cover"
/>
```

2. **Code Splitting**
```typescript
// Páginas lazy-loaded
const About = lazy(() => import('./pages/About'))
const Collections = lazy(() => import('./pages/Collections'))
```

3. **Asset Optimization**
- Vite comprime automáticamente CSS/JS
- Tree shaking elimina código no usado
- Bundle analysis con `npm run build:analyze`

## 🧪 Testing en Producción

### Checklist de QA

- [ ] **Navegación**: Todos los enlaces funcionan
- [ ] **Responsive**: Mobile, tablet, desktop
- [ ] **Performance**: Lighthouse score > 90
- [ ] **SEO**: Meta descriptions, titles únicos
- [ ] **Formularios**: Validación y envío correcto
- [ ] **Imágenes**: Cargan correctamente, alt text
- [ ] **Analytics**: Tracking events funcionan

### Herramientas de Testing

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --upload.target=filesystem

# Visual regression testing
npm install -D percy
percy exec -- npm run build

# Accessibility testing
npm install -D @axe-core/cli
axe https://albertorodriguezc.com
```

## 🚨 Troubleshooting

### Problemas Comunes

1. **Build Fails**
```bash
# Verificar versión de Node
node --version  # Debe ser 18+

# Limpiar cache
rm -rf node_modules
rm package-lock.json
npm install
```

2. **Routing 404**
- Verificar que `_redirects` esté en `public/`
- Confirmar `netlify.toml` configuration

3. **Environment Variables**
- Variables deben tener prefijo `VITE_` para frontend
- Verificar en Netlify dashboard

4. **Database Connection**
```bash
# Test connection local
npm run db:push
npm run db:studio
```

### Logs y Debugging

```bash
# Ver logs de Netlify
netlify dev
netlify logs

# Monitor performance
npm run build:analyze
npm run lighthouse
```

## 📞 Soporte

### Recursos de Ayuda

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Neon Docs**: [neon.tech/docs](https://neon.tech/docs)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)

### Contacto Técnico

Para soporte específico del proyecto:
- Revisar issues en GitHub
- Documentación en `README.md`
- Logs en Netlify dashboard