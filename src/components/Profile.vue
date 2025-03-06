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


</script>

<template>
  <section class="">
    <div id="profile" class="flex mt-24 pt-8">
      <img :src="profileImg" alt="Profile" class="w-36 h-36 object-cover rounded-full mr-6 border-cyan-400 border">
      <div class="flex flex-col justify-center">
        <h1
          class="text-4xl font-[Alice] font-bold bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
          Desarrollador FullStack
        </h1>
        <h1 class="text-2xl mt-4 ">Abel López Pérez</h1>
      </div>
    </div>
    <p class="text-lg leading-relaxed mt-8">Soy un apasionado del FrontEnd en busca de un equipo dinámico
      donde pueda aprender de los mejores profesionales, y al mismo tiempo, aportar mi visión crítica y mi enfoque de
      calidad. Estoy comprometido con el crecimiento continuo en mi campo, en cada proyecto, me esfuerzo por
      generar nuevas ideas y soluciones creativas. Estoy convencido de que mi energía, dedicación y enfoque innovador
      pueden sumar al equipo.</p>

    <h3 class="mb-4 mt-8">Core Technologies</h3>
    <div class="flex gap-4">
      <IconVue class="icon" />
      <IconTailwind class="icon" />
      <IconJavaScript class="icon" />
      <IconNode class="icon" />
      <IconExpress class="icon" />
      <IconMysql class="icon" />
      <IconGithub class="icon" />
      <IconPostman class="icon" />
    </div>
    <div class="flex justify-center mt-8 pb-8 gap-4">
      <button>Descargar CV</button>
      <button>Contactar</button>
    </div>
  </section>
</template>

<style>
.icon {
  width: 24px;
  height: 24px;
}

button {
  background-color: var(--primary);
  color: white;
  border: 0 transparent none;
  font-size: 1rem;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
}
</style>