<script setup>
import PageHero from '../RoutsComponents/HomePage/PageHero.vue';
import BrickAppsOverview from '../RoutsComponents/HomePage/BrickAppsOverview.vue'
import ItAppsOverview from '../RoutsComponents/HomePage/ItAppsOverview.vue'
</script> 

<template>
    <div>
        <PageHero />

        <main :id="'main'" class="scrollTo">
            <BrickAppsOverview />
            <ItAppsOverview />
        </main>
    </div>
</template>