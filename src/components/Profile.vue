<script setup>
import { ref } from 'vue'
import profileImg from '@/assets/Profile.png';
import IconMysql from './icons/IconMysql.vue';
import IconTailwind from './icons/IconTailwind.vue';
import IconVue from './icons/IconVue.vue';
import IconNode from './icons/IconNode.vue';
import IconJavaScript from './icons/IconJavaScript.vue';
import IconExpress from './icons/IconExpress.vue';
import IconGithub from './icons/IconGithub.vue';
import IconPostman from './icons/IconPostman.vue';
import IconGmail from './icons/IconGmail.vue';
import IconLinnkein from './icons/IconLinkedin.vue';
import Icon from './Icon.vue';

// Variables reactivas para cada botón
const isHoveringGmail = ref(false)
const isHoveringLinkedin = ref(false)

</script>

<template>
  <section id="profile" class="px-[38px] md:px-[100px] lg:px-[200px] xl:px-[300px]">
    <div class="pt-8 flex flex-col items-center justify-center sm:flex-row sm:justify-start gap-6">
      <img :src="profileImg" alt="Profile"
        class="w-28 h-28 object-cover rounded-full border bg-[var(--primary)]">
      <div class="flex flex-col justify-cente">
        <h1 class="text-3xl sm:text-5xl font-[Alice] font-bold">
          Hola, soy Abel
        </h1>
      </div>
    </div>
    <p class="text-lg leading-relaxed mt-8 sm:pr-24">+2 Años de Experiencia de <span>
        Desarrollador Web
        FullStack.
      </span>
      
      Especializado en FrontEnd</p>

    <div class="flex mt-8 pb-8 gap-4 justify-center sm:justify-start">
      <!-- <button>Descargar CV</button> -->
      <button class="flex gap-3 w-36 justify-center" @mouseover="isHoveringGmail = true"
        @mouseleave="isHoveringGmail = false">
        Contactar
        <Icon name="IconGmail" clickable :isHovering="isHoveringGmail" />
      </button>
      <button class="flex gap-3 w-36 justify-center" @mouseover="isHoveringLinkedin = true"
        @mouseleave="isHoveringLinkedin = false">
        Linkedin
        <Icon name="IconLinkedin" clickable :isHovering="isHoveringLinkedin" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
}

span {
  color: var(--primary);
  font-weight: bold;
}

button {
  position: relative;
  background-color: var(--secondary-bg);
  color: white;
  border: 0 transparent none;
  font-size: 1rem;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  cursor: pointer;
}

button::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.6s ease, left 0.6s ease;
}

button:hover {
  color: var(--primary);
  box-shadow: 0 4px 10px rgba(20, 172, 206, 0.3);
  transition: width 0.6s ease, left 0.6s ease;
}

button:hover::before {
  left: 0;
  width: 100%;
}
</style>