<script setup>
import ContentPanel from '../../ContentPanel/ContentPanel.vue';
import CustomDivider from '../../ContentPanel/CustomDivider.vue';
import ButtonPrimary from '../../ContentPanel/ButtonPrimary.vue';
import ButtonPrimaryOutline from '../../ContentPanel/ButtonPrimaryOutline.vue';
</script>
    
<template>
    <section id="BrickAppsOverview">

        <div class="container-fluid">

            <!-- Nagłówek -->
            <div class="d-flex flex-column text-center gap-0 mt-5 mb-4 scrollTo">
                <h2>Aplikacje do prowadzenia zajęć z <span class="text-purple">programowania</span></h2>
                <CustomDivider><i class="bi bi-code-square"></i></CustomDivider>
            </div>

            <!-- Code Presentation Tool -->
            <ContentPanel img="/codePresentationTool.png" order="img-text" articleId="Code-Presentation-Tool">

                <template #Header>Code Presentation Tool</template>

                <template #Text>
                    <p>Aplikacja <span class="text-purple">Code Presentation Tool</span> to narzędzie pozwalające na
                        wyświetlanie wybranego pliku z kodem linijka po linijce.</p>

                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                        consectetur
                        adipisicing elit.</p>
                </template>

                <template #Buttons>
                    <ButtonPrimaryOutline link="/Code-Presentation-Tool/" altMsg="Dowiedz
                                się więcej">Dowiedz
                        się więcej</ButtonPrimaryOutline>
                    <ButtonPrimary link="https://mzmix.github.io/Code-Presentation-Tool/" altMsg="Otwórz
                                aplikację">Otwórz aplikację</ButtonPrimary>
                </template>

            </ContentPanel>

        </div>

    </section>
</template>

<style>
#BrickAppsOverview {
    background: url(/shadow-br.png) center center;
    background-size: cover;
}
</style>