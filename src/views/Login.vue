<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="mb-4">Iniciar sesión</h2>

                        <div class="mb-3">
                            <label>Email</label>
                            <input v-model="email" type="email" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label>Contraseña</label>
                            <input v-model="password" type="password" class="form-control" />
                        </div>

                        <p v-if="error" class="text-danger">{{ error }}</p>

                        <button @click="iniciarSesion" class="btn btn-primary">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import usuarios from '../data/usuarios.js'

const email = ref('')
const password = ref('')
const error = ref('')
const store = useStore()
const router = useRouter()

const iniciarSesion = () => {
    const usuario = usuarios.find(u => u.email === email.value && u.password === password.value)

    if (usuario) {
        store.commit('login', usuario)
        router.push('/')
    } else {
        error.value = 'Usuario o contraseña incorrectos'
    }
}
</script>