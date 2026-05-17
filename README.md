# Show Services — Sitio web

Sitio estático construido con **Astro** + **Decap CMS**, desplegado gratis en **Netlify**.
Willy edita todo desde `/admin` sin tocar código.

---

## 🚀 Deploy en 15 minutos (la primera vez)

### 1. Subir el código a GitHub

```bash
cd show-services
git init
git add .
git commit -m "Initial commit"
git branch -M main
# Crea un repo en github.com llamado "show-services", luego:
git remote add origin https://github.com/Alvaro-SP/show-services.git
git push -u origin main
```

### 2. Conectar a Netlify

1. Andá a [app.netlify.com](https://app.netlify.com) (login con GitHub)
2. **Add new site → Import an existing project → GitHub → show-services**
3. Build settings (ya los toma del `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy site** — en ~1 min queda live en `https://nombre-random.netlify.app`
5. **Site settings → Change site name** → ponele `show-services` para que quede `show-services.netlify.app`

### 3. Activar el panel de administración (Decap CMS)

Esto es lo que permite a Willy entrar a `/admin` y editar sin GitHub:

1. **Site settings → Identity → Enable Identity**
2. **Registration preferences → Invite only** (importante, si no cualquiera se registra)
3. **External providers → Google** (opcional, para login con Gmail en vez de password)
4. **Services → Git Gateway → Enable Git Gateway**
5. **Identity → Invite users** → invitá el correo de Willy (y el tuyo)

Willy va a recibir un mail, hace click, crea password, y de ahí en adelante entra a `https://show-services.netlify.app/admin/`.

### 4. Probar el flujo

1. Entrá a `/admin/` con tu mail
2. Tocá "⚙️ Información general" y cambiá el WhatsApp por el real de Willy
3. Guardá — Decap commitea a GitHub, Netlify rebuildea solo, en ~1 min el cambio está live

---

## 💻 Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

Estructura:
```
src/
  content/         ← datos editables (los toca Willy desde /admin)
    site/general.json
    servicios/*.json
    eventos/*.json
    testimonios/*.json
    faq/*.json
  pages/index.astro    ← la página
  layouts/Layout.astro ← head, fuentes, estilos globales
public/
  admin/           ← Decap CMS (NO TOCAR el index.html ni el config.yml sin saber)
  favicon.svg
  uploads/         ← imágenes subidas desde el panel (Willy las sube, GitHub las guarda)
```

---

## 🎨 Personalización rápida

- **Colores**: `src/layouts/Layout.astro`, en `:root` (líneas con `--rojo`, `--amarillo`, etc.)
- **Tipografía**: misma sección, variables `--display` y `--body`
- **Estructura de secciones**: `src/pages/index.astro`

---

## 🌐 Dominio propio (opcional, ~Q90/año)

1. Comprá un dominio en Namecheap o Cloudflare (`show-services.com` o `.gt`)
2. En Netlify: **Domain settings → Add custom domain**
3. Netlify te da los nameservers — los configurás en el registrador
4. SSL automático en ~10 min

---

## 🆘 Si algo se rompe

- **El admin no carga**: verificá que Identity y Git Gateway estén activados
- **Login falla**: revisá la invitación al correo, puede estar en spam
- **Build falla**: revisá los logs en Netlify, casi siempre es un JSON mal formateado
- **Cambios no aparecen**: hay caché de CDN, esperá 1-2 min o forzá refresh

---

Hecho con ☕ y mucho amor para Willy.
