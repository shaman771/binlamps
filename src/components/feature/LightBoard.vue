<template>
  <section class="light-board">
    <LightBulb
      v-for="bit in store.bitRange"
      :key="bit.id"
      :bit="bit"
      @click="store.toggleLighted(bit.weight)"
    />
    <LightBoardConsole />
  </section>
</template>

<script setup>
import LightBoardConsole from './LightBoardConsole';
import LightBulb from './LightBulb';
import { useStore } from '../../stores/store';

const store = useStore();
</script>

<style scoped>
.light-board {
  display: flex;
  flex-wrap: wrap;
}

.light-board > * {
  background-color: var(--color-primary-soft);
  padding: 1em;
  border: 1px solid var(--color-border);
}
</style>
