import HomePage from '../pages/HomePage.vue'
import SubjectPage from '../pages/SubjectPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import Register from '../pages/Register.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {path: '/', name: 'home', component: HomePage},
        {path: '/subject', name: 'subject', component: SubjectPage},
        {path: '/login', name: 'login', component: LoginPage},
        {path: '/register', name: 'register', component: Register},
    ]
})

export default router