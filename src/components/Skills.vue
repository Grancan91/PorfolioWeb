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
  <section id="skills" class="px-[18px] md:px-[100px] lg:px-[100px] xl:px-[300px]">

    <!--   <div class="flex justify-end pt-4">
      <input type="search" name="search" id="" placeholder="Buscar Skill" v-model="search" class="w-1/3 h-8 rounded-md">
    </div> -->
    <h2 class="mb-8">Tecnologías Principales</h2>

    <!-- <p v-if="searchResult.languages.length > 0" class="text-xl py-2">Lenguajes</p> -->
    <div class="flex flex-wrap gap-4 justify-center">
      <SkillCard v-for="skill in searchResult.languages" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
      <SkillCard v-for="skill in searchResult.frameworks" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
      <SkillCard v-for="skill in searchResult.libraries" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
      <SkillCard v-for="skill in searchResult.databases" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
      <SkillCard v-for="skill in searchResult.others" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div>

    <!--   <p v-if="searchResult.frameworks.length > 0" class="text-xl py-2">Frameworks</p>
    <div class="flex flex-wrap gap-4 ">
      <SkillCard v-for="skill in searchResult.frameworks" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div>

    <p v-if="searchResult.libraries.length > 0" class="text-xl py-2">Librerías</p>
    <div class="flex flex-wrap gap-4 ">
      <SkillCard v-for="skill in searchResult.libraries" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div>

    <p v-if="searchResult.databases.length > 0" class="text-xl py-2">Bases de Datos</p>
    <div class="flex flex-wrap gap-4 ">
      <SkillCard v-for="skill in searchResult.databases" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div>

    <p v-if="searchResult.others.length > 0" class="text-xl py-2">Otros</p>
    <div class="flex flex-wrap gap-4 ">
      <SkillCard v-for="skill in searchResult.others" :key="skill.name" :name="skill.name" :level="skill.level"
        :icon="skill.icon" />
    </div> -->







    <!--   
      //Soft Skills
    <div class="container mx-auto p-12">
      <div class="flex flex-wrap justify-center gap-4">
        <div class="bg-[var(--secondary-bg)] text-center px-3 py-1 rounded-lg">
          <p>Comunicación Efectiva</p>
        </div>

        <div class="bg-[var(--secondary-bg)] text-center px-3 py-1 rounded-lg">
          <p>Trabajo en Equipo</p>
        </div>

        <div class="bg-[var(--secondary-bg)] text-center px-3 py-1 rounded-lg">
          <p>Resolución de Problemas</p>
        </div>
      </div>
    </div> -->

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