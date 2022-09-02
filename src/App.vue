<script setup>
import Navbar from './components/NavbarNav.vue';
import PageHero from './components/PageHero.vue';
import BrickAppsOverview from './components/BrickAppsOverview.vue'
import ItAppsOverview from './components/ItAppsOverview.vue'
</script>

<template>

  <Navbar />

  <PageHero />

  <main>
    <BrickAppsOverview />
    <ItAppsOverview />
  </main>

</template>

<style scoped>
</style>