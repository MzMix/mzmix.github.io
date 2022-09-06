<script setup>
import CustomTimeline from '../General/CustomTimeline.vue'

const TimelineStructure = {
    element1: {
        id: 0,
        header: 'Wersja 0',
        text: 'Lorem ipsum',
        img: '/klockowePociagi.png'
    },
    element2: {
        id: 1,
        header: 'Wersja 1',
        text: 'Lorem ipsum',
        img: '/klockowePociagi.png'
    },
    element3: {
        id: 2,
        header: 'Wersja 2',
        text: 'Lorem ipsum',
        img: '/klockowePociagi.png'
    },
    element4: {
        id: 3,
        header: 'Wersja 3',
        text: 'Lorem ipsum',
        img: '/klockowePociagi.png'
    }
};

</script>

<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-8 offset-2 p-4">
                <h2>Aplikacje Archiwalne</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas, ipsa facilis rem, provident
                    molestiae nam similique ad mollitia quos possimus eligendi labore explicabo, cupiditate earum? Ad
                    tenetur a obcaecati.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-8 offset-2 p-4">
                <h3 class="mb-4">Zobacz historię aplikacji archiwalnych</h3>
                <CustomTimeline :TimelineStructure=TimelineStructure />
            </div>
        </div>
    </div>
</template>