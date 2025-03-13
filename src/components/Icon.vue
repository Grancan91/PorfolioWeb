<script setup>
import { defineProps, defineAsyncComponent, computed } from 'vue';

const props = defineProps({
  name: String,
  size: {
    type: [String, Number],
    default: 24,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
  isHovering: {
    type: Boolean,
    default: false,
  }
});

const iconComponent = computed(() =>
  defineAsyncComponent(() => import(`@/components/icons/${props.name}.vue`))
);
</script>

<template>
  <component :is="iconComponent" :style="{
    width: `${size}px`,
    height: `${size}px`,
    cursor: clickable ? 'pointer' : 'default',
  }" :class="{ 'icon': isHovering }" />
</template>

<style scoped>
.icon {
  animation: jump 0.6s ease-in-out infinite;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>