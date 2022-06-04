<template>
  <section class="light-board">
    <div class="light-board__ramp">
      <LightBulb
        v-for="bit in store.bitRange"
        :key="bit.id"
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

const store = useStore();
</script>

<style scoped>
.light-board__ramp {
  display: flex;
  flex-wrap: wrap;
}
</style>
