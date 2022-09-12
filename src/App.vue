<script setup>
import Navbar from './components/General/NavbarNav.vue';
import PageFooter from './components/General/PageFooter.vue'
</script>

<template>
  <Navbar />

  <router-view class="pt-5"></router-view>

  <footer>
    <PageFooter />
  </footer>
</template>

<style scoped>

</style>