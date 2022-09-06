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
            <div class="col-8">

                <CustomTimeline :TimelineStructure=TimelineStructure />

            </div>
        </div>
    </div>
</template>