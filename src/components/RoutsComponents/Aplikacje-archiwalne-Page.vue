<script setup>
import ContentPage from '../General/ContentPage.vue';
import ButtonPrimary from '../ContentPanel/ButtonPrimary.vue';

const PageSections = [
    {
        SectionId: 0,
        SectionHeader: 'Opis aplikacji',
        SectionHref: 'opis-aplikacji'
    },
    {
        SectionId: 1,
        SectionHeader: 'Wersja 1 - "fioletowa"',
        SectionHref: 'wersja1'
    },
    {
        SectionId: 2,
        SectionHeader: 'Wersja 2 - "zielona"',
        SectionHref: 'wersja2'
    }
]

</script>
    
<template>
    <ContentPage :PageSections="PageSections">

        <template #PageHeader>Aplikacje archiwalne</template>

        <template #opis-aplikacji>
            <p class="mt-5">Ta strona zawiera zbiór poprzednich opublikowanych wersji aplikacji, które <span
                    class="text-purple">nie są
                    rozwijane</span>.
            </p>
        </template>

        <template #wersja1>

            <div class="d-flex flex-row flex-wrap gap-2 p-4 w-100">
                <div class="card d-flex flex-column" style="width: 18rem;">
                    <img src="W-ukladzie-z-klockami-t2.png" class="card-img-top"
                        alt="Otwórz archiwalną wersję aplikacji W układzie z klockiami">
                    <div class="card-body align-self-center align-items-center">
                        <h5 class="card-title">W układzie z klockami</h5>
                        <ButtonPrimary link="#TODO" altMsg="Otwórz
                                    aplikację Klockowe pociągi">Otwórz aplikację</ButtonPrimary>
                    </div>
                </div>

                <div class="card d-flex flex-column" style="width: 18rem;">
                    <img src="Klockowe-wiezowce-t1.png" class="card-img-top"
                        alt="Otwórz archiwalną wersję aplikacji Klockowe wieżowce">
                    <div class="card-body align-self-center align-items-center">
                        <h5 class="card-title">Klockowe wieżowce</h5>
                        <ButtonPrimary link="#TODO" altMsg="Otwórz
                                    aplikację Klockowe pociągi">Otwórz aplikację</ButtonPrimary>
                    </div>
                </div>

                <div class="card d-flex flex-column" style="width: 18rem;">
                    <img src="Klockowe-pociagi-t1.png" class="card-img-top"
                        alt="Otwórz archiwalną wersję aplikacji Klockowe pociągi">
                    <div class="card-body align-self-center align-items-center">
                        <h5 class="card-title">Klockowe pociągi</h5>
                        <ButtonPrimary link="#TODO" altMsg="Otwórz
                                    aplikację Klockowe pociągi">Otwórz aplikację</ButtonPrimary>
                    </div>
                </div>

            </div>


        </template>

        <template #wersja2>
            <div class="d-flex flex-row flex-wrap gap-2 p-4 w-100">
                <div class="card d-flex flex-column" style="width: 18rem;">
                    <img src="W-ukladzie-z-klockami-t3.png" class="card-img-top"
                        alt="Otwórz archiwalną wersję aplikacji W układzie z klockiami">
                    <div class="card-body align-self-center align-items-center">
                        <h5 class="card-title">W układzie z klockami</h5>
                        <ButtonPrimary link="#TODO" altMsg="Otwórz
                                    aplikację Klockowe pociągi">Otwórz aplikację</ButtonPrimary>
                    </div>
                </div>

                <div class="card d-flex flex-column" style="width: 18rem;">
                    <img src="Klockowe-wiezowce-t2.png" class="card-img-top"
                        alt="Otwórz archiwalną wersję aplikacji Klockowe wieżowce">
                    <div class="card-body align-self-center align-items-center">
                        <h5 class="card-title">Klockowe wieżowce</h5>
                        <ButtonPrimary link="#TODO" altMsg="Otwórz
                                    aplikację Klockowe pociągi">Otwórz aplikację</ButtonPrimary>
                    </div>
                </div>

                <div class="card d-flex flex-column" style="width: 18rem;">
                    <img src="Klockowe-pociagi-t2.png" class="card-img-top"
                        alt="Otwórz archiwalną wersję aplikacji Klockowe pociągi">
                    <div class="card-body align-self-center align-items-center">
                        <h5 class="card-title">Klockowe pociągi</h5>
                        <ButtonPrimary link="#TODO" altMsg="Otwórz
                                    aplikację Klockowe pociągi">Otwórz aplikację</ButtonPrimary>
                    </div>
                </div>

            </div>
        </template>

    </ContentPage>

</template>

<style scoped>
img {
    width: 100%;
    align-self: center;
    padding: 1em;
}
</style>