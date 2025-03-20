<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MatrixEffect from './components/MatrixEffect.vue';
import Navbar from './components/Navbar.vue'
import Profile from './components/Profile.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Space from './components/Space.vue';


/* const sections = ref([])
const activeSection = ref('profile')

const scrollToSection = (id) => {
  const section = document.getElementById(id)
  section.scrollIntoView({ behavior: 'smooth' })
  activeSection.value = section.id
} */

/* onMounted(() => {
  sections.value = document.querySelectorAll('section')

  const observer = new IntersectionObserver((entries) => {
    const visibleSection = entries.find(entry => entry.isIntersecting)

    if (visibleSection) {
      activeSection.value = visibleSection.target.id;
    }
  }, {
    threshold: 0.8,
    rootMargin: "10% 0px 30% 0px"
  });

  sections.value.forEach(section => observer.observe(section));
}) */
</script>

<template>
  <Navbar/>
  <MatrixEffect />
  <Space />
  <Profile />
  <Space />
  <Experience />
  <Space />
  <Skills />
  <Space />
  <Projects />
  <Space />

</template>


<style scoped>
section {
  scroll-margin-top: 90px;
}
</style>