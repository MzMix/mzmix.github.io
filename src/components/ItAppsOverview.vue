<script setup>
import ContentPanel from './ContentPanel.vue';
import CustomDivider from './CustomDivider.vue';
</script>
    
<template>
    <section id="BrickAppsOverview">

        <div class="container-fluid">

            <!-- Nagłówek -->
            <div class="d-flex flex-column text-center gap-0 mt-5 mb-4">
                <h2>Aplikacje do prowadzenia zajęć z <span class="text-purple">programowania</span></h2>
                <CustomDivider><i class="bi bi-code-square"></i></CustomDivider>
            </div>

            <!-- Code Presentation Tool -->
            <div class="row justify-content-center mb-5">
                <div class="col-lg-10 col-sm-12 align-self-end">

                    <ContentPanel img="/codePresentationTool.png" order="img-text" articleId="Code-Presentation-Tool">

                        <h3>Code Presentation Tool</h3>

                        <p>Aplikacja <span class="text-purple">Code Presentation Tool</span> to narzędzie pozwalające na
                            wyświetlanie wybranego pliku z kodem linijka po linijce.</p>

                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                            consectetur
                            adipisicing elit.</p>

                        <div class="d-flex flex-lg-row flex-column gap-lg-4 gap-2 justify-content-center">

                            <a class="btn btn-outline-purple align-self-center mt-2"
                                href="/Code-Presentation-Tool/">Dowiedz się więcej</a>

                            <a class="btn btn-purple btn-lg align-self-center mt-2"
                                href="https://mzmix.github.io/Code-Presentation-Tool/">Otwórz
                                aplikację</a>

                        </div>

                    </ContentPanel>

                </div>
            </div>

        </div>

    </section>
</template>

<style>
#BrickAppsOverview {
    background: url(/shadow-br.png) center center;
    background-size: cover;
}
</style>