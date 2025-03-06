<script setup>

import Navbar from './components/Navbar.vue'
import Profile from './components/Profile.vue'

</script>

<template>

  <Navbar />
  <router-view></router-view>


</template>



<style scoped>
section {
  margin-top: 64px;
  scroll-margin-top: 64px;
  padding: 0 200px;
}

</style>
