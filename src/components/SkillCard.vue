<script setup>
import Icon from './Icon.vue';
import IconStar from './icons/IconStar.vue';

const props = defineProps({
  name: String,
  level: Number,
  icon: String
});

// Mapeo de niveles
const levels = ["Novato", "Intermedio", "Experto"];
const colors = ["bg-amber-400", "bg-green-500", "bg-red-500"];
</script>

<template>
  <section class="shadow-lg hover:shadow-xl bg-gray-900 rounded-xl flex flex-col items-center p-3 w-44 transition-shadow">
    
    <div class="w-full flex justify-end items-start">
      <p :class="`px-3 text-xs font-semibold text-black rounded-full ${colors[level - 1]}`">
        {{ levels[level - 1] }}
      </p>
    </div>
    <Icon :name="icon" size="56" class="mt-3 text-gray-700" />

    <h1 class="text-xl font-semibold mt-3">{{ name }}</h1>

  </section>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
}
</style>