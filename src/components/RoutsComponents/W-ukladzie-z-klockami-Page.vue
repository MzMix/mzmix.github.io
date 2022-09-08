<script setup>
import CustomTimeline from '../General/CustomTimeline.vue'
import ButtonPrimary from '../ContentPanel/ButtonPrimary.vue';
import RouterButtonPrimaryOutline from '../ContentPanel/RouterButtonPrimaryOutline.vue';

const TimelineStructure = {
    element0: {
        id: 0,
        header: 'Wersja 5 - obecna',
        text: 'Lorem ipsum',
        img: '/klockowePociagi.png'
    },
    element1: {
        id: 1,
        header: 'Wersja 4 - "prototyp"',
        text: 'Wersja prototypowa z 2021 roku',
        img: '/W-ukladzie-z-klockami-t4.png'
    },
    element2: {
        id: 2,
        header: 'Wersja 3 - "zielona"',
        text: 'Ulepszona wersja aplikacji z bardziej rozbudowanym interfejsem użytkownika',
        img: '/W-ukladzie-z-klockami-t3.png'
    },
    element3: {
        id: 3,
        header: 'Wersja 2 - "fioletowa"',
        text: 'Pierwsza upubliczniona wersja',
        img: '/W-ukladzie-z-klockami-t2.png'
    },
    element4: {
        id: 4,
        header: 'Wersja 1',
        text: 'Pierwsza wersja aplikacji niedostępna w Internecie',
        img: '/W-ukladzie-z-klockami-t1.png'
    }
};
</script>

<template>
    <main :id="'main'" class="scrollTo">
        <div class="container-fluid">

            <div class="row">
                <div class="col-8 offset-2 p-4">
                    <h2>W układzie z klockami</h2>

                    <p class="mt-5"><span class="text-purple">W układzie z klockami</span> to pierwsza aplikacja
                        z serii "Klockiem w matematykę!". Pozwala na przeprowadzanie zajęć z wykorzystaniem
                        klocków. Rozwój aplikacji rozpoczął się w 2017. Do tej pory powstały trzy publicznie
                        dostępne wersje.
                    </p>

                    <div class="d-flex flex-row gap-4 justify-content-center">
                        <RouterButtonPrimaryOutline link="/wersje-archiwalne" altMsg="Zobacz
                            wersje archiwalne">Zobacz wersje archiwalne</RouterButtonPrimaryOutline>

                        <ButtonPrimary link="https://mzmix.github.io/W-ukladzie-z-klockami/" altMsg="Otwórz
                                aplikację W ukladzie z klockami">Otwórz aplikację</ButtonPrimary>
                    </div>

                    <hr class="border border-2 opacity-50 mt-5">
                </div>

            </div>

            <div class="row">
                <div class="col-8 offset-2 p-4 scrollTo" :id="'mozliwosci-aplikacji'">
                    <h4>Możliwości aplikacji:
                        <a class="anchor-link" href="#mozliwosci-aplikacji"
                            aria-label="Link do tej sekcji: Możliwości aplikacji">#</a>
                    </h4>

                    <ol class="lh-lg">

                        <li>Wypełnianie planszy kolorami przedstawiającymi klocki</li>

                        <li>Zmiana wybranego zestawu kolorów (domyślnie dostępne zestawy „Kreatyny” i „Matematyczny”)
                        </li>

                        <li>Przełączanie widoku osi symetrii pozwalających podzielić planszę na ćwiartki</li>

                        <li>Zmianę sposobu opisu pól na planszy:
                            <ol type="a">
                                <li>Numeracja - dwie współrzędne liczbowe na wzór układu współrzędnych</li>
                                <li>Adresowanie – para litera i liczba na wzór arkusza kalkulacyjnego</li>
                                <li>Kolory – para dwóch kolorów</li>
                                <li>Brak – wyłączenie opisu pól</li>
                            </ol>
                        </li>

                        <li>Zmianę zawartości pól:
                            <ol type="a">
                                <li>Brak – pola na planszy nie mają zawartości</li>
                                <li>Numeracja – każde pole ma przypisaną wartość od 1 do 100</li>
                                <li>Adresowanie – każde pole ma przypisany adres (para litera i liczba)</li>
                            </ol>
                        </li>

                        <li>Zapis widoku planszy jako grafiki do pliku .png</li>
                        <li>Kodowanie rysunku – wyświetlenie listy użytych kolorów i listy pól wypełnionych tym kolorem
                            (sposób kodowania zależy od wybranego opisu pól na planszy)</li>
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

                    <hr class="border border-2 opacity-50 mt-5">

                </div>

            </div>

            <div class="row">
                <div class="col-8 offset-2 p-4 scrollTo" :id="'ewolucja-aplikacji'">
                    <h4>Ewolucja aplikacji:
                        <a class="anchor-link" href="#ewolucja-aplikacji"
                            aria-label="Link do tej sekcji: Ewolucja aplikacji">#</a>
                    </h4>

                    <CustomTimeline :TimelineStructure=TimelineStructure />

                    <div class="text-center mt-4">
                        <RouterButtonPrimaryOutline link="/wersje-archiwalne" altMsg="Zobacz
                            wersje archiwalne">Zobacz wersje archiwalne</RouterButtonPrimaryOutline>
                    </div>

                </div>
            </div>

        </div>
    </main>
</template>

<style scoped>
#headerImg {
    max-width: 40%;
}

.anchor-link:focus,
.anchor-link:hover,
:hover>.anchor-link,
:target>.anchor-link {
    color: var(--CutomPutple);
    text-decoration: none;
    opacity: 1;
}

.anchor-link {
    padding: 0 .175rem;
    font-weight: 400;
    color: var(--CutomPutple);
    text-decoration: none;
    opacity: 0;
    transition: color 0.15s ease-in-out, opacity 0.15s ease-in-out;
}
</style>