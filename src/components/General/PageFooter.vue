<script setup>
import GoogleScholarIcon from '../Icons/GoogleScholarIcon.vue';
</script>

<template>

    <div class="container-fluid bg-purple pt-2">

        <div class="row text-white p-4">

            <div class="col-lg-3 offset-lg-1">
                <h3>mzmix.github.io</h3>

                <p>mzmix.github.io to połączenie mojego portfolio i zbioru aplikacji stworzonych do
                    pomocy w przeprowadzaniu zajęć z uczniami</p>

            </div>

            <div class="col-4">

                <p><a href="https://mzmix.github.io/" class="link-light fs-4">Strona Główna</a></p>

                <p><a href="#Aplikacje-klocki" class="link-light fs-4">Aplikacje do pracy
                        z klockami</a></p>

                <p><a href="#Code-Presentation-Tool" class="link-light fs-4">Code Presentation
                        Tool</a>
                </p>

            </div>

            <div class="col-4">
                <h3>Kontakt</h3>

                <p><a href="https://github.com/MzMix" class="link-light" target="_blank"><i class="bi bi-github"></i>
                        GitHub: MzMix</a>
                </p>

                <p><a href="https://scholar.google.com/citations?user=Tzzw3CQAAAAJ&hl=pl" class="link-light"
                        target="_blank">
                        <GoogleScholarIcon /> Google Scholar: Mikołaj Wojciech Zuziak
                    </a></p>

                <p><a href="mailto:m.w.zuziak@gmail.com" class="link-light"><i class="bi bi-envelope"></i> Mail:
                        m.w.zuziak@gmail.com</a>
                </p>

            </div>

        </div>

        <div class="row text-white pt-3" id="author">
            <div class="col-12 text-center font-monospace">
                <p><a href="https://mzmix.github.io/" class="text-decoration-none text-white">mzmix.github.io</a> |
                    Mikołaj Zuziak | 2018-2022</p>
            </div>
        </div>

    </div>

</template>

<style scoped>
a {
    text-decoration: none;
    /* color: white; */
}

#author {
    background-color: #5B26C7;
}
</style>