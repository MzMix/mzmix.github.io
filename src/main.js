import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import './style.css'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'

import HomePage from './components/RoutsComponents/HomePage.vue';
import ArchiveApps from './components/RoutsComponents/ArchiveApps.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/wersje-archiwalne',
        name: 'ArchiveApps',
        component: ArchiveApps
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');