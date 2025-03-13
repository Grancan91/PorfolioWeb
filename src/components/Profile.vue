<script setup>
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


</script>

<template>
  <section id="profile" class="px-[300px] pt-20">
    <div class="flex pt-8">
      <img :src="profileImg" alt="Profile" class="w-14 h-14 object-cover rounded-full mr-6 border bg-[var(--primary)]">
      <div class="flex flex-col justify-center">
        <h1 class="text-4xl font-[Alice] font-bold">
          Hola, soy Abel
        </h1>
      </div>
    </div>
    <p class="text-lg leading-relaxed mt-8 pr-24">+2 Años de Experiencia de <span>
        Aplicaciones Multiplataforma y Desarrollador Web
        FullStack
      </span>
      de Gran Canaria.
      Especializado en FrontEnd</p>
    <!--     <h3 class="mb-4 mt-8">Técnologías más usadas</h3>
    <div class="flex gap-4">
      <IconVue class="icon" />
      <IconTailwind class="icon" />
      <IconJavaScript class="icon" />
      <IconNode class="icon" />
      <IconExpress class="icon" />
      <IconMysql class="icon" />
      <IconGithub class="icon" />
      <IconPostman class="icon" />
    </div> -->
    <div class="flex mt-8 pb-8 gap-4">
      <button>Descargar CV</button>
      <button class="flex gap-3">Contactar
        <Icon name="IconGmail" clickable class="" />
      </button>
      <button onclick="" class="flex gap-3">Linkedin
        <Icon name="IconLinkedin" clickable class="" />
      </button>
    </div>
  </section>
</template>

<style scoped>

.icon {
  width: 24px;
  height: 24px;
}

span{
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

button:hover::before {
  left: 0;
  width: 100%;
}
</style>