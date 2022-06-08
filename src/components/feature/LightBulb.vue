<template>
  <div :class="{ activated: bit.isOn }">
    <span>{{ `# ${bit.index}` }}</span>
    <IconLightBulb />
    <span>{{ prettyWeight }}</span>
  </div>
</template>

<script setup>
import IconLightBulb from '../icons/IconLightBulb';

const props = defineProps({
  bit: {
    type: Object,
    default() {
      return {};
    },
  },
});

const prettyWeight = new Intl.NumberFormat('en-US')
  .format(props.bit.weight)
  .replace(/,/g, ' ');
</script>

<style scoped>
.activated > span {
  color: var(--color-primary-soft);
}
span:last-child {
  font-size: 1.5em;
}
</style>
