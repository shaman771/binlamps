<template>
  <span>Bulb {{ bit.label }}: {{ bit.isOn }}</span>
</template>

<script setup>
defineProps({
  bit: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>

<style scoped></style>
