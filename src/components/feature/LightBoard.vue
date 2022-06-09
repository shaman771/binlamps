<template>
  <section class="light-board">
    <IconCircuitBoard class="light-board__backdrop" />
    <div class="light-board__ramp">
      <LightBulb
        v-for="bit in store.bitRange"
        :key="bit.id"
        :class="{ 'is-visible': !!(showState & bit.weight) }"
        class="light-board__ramp-item"
        :bit="bit"
        @click="store.toggleLighted(bit.weight)"
      />
    </div>
  </section>
</template>

<script setup>
import LightBulb from './LightBulb';
import { useStore } from '../../stores/store';
import { watchEffect, ref } from 'vue';
import IconCircuitBoard from '../icons/IconCircuitBoard';

const store = useStore();
const showState = ref(0);
const timerQueue = [];
const perUnitDuration = 200;
let startDelay = 1800;

watchEffect(() => {
  const totalAppearDuration =
    perUnitDuration * store.$state.wordSize + startDelay;
  showState.value = 0;
  timerQueue.forEach((timerId) => {
    clearTimeout(timerId);
  });
  timerQueue.length = 0;
  for (let i = 0; i < store.$state.wordSize; i++) {
    timerQueue.push(
      setTimeout(() => {
        showState.value |= Math.pow(2, i);
      }, totalAppearDuration - perUnitDuration * i)
    );
  }
  startDelay = 0;
});
</script>

<style scoped>
.light-board {
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.light-board > * {
  margin-bottom: 1.5rem;
}

.light-board__backdrop {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  fill: var(--color-background-mute);
}

.light-board__ramp {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: var(--spacing-max-width);
  flex: 1;
}

.light-board__ramp-item {
  opacity: 0;
  transition: opacity var(--transition-timing);
  flex: 0 1 8rem;
  margin: 1em;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(253, 253, 253, 0.6);
  padding: 0.5rem;
  box-shadow: var(--shadow-1);
}

.dark .light-board__ramp-item {
  background-color: rgba(24, 24, 24, 0.8);
  box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.25),
  var(--shadow-1);
}

.light-board__ramp-item.is-visible {
  opacity: 1;
}
</style>
