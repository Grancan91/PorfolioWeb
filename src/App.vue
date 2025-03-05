<script setup>
import Navbar from './components/Navbar.vue'
import IconMysql from './components/icons/IconMysql.vue';
import IconReact from './components/icons/IconReact.vue';
import IconTailwind from './components/icons/IconTailwind.vue';
import IconVue from './components/icons/IconVue.vue';
import IconNode from './components/icons/IconNode.vue';
import IconSequelize from './components/icons/IconSequelize.vue';
import IconJavaScript from './components/icons/IconJavaScript.vue';
import IconExpress from './components/icons/IconExpress.vue';
import IconGithub from './components/icons/IconGithub.vue';
import IconPostman from './components/icons/IconPostman.vue';

</script>

<template>

  <Navbar />


  <section id="home" class="left-section">
    <div id="profile">
      <img src="./assets/Profile.png" alt="">
      <div>
        <h1><span>Desarrollador FullStack</span></h1>
        <h1>Abel López </h1>
      </div>
    </div>
    <p>I’m passionate about FrontEnd and committed to
      learning and growing in my field. Through my work, I aim to bring fresh perspectives and creativity to every
      project. Let’s connect and explore how I can contribute to your vision.</p>


    <h3>Core Technologies</h3>
    <div class="stacks-container">
      <IconVue class="icon" />
      <IconTailwind class="icon" />
      <IconJavaScript class="icon" />
      <IconNode class="icon" />
      <IconExpress class="icon" />
      <IconMysql class="icon" />
      <IconGithub class="icon" />
      <IconPostman class="icon" />
    </div>
    <div class="btn-container">
      <button>Download CV</button>
      <button>Contact</button>
    </div>
  </section>
  <div class="profile-section">
  </div>

  
    <section id="about"></section>

  <section id="skills">
    klasdjlaksjdlaksjdaslkdj
  </section>

</template>

<style scoped>
section {
  margin-top: 64px;
  scroll-margin-top: 64px;
  padding: 0 200px;
}

#profile{
  display: flex;
  margin-top: 65px;
}
#profile > img {
  object-fit: cover;
  width: 200px;
  height: 200px;
  border: 1px white solid;
  border-radius: 100%;
  margin-right: 20px;
}

.btn-container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  gap: 8px;
}

#skills {
  background-color: red;
  width: 100%;
  height: 700px;
}
#about {
  background-color: green;
  width: 100%;
  height: 700px;
}

.icon {
  width: 24px;
  height: 24px;
}

@media (min-width: 1024px) {}



button {
  background-color: var(--primary);
  color: white;
  border: 0 transparent none;
  font-size: 1rem;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
}

.stacks-container {
  display: flex;
  gap: 12px;
}

/* 
.left-section {
  flex: 1;
  padding: 20px;
  max-width: 800px;
  justify-content: center;
} */

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
}

h2 {
  font-size: 2.5rem;
  color: var(--primary);
}

h3 {
  margin: 20px auto;
  color: white;
}

span {
  background: linear-gradient(135deg, var(--primary), aquamarine);
  -webkit-background-clip: text;
  color: transparent;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #7f8c8d;
}

.profile-section {
  flex: 1;
  background-image: url('./assets/Profile.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
