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
  <div class="card shadow-lg hover:shadow-xl bg-[var(--secondary-bg)]
    rounded-full flex items-center p-1 px-4 transition-shadow">

    <Icon :name="icon" size="16" class="text-gray-700"/>

    <p class="text-xs font-semibold ml-2">{{ name }}</p>

  </div>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
}

.card:hover {
  color: var(--primary);
  box-shadow: 0 4px 10px rgba(20, 172, 206, 0.3);
  transition: width 0.6s ease,
    left 0.6s ease;
}
</style>