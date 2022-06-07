<template>
  <section class="light-board">
    <IconCircuitBoard class="light-board__backdrop" />
    <h2 class="light-board__heading">
      Light Up Your Bytes!
    </h2>
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
    <LightBoardConsole />
  </section>
</template>

<script setup>
import LightBoardConsole from './LightBoardConsole';
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
}

.light-board__heading {
  margin: 3vw auto;
  font-size: 2rem;
  letter-spacing: 0.125rem;
}

.light-board__backdrop {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  fill: var(--color-background-mute);
  animation: backdrop 2s ease-in-out;
}

.light-board__ramp {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.light-board__ramp-item {
  opacity: 0;
  transition: opacity 0.2s;
  flex: 0 1 7em;
  margin: 1em;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(253, 253, 253, 0.6);
  padding: 0.5em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.dark .light-board__ramp-item {
  background-color: rgba(24, 24, 24, 0.75);
  box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.25),
    0 0 10px rgba(0, 0, 0, 0.4);
}

.light-board__ramp-item.is-visible {
  opacity: 1;
}

@keyframes backdrop {
  0% {
    fill: transparent;
  }
  35% {
    fill: var(--color-background-mute);
  }
  85% {
    fill: var(--color-primary-mute);
    filter: drop-shadow(0 0 1px var(--color-primary-mute));
    transform: scale(1.02);
  }
}
</style>
