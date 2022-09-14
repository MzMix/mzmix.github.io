<script setup>
import ContentPage from '../General/ContentPage.vue';
import ButtonPrimary from '../ContentPanel/ButtonPrimary.vue';
import RouterButtonPrimaryOutline from '../ContentPanel/RouterButtonPrimaryOutline.vue';

const PageSections = [
    {
        SectionId: 0,
        SectionHeader: 'Opis aplikacji',
        SectionHref: 'opis-aplikacji'
    }
]

</script>
        
<template>
    <ContentPage :PageSections="PageSections">

        <template #PageHeader>Code Presentation Tool</template>

        <template #opis-aplikacji>
            <p class="mt-5"><span class="text-purple">Code Presentation Tool</span> to nowa aplikacja powstała jako
                pomoc w przeprowadzaniu zajęć z kodowania. Umożliwia import pliku z kodem i wyświetlanie jego zawartości
                po jednej linijce kodu na raz.
            </p>

            <div class="d-flex flex-row flex-wrap gap-4 justify-content-center">
                <RouterButtonPrimaryOutline link="/wersje-archiwalne" altMsg="Zobacz wersje archiwalne">Zobacz wersje
                    archiwalne
                </RouterButtonPrimaryOutline>

                <ButtonPrimary link="https://mzmix.github.io/Code-Presentation-Tool/" altMsg="Otwórz
                                        aplikację Code Presentation Tool">Otwórz aplikację</ButtonPrimary>
            </div>

            <img src="/TMP.png">

        </template>

    </ContentPage>

</template>