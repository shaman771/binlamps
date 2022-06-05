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
.animated-shadow {
  animation: svg-shadow 2s ease-in-out infinite alternate;
}

.activated > span {
  color: var(--color-primary);
  font-weight: bold;
}

@keyframes svg-shadow {
  from {
    filter: drop-shadow( 0 0 10px #fff) drop-shadow( 0 0 15px #a5ce89) drop-shadow( 0 0 20px #52d51e);
  }

  to {
    filter: drop-shadow( 0 0 15px #fff) drop-shadow( 0 0 25px #44aa17) drop-shadow( 0 0 15px #33671e);
  }
}
</style>
