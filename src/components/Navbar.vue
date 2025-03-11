<script setup>
import IconGmail from './icons/IconGmail.vue';
import IconLinnkein from './icons/IconLinkedin.vue';
import IconGithub from './icons/IconGithub.vue';
import Icon from './Icon.vue';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>

  <div id="nav">
    <div id="profile">
      <img src="../assets/Profile.png" alt="">
      <div>
        <p>Abel López Pérez</p>
        <p>Desarrollador FullStack</p>
      </div>
    </div>
    <div class="links">

      <a class="nav-item">
        <router-link to="/">Inicio</router-link>
      </a>
      <a class="nav-item">
        <router-link to="/skills">Skills</router-link>
      </a>
      <a class="nav-item">
        <router-link to="/projects">Projectos</router-link>
      </a>
      <a href="" class="nav-item">Educación</a>
    </div>
    <div class="social">
      <a class="w-6 h-6" href="https://github.com/Grancan91">
        <Icon name="IconGithub" clickable />
      </a>
      <a class="w-6 h-6" href="mailto:abl.lopper@gmailcom">
        <Icon name="IconGmail" clickable />
      </a>
      <a class="w-6 h-6" href="https://www.linkedin.com/in/abellopezperez/">
        <Icon name="IconLinkedin" clickable />
      </a>
    </div>
  </div>
</template>

<style scoped>
#nav {
  height: 64px;
  padding: 0 200px;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: var(--background-primary);
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
</style>