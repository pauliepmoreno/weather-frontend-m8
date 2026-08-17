import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            usuario: null,
            isAuthenticated: false,
            lugares: [],
            lugarSeleccionado: null,
            cargando: false,
            error: null,
            unidad: 'C'
        }
    },
    mutations: {
        login(state, usuario) {
            state.usuario = usuario
            state.isAuthenticated = true


        },
        logout(state) {
            state.usuario = null
            state.isAuthenticated = false
        },

        setLugares(state, lugares) {
            state.lugares = lugares
        },
        setLugarSeleccionado(state, lugar) {
            state.lugarSeleccionado = lugar
        },
        setCargando(state, valor) {
            state.cargando = valor
        },
        setError(state, mensaje) {
            state.error = mensaje
        },

        setUnidad(state, unidad) {
            state.unidad = unidad
        }
    }
})

export default store