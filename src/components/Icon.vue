<script setup>
import { defineAsyncComponent, computed, ref } from 'vue';

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
});

const iconComponent = computed(() =>
  defineAsyncComponent(() => import(`@/components/icons/${props.name}.vue`))
);
const isHovering = ref(false);
</script>

<template>
  <component :is="iconComponent" :style="{
  width: `${size}px`,
  height: `${size}px`,
  cursor: clickable ? 'pointer' : 'default',
  transform: isHovering ? 'translateY(-5px)' : 'translateY(0)',
  transition: 'transform 0.3s ease',
  }" @mouseover="isHovering = true" @mouseleave="isHovering = false" />
</template>