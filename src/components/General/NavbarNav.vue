<script setup>
import SkipToContent from './SkipToContent.vue'
</script>

<template>
    <header>
        <SkipToContent link='#main' />
        <nav class="navbar navbar-expand-lg bg-purple shadow fixed-top">
            <div class="container-fluid text-white">
                <router-link to="/" class="navbar-brand text-white">mzmix.github.io</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item dropdown text-white">
                            <a class="nav-link dropdown-toggle text-white" href="#BrickAppsOverview" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Aplikacje do pracy z klockami
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/W-ukladzie-z-klockami" class="dropdown-item">W ukladzie z klockami
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Klockowe-wiezowce" class="dropdown-item">Klockowe wieżowce
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Klockowe-pociagi" class="dropdown-item">Klockowe-pociagi
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Wersje-archiwalne" class="dropdown-item">Wersje archiwalne
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <router-link to="/Code-Presentation-Tool" class="nav-link text-white">Code
                                Presentation Tool
                            </router-link>
                        </li>
                    </ul>

                    <a class="nav-link text-white" aria-current="page" target="_blank"
                        href="https://github.com/MzMix/mzmix.github.io"><i class="bi bi-github"></i></a>

                </div>
            </div>
        </nav>
    </header>
</template>