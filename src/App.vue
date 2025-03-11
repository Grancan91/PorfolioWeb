<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style scoped>
section {
  margin-top: 86px;
  scroll-margin-top: 64px;
  padding: 0 200px;
}
</style>
