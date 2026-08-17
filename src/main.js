import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './main.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Detalle from './views/Detalle.vue'
import store from './store/index.js'
import Login from './views/Login.vue'
import Favoritos from './views/Favoritos.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/lugar/:id', component: Detalle },
        { path: '/login', component: Login },
        { path: '/favoritos', component: Favoritos }
    ]
})

router.beforeEach((to, from, next) => {
    const rutasProtegidas = ['/favoritos']
    const isAuthenticated = store.state.isAuthenticated
    
    if (rutasProtegidas.includes(to.path) && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
