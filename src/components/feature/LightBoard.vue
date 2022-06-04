<template>
  <section class="light-board">
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

const store = useStore();
const showState = ref(0);
const timerQueue = [];
const perUnitDuration = 200;

watchEffect(() => {
  const totalAppearDuration = perUnitDuration * store.$state.wordSize;
  showState.value = 0;
  timerQueue.forEach(timerId => {
    clearTimeout(timerId);
  });
  timerQueue.length = 0;
  for (let i = 0; i < store.$state.wordSize; i++) {
    timerQueue.push(setTimeout(() => {
      showState.value |= Math.pow(2, i);
    }, 50 + totalAppearDuration - perUnitDuration * i));
  }
})
</script>

<style scoped>
.light-board__ramp {
  display: flex;
  flex-wrap: wrap;
}
.light-board__ramp-item {
  opacity: 0;
  transition: opacity 0.2s;
}
.light-board__ramp-item.is-visible {
  opacity: 1;
}
</style>
