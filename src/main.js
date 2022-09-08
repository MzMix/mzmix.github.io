import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import './style.css'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'

import HomePage from './components/RoutsComponents/HomePage.vue';
import ArchiveApps from './components/RoutsComponents/ArchiveApps.vue';
import wuzkPage from './components/RoutsComponents/wuzkPage.vue';
import kwPage from './components/RoutsComponents/kwPage.vue';
import kpPage from './components/RoutsComponents/kpPage.vue';
import cpToolPage from './components/RoutsComponents/cpToolPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/W-ukladzie-z-klockami',
        name: 'W-ukladzie-z-klockami',
        component: wuzkPage
    },
    {
        path: '/Klockowe-wiezowce',
        name: 'Klockowe-wiezowce',
        component: kwPage
    },
    {
        path: '/Klockowe-pociagi',
        name: 'Klockowe-pociagi',
        component: kpPage
    },
    {
        path: '/Code-Presentation-Tool',
        name: 'Code-Presentation-Tool',
        component: cpToolPage
    },
    {
        path: '/wersje-archiwalne',
        name: 'ArchiveApps',
        component: ArchiveApps
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');