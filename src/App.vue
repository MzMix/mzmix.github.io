<script setup>
import Navbar from './components/NavbarNav.vue';
import PageHero from './components/PageHero.vue';
import BrickAppsOverview from './components/BrickAppsOverview.vue'
import ItAppsOverview from './components/ItAppsOverview.vue'
import PageFooter from './components/PageFooter.vue'

</script>

<template>

  <Navbar />

  <PageHero />

  <main :id="'main'" class="scrollTo">
    <BrickAppsOverview />
    <ItAppsOverview />
  </main>

  <footer>
    <PageFooter />
  </footer>

</template>

<style scoped>
</style>