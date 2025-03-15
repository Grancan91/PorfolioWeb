<script setup>
import Icon from './Icon.vue';
</script>

<template>
  <section id="projects" class="px-[18px] md:px-[100px] lg:px-[100px] xl:px-[300px]">
    <h2 class="text-3xl">Proyectos</h2>

    <div class="flex flex-col py-4 sm:flex-row">
      <img src="../assets/projects/Galaga-Demo.webp" alt="" class="w-[700px] h-[300px] rounded-2xl z-10">
      <div class="w-fit sm:ml-4">
        <h2 class="py-2 sm:pl-6 text-2xl">Demo Galaga</h2>
        <p class="!text-[16px] sm:pl-6 sm:mt-4">Demo del Galaga para poner en practica el manejo de HTML, CSS y
          JavaScrpt
          Vanilla
        </p>
        <div class="flex gap-4 sm:pl-6">
          <Icon name="IconHtml" size="24" class="mt-3" />
          <Icon name="IconCss" size="24" class="mt-3 " />
          <Icon name="IconJavaScript" size="24" class="mt-3" />
        </div>
      </div>
    </div>


    <div class="flex flex-col py-4 sm:flex-row">
      <img src="../assets/projects/Feel-Home.webp" alt="" class="w-[700px] h-[300px] rounded-2xl z-10">
      <div class="w-fit sm:ml-4">
        <h2 class="py-2 sm:pl-6 text-2xl">Demo Galaga</h2>
        <p class="!text-[16px] sm:pl-6 sm:mt-4">Demo del Galaga para poner en practica el manejo de HTML, CSS y
          JavaScrpt
          Vanilla
        </p>
        <div class="flex gap-4 sm:pl-6">
          <Icon name="IconHtml" size="24" class="mt-3" />
          <Icon name="IconCss" size="24" class="mt-3 " />
          <Icon name="IconJavaScript" size="24" class="mt-3" />
        </div>
      </div>
    </div>
  </section>
</template>
