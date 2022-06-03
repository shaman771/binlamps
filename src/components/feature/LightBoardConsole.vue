<template>
  <div class="light-board-console">
    <ul class="light-board-console__labels">
      <li
        v-for="label in consoleLabels"
        :key="label"
        :class="{ selected: label === store.$state.resultBase }"
      >
        {{ label }}
      </li>
    </ul>
    <div class="light-board-console__display">
      <input
        :value="store.lightedToBase"
        type="text"
        name="result"
        aria-label="Numeric representation (can enter)"
        @input="handleInput"
      >
    </div>
    <button @click="store.setLighted(0)">
      Reset
    </button>
  </div>
</template>

<script>
let debounceTimer = null;
</script>

<script setup>
import { useStore } from '../../stores/store';

const store = useStore();
const consoleLabels = ['dec', 'bin', 'hex'];

function handleInput(evt) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    store.setLighted(evt.target.value);
  }, 300)
}
</script>

<style scoped>
.light-board-console {
  display: flex;
}

.light-board-console__labels .selected {
  color: var(--color-primary);
}
</style>
