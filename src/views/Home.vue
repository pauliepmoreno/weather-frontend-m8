<template>
  <div class="container my-5">
    <div class="mb-3">
      <label>Unidad de temperatura:</label>
      <select v-model="unidad" class="form-select w-auto d-inline-block ms-2">
        <option value="C">°C</option>
        <option value="F">°F</option>
      </select>
    </div>

    <input v-model="busqueda" placeholder="Buscar ciudad..." class="form-control mb-3" />

    <p v-if="store.state.cargando">⏳ Cargando ciudades...</p>

    <div class="row g-4">
      <div v-for="ciudad in lugaresFiltrados" :key="ciudad.id" class="col-12 col-lg-3">
        <div class="card place-card">
          <div class="card-body">
            <h5>{{ ciudad.nombre }}</h5>
            <p>{{ ciudad.emoji }}</p>
            <p>{{ unidad === 'C' ? ciudad.tempActual : Math.round((ciudad.tempActual * 9 / 5) + 32) }}°{{ unidad }}</p>
            <p>{{ ciudad.estadoActual }}</p>
            <router-link :to="`/lugar/${ciudad.id}`" class="btn btn-primary">
              Ver detalle
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ciudades from '../data/ciudades.js'

const store = useStore()
const unidad = ref('C')
const busqueda = ref('')

onMounted(() => {
  store.commit('setCargando', true)
  store.commit('setLugares', ciudades)
  store.commit('setCargando', false)
})

const lugaresFiltrados = computed(() => {
  return store.state.lugares.filter(c =>
    c.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
  )
})
</script>