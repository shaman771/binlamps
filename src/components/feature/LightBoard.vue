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
    }, totalAppearDuration - perUnitDuration * i));
  }
})
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
  width: 100%;
  fill: var(--color-background-mute);
  animation: backdrop 3s ease-in-out;
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
}
.light-board__ramp-item.is-visible {
  opacity: 1;
}

@keyframes backdrop {
  /*0% {*/
  /*  fill: #cec689;*/
  /*  background: radial-gradient(circle, rgba(2,0,36,1) 36%, rgba(255,255,255,1) 100%);*/
  /*}*/
  80% {
    /*background: radial-gradient(circle, rgba(2,0,36,1) 36%, rgba(255,255,255,1) 100%);*/
    fill: #dbedd2;
    transform: scale(1.1);
  }
  /*100% {*/
  /*  fill: #cec689;*/
  /*}*/
}
</style>
