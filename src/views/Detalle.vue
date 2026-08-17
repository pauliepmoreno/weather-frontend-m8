<template>
  <div class="container my-5">
    <div v-if="ciudad">
      <div class="card mb-4">
        <div class="card-body">
          <h2>{{ ciudad.nombre }} {{ ciudad.emoji }}</h2>
          <p>🌡️ Temperatura: {{ ciudad.tempActual }}°C</p>
          <p>💧 Humedad: {{ ciudad.humedad }}%</p>
          <p>💨 Viento: {{ ciudad.viento }} km/h</p>
          <p>{{ ciudad.estadoActual }}</p>
        </div>
      </div>

      <h3 class="mt-4">📅 Pronóstico semanal</h3>
      <div class="row g-3">
        <div v-for="dia in ciudad.pronostico" :key="dia.dia" class="col-12 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h5>{{ dia.dia }}</h5>
              <p>{{ dia.emoji }}</p>
              <p>{{ dia.min }}°C - {{ dia.max }}°C</p>
            </div>
          </div>
        </div>
      </div>

      <h3 class="mt-4">📊 Estadísticas de la semana</h3>
      <div class="card mt-2">
        <div class="card-body">
          <p>🌡️ Mínima: {{ stats.tempMin }}°C</p>
          <p>🌡️ Máxima: {{ stats.tempMax }}°C</p>
          <p>🌡️ Promedio: {{ stats.promedio }}°C</p>
          <p>{{ stats.resumen }}</p>
        </div>
      </div>

      <router-link to="/" class="btn btn-primary mt-3">← Volver</router-link>
    </div>
    <div v-else>
      <p>No se encontró el lugar</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id

import ciudades from '../data/ciudades.js'
const ciudad = ciudades.find(c => c.id === Number(id))

import calcularEstadisticas from '../utils/estadisticas.js'
const stats = calcularEstadisticas(ciudad.pronostico)
</script>
