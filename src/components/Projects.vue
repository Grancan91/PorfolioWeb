<script setup>
import Icon from './Icon.vue';

</script>

<template>
  <section id="projects">
    <h2 class="pl-[300px] mt-20">Proyectos</h2>

    <div class="flex py-4 px-[300px]">


      <img src="../assets/projects/galaga.png" alt="" class="w-full h-56 rounded-2xl">


      <div class="w-fit ml-4">

        <h2 class="pl-6">Demo Galaga</h2>
        <div class="flex gap-4 pl-6">
          <Icon name="IconHtml" size="24" class="mt-3" />
          <Icon name="IconCss" size="24" class="mt-3 " />
          <Icon name="IconJavaScript" size="24" class="mt-3" />
        </div>
        <p class="!text-[16px] pl-6 mt-4">Demo del Galaga para poner en practica el manejo de HTML, CSS y JavaScrpt Vanilla
        </p>



      </div>

    </div>

  </section>
</template>

<style scoped>
 
</style>