# 🌍 City Climate

App de clima construida como SPA con Vue.js que muestra el estado del tiempo en ciudades icónicas del mundo.

## 🔗 Repositorio
https://github.com/pauliepmoreno/weather-frontend-m8

## 🚀 Cómo ejecutar
```bash
npm install
npm run dev
```
Abrir en el navegador: `http://localhost:5173`

## Rutas principales
- `/` → Home — listado de ciudades con búsqueda y cambio de unidad °C/°F
- `/lugar/:id` → Detalle — pronóstico semanal, estadísticas y alertas de clima
- `/login` → Login — formulario de inicio de sesión
- `/favoritos` → Favoritos — ruta protegida, requiere sesión iniciada

## Funcionalidades clave
- **API usada:** Open-Meteo (sin API key, gratuita)
- **Estadísticas:** mínima, máxima, promedio y conteo de días por tipo de clima
- **Alertas:** alerta de calor (promedio > 32°C) y alerta de frío (promedio < 5°C)
- **Preferencias:** unidad de temperatura °C/°F guardada en Vuex
- **Autenticación:** login con usuarios fake, estado guardado en Vuex

## Manejo de estado (Vuex)
- `lugares` → lista de ciudades
- `lugarSeleccionado` → ciudad clickeada
- `cargando` → estado de carga
- `error` → mensajes de error
- `usuario` + `isAuthenticated` → autenticación
- `unidad` → preferencia de temperatura

## Tecnologías
- Vue 3 + Vite
- Vue Router
- Vuex
- Bootstrap 5
- JavaScript ES6+
- Open-Meteo API

## Autora
Paulina Poblete