<template>
  <div class="light-board-console">
    <ul class="light-board-console__labels">
      <li
        v-for="(label, key) in consoleLabels"
        :key="label"
        :class="{ selected: key === store.$state.resultBase }"
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
    <button
      class="button light-board-console__reset"
      @click="store.setLighted(0)"
    >
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
const consoleLabels = { 10: 'dec', 2: 'bin', 16: 'hex' };

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
  justify-content: center;
}

.light-board-console > * {
  margin: 0 0.5em;
}

.light-board-console__labels {
  font-size: 0.875em;
  list-style: none;
  padding: 0;
  text-align: right;
}

.light-board-console__labels .selected {
  color: var(--color-primary);
  font-weight: bold;
}

.light-board-console__display input {
  font-family: Timebomb, monospace;
  font-size: 4rem;
  border-radius: 0.125em;
  border: 4px ridge var(--color-border);
  color: var(--color-text);
  outline: 2px groove var(--color-border);
  /* TODO: convert to themed vars */
  background: rgb(63,94,0);
  background: linear-gradient(0deg, rgba(63,94,0,1) 0%, rgba(99,121,9,1) 3%, rgba(144,163,134,1) 50%, rgba(99,121,9,1) 90%, rgba(63,94,0,1) 100%);
  transition: outline 0.15s;
}

.light-board-console__display input:focus {
  outline: 3px groove var(--binlamps-green-mute);
  box-shadow: 0 0 4px var(--color-background-mute);
}

.light-board-console__reset {
  border: 5px inset var(--color-border);
  font-size: 1.25rem;
  border-radius: 0.5rem;
  padding: 0 1em;
  background: rgb(214,104,104);
  color: var(--color-text);
  text-shadow: 0 0 2px var(--color-background-mute);
  background:
    linear-gradient(0deg, rgba(214,104,104,0.5) 0%, rgba(235,183,183,0.05) 48%, rgba(214,104,104,0.5) 100%),
    linear-gradient(90deg, rgba(214,104,104,1) 0%, rgba(235,183,183,1) 48%, rgba(214,104,104,1) 100%);
}
</style>
