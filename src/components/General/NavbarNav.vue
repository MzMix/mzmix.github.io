<script setup>
import SkipToContent from './SkipToContent.vue'
</script>

<template>
    <header>
        <SkipToContent link='#main' />
        <nav class="navbar navbar-expand-lg bg-purple shadow sticky-top">
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
                                <li><a class="dropdown-item" href="#W-ukladzie-z-klockami">W ukladzie z klockami</a>
                                </li>
                                <li><a class="dropdown-item" href="#Klockowe-wiezowce">Klockowe wieżowce</a></li>
                                <li><a class="dropdown-item" href="#Klockowe-pociagi">Klockowe pociągi</a></li>
                                <li><a class="dropdown-item" href="#Wersje-archiwalne">Wersje archiwalne</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="#Code-Presentation-Tool">Code
                                Presentation Tool</a>
                        </li>
                    </ul>

                    <a class="nav-link text-white" aria-current="page" target="_blank"
                        href="https://github.com/MzMix/mzmix.github.io"><i class="bi bi-github"></i></a>

                </div>
            </div>
        </nav>
    </header>
</template>