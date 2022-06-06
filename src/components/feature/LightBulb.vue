<template>
  <div :class="{ activated: bit.isOn }">
    <span>{{ `# ${bit.index}` }}</span>
    <IconLightBulb />
    <span>{{ bit.weight }}</span>
  </div>
</template>

<script setup>
import IconLightBulb from '../icons/IconLightBulb';

defineProps({
  bit: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>

<style scoped>
.activated > span {
  color: var(--color-primary);
  font-weight: bold;
}
span:last-child {
  font-size: 1.5em;
}
</style>
