<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">CityClimate 🏙️</router-link>

      <span v-if="isAuthenticated" class="nav-link text-white">
        👤 {{ usuario.nombre }}
      </span>
      <button v-if="isAuthenticated" @click="cerrarSesion" class="btn btn-outline-light btn-sm ms-2">
        Cerrar sesión
      </button>
      <router-link v-else class="nav-link" to="/login">Login</router-link>
      <router-link v-if="isAuthenticated" class="nav-link" to="/favoritos">⭐ Favoritos</router-link>

      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const usuario = computed(() => store.state.usuario)
const isAuthenticated = computed(() => store.state.isAuthenticated)

const cerrarSesion = () => {
  store.commit('logout')
  router.push('/login')
}
</script>

<style scoped>
.navbar-custom {
  background-color: #3d1064;
}

.navbar-custom .nav-link,
.navbar-custom .navbar-brand {
  color: white !important;
}
</style>