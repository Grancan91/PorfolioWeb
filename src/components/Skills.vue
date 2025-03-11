<script setup>
import { computed, ref } from 'vue';
import SkillCard from './SkillCard.vue';
import skills from '@/assets/skills.json';

let search = ref('')

const searchResult = computed(() => {
  const lowercasedSearch = search.value.toLowerCase();

  return {
    languages: skills.languages.filter(skill => skill.name.toLowerCase().includes(lowercasedSearch)),
    frameworks: skills.frameworks.filter(skill => skill.name.toLowerCase().includes(lowercasedSearch)),
    libraries: skills.libraries.filter(skill => skill.name.toLowerCase().includes(lowercasedSearch)),
    databases: skills.databases.filter(skill => skill.name.toLowerCase().includes(lowercasedSearch)),
    others: skills.others.filter(skill => skill.name.toLowerCase().includes(lowercasedSearch)),
  };
});
</script>

<template>
  <section>


    <!--   <div class="flex justify-end pt-4">
      <input type="search" name="search" id="" placeholder="Buscar Skill" v-model="search" class="w-1/3 h-8 rounded-md">
    </div> -->
    <h1 class="text-3xl font-bold text-center text-gray-600 pt-4">Habilidades Principales</h1>


    <h1 v-if="searchResult.languages.length > 0" class="text-xl py-2">Lenguajes</h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <SkillCard v-for="skill in searchResult.languages" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div>

    <h1 v-if="searchResult.frameworks.length > 0" class="text-xl py-2">Frameworks</h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <SkillCard v-for="skill in searchResult.frameworks" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div>

    <h1 v-if="searchResult.libraries.length > 0" class="text-xl py-2">Librerías</h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <SkillCard v-for="skill in searchResult.libraries" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div>

    <h1 v-if="searchResult.databases.length > 0" class="text-xl py-2">Bases de Datos</h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <SkillCard v-for="skill in searchResult.databases" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div>

    <h1 v-if="searchResult.others.length > 0" class="text-xl py-2">Otros</h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <SkillCard v-for="skill in searchResult.others" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div>








    <div class="container mx-auto p-12">
      <h1 class="text-3xl font-bold text-center text-gray-600 my-4">Habilidades Blandas Principales</h1>

      <!-- Flex para las cards -->
      <div class="flex flex-wrap justify-center gap-4">

        <!-- Card 1 -->
        <div class="bg-gray-900 shadow-lg rounded-lg w-80 hover:scale-105 transition-transform duration-300">
          <div class="bg-blue-500 text-gray-900 text-center p-6 rounded-t-lg">
            <h2 class="text-xl font-semibold">Comunicación Efectiva</h2>
          </div>
          <div class="p-6 text-center text-gray-200">
            <p>La habilidad de expresar ideas claramente y escuchar activamente es esencial en cualquier entorno
              profesional.</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-gray-900 shadow-lg rounded-lg w-80 hover:scale-105 transition-transform duration-300">
          <div class="bg-green-500 text-gray-900 text-center p-6 rounded-t-lg">
            <h2 class="text-xl font-semibold">Trabajo en Equipo</h2>
          </div>
          <div class="p-6 text-center text-gray-200">
            <p>Colaborar eficazmente con otros para lograr metas comunes es clave para el éxito en proyectos grupales.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-gray-900 shadow-lg rounded-lg w-80 hover:scale-105 transition-transform duration-300">
          <div class="bg-yellow-500 text-gray-900 text-center p-6 rounded-t-lg">
            <h2 class="text-xl font-semibold">Resolución de Problemas</h2>
          </div>
          <div class="p-6 text-center text-gray-200">
            <p>La capacidad para identificar soluciones efectivas en situaciones complejas es fundamental para cualquier
              profesional.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
input {
  outline: none;
  border: 2px solid transparent;
  padding: 10px;
  background-color: #f7f7f7;
  color: #333;
}

input:focus {
  border-color: #4CAF50;
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.7);
}

</style>