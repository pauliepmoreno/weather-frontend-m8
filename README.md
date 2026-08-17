# 🌍 City Climate

Aplicación de clima con sistema de autenticación, construida como SPA con Vue.js.

## 🔗 Repositorio
https://github.com/pauliepmoreno/weather-frontend-m7

## 🚀 Cómo ejecutar
```bash
npm install
npm run dev
```
Abrir en el navegador: `http://localhost:5173`

## Vistas principales
- **Home** (`/`) → listado de ciudades con clima actual, búsqueda y cambio de unidad °C/°F
- **Detalle** (`/lugar/:id`) → información ampliada, pronóstico semanal y estadísticas
- **Login** (`/login`) → formulario de inicio de sesión
- **Favoritos** (`/favoritos`) → ruta protegida, solo para usuarios logueados

## Sistema de usuarios
Los usuarios están definidos en `src/data/usuarios.js`. Cada usuario tiene `nombre`, `email` y `password`. El estado de autenticación se guarda en Vuex.

## Rutas Vue Router
- `/` → Home
- `/lugar/:id` → Detalle
- `/login` → Login
- `/favoritos` → Favoritos (protegida)

## Tecnologías
- Vue 3 + Vite
- Vue Router
- Vuex
- Bootstrap 5
- JavaScript ES6+

## Autora
Paulina Poblete