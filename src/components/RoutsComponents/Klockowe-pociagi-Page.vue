<script setup>
import ContentPage from '../General/ContentPage.vue';
import CustomTimeline from '../General/CustomTimeline.vue'
import ButtonPrimary from '../ContentPanel/ButtonPrimary.vue';
import RouterButtonPrimaryOutline from '../ContentPanel/RouterButtonPrimaryOutline.vue';

const TimelineStructure = {
    element0: {
        id: 0,
        header: 'Wersja 3 - obecna',
        text: 'Lorem ipsum',
        img: '/TMP.png'
    },
    element1: {
        id: 1,
        header: 'Wersja 2 - "zielona"',
        text: 'Ulepszona wersja aplikacji z bardziej rozbudowanym interfejsem użytkownika',
        img: '/Klockowe-pociagi-t2.png'
    },
    element2: {
        id: 2,
        header: 'Wersja 1 - "fioletowa"',
        text: 'Pierwsza upubliczniona wersja',
        img: '/Klockowe-pociagi-t1.png'
    }
};

const PageSections = [
    {
        SectionId: 0,
        SectionHeader: 'Opis aplikacji',
        SectionHref: 'opis-aplikacji'
    },
    {
        SectionId: 1,
        SectionHeader: 'Mozliwości aplikacji',
        SectionHref: 'mozliwosci-aplikacji'
    },
    {
        SectionId: 2,
        SectionHeader: 'Ewolucja aplikacji',
        SectionHref: 'ewolucja-aplikacji'
    }
]

</script>
    
<template>
    <ContentPage :PageSections="PageSections">

        <template #PageHeader>Klockowe pociągi</template>

        <template #opis-aplikacji>
            <p class="mt-5"><span class="text-purple">Klockowe pociągi</span> to trzecia aplikacja z serii "Klockiem w
                matematykę!". Rozwój aplikacji rozpoczął się w 2017. Do tej pory powstały trzy publicznie dostępne
                wersje. Aplikacja została stworzona w celu wspomagania przeprowadzania ćwiczenia „pociągi”.
            </p>

            <div class="d-flex flex-row gap-4 justify-content-center">
                <RouterButtonPrimaryOutline link="/wersje-archiwalne" altMsg="Zobacz wersje archiwalne">Zobacz wersje
                    archiwalne
                </RouterButtonPrimaryOutline>

                <ButtonPrimary link="https://mzmix.github.io/Klockowe-pociagi/" altMsg="Otwórz
                                    aplikację Klockowe pociągi">Otwórz aplikację</ButtonPrimary>
            </div>
        </template>

        <template #mozliwosci-aplikacji>
            <ol class="lh-lg">

                <li>Wypełnianie planszy kolorami przedstawiającymi klockowe wieżowce</li>

                <li>Zmiana wybranego zestawu kolorów (domyślnie dostępne zestawy „Kreatyny” i „Matematyczny”)
                </li>

                <li>Zapis widoku planszy jako grafiki do pliku .png</li>

                <li>Modyfikowanie zestawów kolorów:
                    <ol type="a">
                        <li>Dodawanie własnego zestawu z własną nazwą i listą kolorów</li>
                        <li>Edycja dodanych zestawów (nie dotyczy zestawów domyślnych)</li>
                        <li>Usuwanie dodanych zestawów (nie dotyczy zestawów domyślnych)</li>
                        <li>Eksport listy zestawów kolorów do pliku .json</li>
                        <li>Import listy kolorów z pliku .json</li>
                    </ol>
                </li>

            </ol>
        </template>

        <template #ewolucja-aplikacji>
            <CustomTimeline :TimelineStructure=TimelineStructure />

            <div class="text-center mt-4">
                <RouterButtonPrimaryOutline link="/wersje-archiwalne" altMsg="Zobacz wersje archiwalne">Zobacz wersje
                    archiwalne
                </RouterButtonPrimaryOutline>
            </div>
        </template>

    </ContentPage>

</template>