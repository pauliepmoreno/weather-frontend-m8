import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            usuario: null,
            isAuthenticated: false
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
        }
    }
})

export default store