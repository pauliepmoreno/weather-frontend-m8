<template>
    <div class="container my-5">
        <h2>⭐ Mis Favoritos</h2>
        <p>Bienvenido, {{ usuario.nombre }}!</p>
        <p>Aquí podrás ver tus ciudades favoritas.</p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const usuario = computed(() => store.state.usuario)
</script>