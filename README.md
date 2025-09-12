# React + TypeScript + Vite
# Web Posts – Frontend

Frontend en **React + Vite + TypeScript + TailwindCSS** que consume el backend de “API Posts”.  
Muestra el listado de posts y el resumen de conteo por usuario.

- Backend esperado:
  - `GET /api/posts`
  - `GET /api/posts/summary`

---

## Stack

- **React 18**
- **Vite** (dev server & build)
- **TypeScript**
- **TailwindCSS** (con `@tailwindcss/vite`)
- (Opcional) Headless UI / Heroicons si los usaste para el navbar
- **Docker** (multi-stage) + **Nginx** para servir estáticos en producción

---

## Variables de entorno

> **Vite solo expone a la app** variables que comiencen con `VITE_`.

Crea un archivo `.env` (o usa `.env.development`) con:

```env
# URL base del backend (termina en /api)
VITE_API_BASE_URL=http://localhost:3000/api
```

## Levantar en desarrollo (sin docker)
1) Instalar dependencias
npm ci

2) Copiar .env de ejemplo y ajustar valores

3) Levantar en dev npm run dev

## Ejecutar con docker

Asegúrate de tener **Docker** y **Docker Compose** instalados.  
El proyecto incluye un `Dockerfile` multi-stage y un `docker-compose.yml`.

> **Nota:** El archivo `.env` **no se copia** dentro de la imagen. Se inyecta en tiempo de ejecución con `--env-file` o `env_file`.

---

1) docker compose build --no-cache
2) docker compose up -d

---
