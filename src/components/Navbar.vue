<script setup>
import { ref, defineProps, defineEmits, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps(['activeSection'])
const emit = defineEmits(['scrollTo'])

const sections = [
  { id: 'profile', label: 'Inicio' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'skills', label: 'Tecnologías' },
  { id: 'projects', label: 'Proyectos' },
]

const scrollTo = (id) => {
  emit('scrollTo', id)
}

</script>

<template>
  <div id="nav">
    <div class="links px-8 py-0.5 rounded-full" :class="{
      background: activeSection !== 'profile'
    }">
      <a v-for="section in sections" class="nav-item" :class="{
        active: activeSection === section.id
      }" @click="(scrollTo(section.id))">
        {{ section.label }}
      </a>
    </div>
  </div>
</template>

<style scoped>
#nav {
  top: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 20;
}

#profile>img {
  border-radius: 100%;
  border: 1px white solid;
  width: 38px;
  height: 38px;
  object-fit: cover;
}

#profile {
  display: flex;
  align-items: center;
  width: 200xp;
  gap: 12px;
}

#profile>div>p {
  font-size: 12px;
}

.links {
  display: flex;
  gap: 24px;
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  /*   padding: 8px;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 20px; */
  cursor: pointer;
}

.background {
  background-color: rgba(44, 43, 43, 0.45);
  backdrop-filter: blur(46px);
}

.social {
  display: flex;
  width: 200xp;
  gap: 16px;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  height: 34px;

}

.nav-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.6s ease, left 0.6s ease;
}

.nav-item:hover::before {
  left: 0;
  width: 100%;
}

.active {
  color: aqua;
}
</style>