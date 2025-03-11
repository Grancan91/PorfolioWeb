<script setup>
import Icon from './Icon.vue';

</script>

<template>
  <section>

    <div class="flex py-4">


        <img src="../assets/projects/galagagold.png" alt="" class="w-[500px]">
     
      <div class="w-fit ml-4">

        <h1 class="text-2xl py-4">Nombre del Proyecto</h1>

        <p class="text-md">Descripción del proyecto Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit perspiciatis veritatis illo voluptatum reprehenderit voluptate, nesciunt sapiente fugit obcaecati
          minima porro. Mollitia necessitatibus cum dignissimos facilis temporibus, doloribus minus quisquam!</p>
        
          <div class="flex gap-4 justify-end">
          <Icon name="IconHtml" size="36" class="mt-3" />
          <Icon name="IconCss" size="36" class="mt-3 " />
          <Icon name="IconJavaScript" size="36" class="mt-3" />
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
 
</style>