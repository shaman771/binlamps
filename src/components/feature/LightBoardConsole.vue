<template>
  <div class="light-board-console">
    <ConsoleSwitch
      title="Light bulb numeric label format"
      :items="resultBaseOptions"
      :options="{ isVertical: true, isRight: true }"
      :model-value="store.resultBase"
      name="resultBase"
      @update:model-value="store.setResultBase"
    />

    <div class="light-board-console__display">
      <input
        :value="store.lightedToBase"
        type="text"
        name="result"
        aria-label="Numeric representation (can enter)"
        @input="handleInput"
      >
    </div>
    <ConsoleSwitch
      :model-value="store.wordSize"
      name="wordSize"
      :items="wordSizeOptions"
      :options="{ isVertical: true }"
      title="Byte word size"
      @update:model-value="store.setWordSize"
    />
    <button
      class="button light-board-console__reset"
      @click="store.setLighted(0)"
    >
      C
    </button>
  </div>
</template>

<script>
let debounceTimer = null;
</script>

<script setup>
import { useStore } from '../../stores/store';
import ConsoleSwitch from '../base/ConsoleSwitch';

const store = useStore();

function handleInput(evt) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    store.setLighted(evt.target.value);
  }, 300);
}
const wordSizeOptions = [
  { value: 8, label: '8 bit' },
  { value: 16, label: '16 bit' },
  { value: 24, label: '24 bit' },
];
const resultBaseOptions = [
  { value: 10, label: 'dec' },
  { value: 2, label: 'bin' },
  { value: 16, label: 'hex' },
];
</script>

<style scoped>
.light-board-console {
  display: flex;
  justify-content: center;
  max-width: var(--spacing-max-width);
  margin: 0 auto;
}

.light-board-console > * {
  margin: 0 0.5em;
}

.light-board-console__display input {
  font-family: Timebomb, monospace;
  font-size: 4rem;
  border-radius: 0.125em;
  border: 4px ridge var(--color-border);
  color: var(--color-led-text);
  outline: 2px groove var(--color-border);
  transition: outline 0.15s;
  background: var(--color-led-gradient);
  background: var(--color-led-background);
  text-shadow: 2px 2px 1px #70875b;
  width: 100%;
  padding: 0.125em 0.25em 0;
}

.light-board-console__display input:focus {
  outline: 1px groove var(--color-primary-mute);
  /*box-shadow: 0 0 4px var(--color-background-mute);*/
}

.light-board-console__reset {
  /*border: 5px inset var(--color-border);*/
  border: none;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  padding: 0 1em;
  background: #d66868;
  color: var(--color-background-soft);
  text-shadow: 1px 1px 2px #770f0f;
  background: linear-gradient(
      0deg,
      rgba(214, 104, 104, 0.5) 0%,
      rgba(235, 183, 183, 0.05) 48%,
      rgba(214, 104, 104, 0.5) 100%
    ),
    linear-gradient(90deg, #d66868 0%, #ebb7b7 48%, #d66868 100%);
  transition: all 0.2s ease-out;
}

@media (hover: hover) {
  .light-board-console__reset:hover {
    background: linear-gradient(
        0deg,
        rgba(214, 104, 104, 0.5) 0%,
        rgba(235, 183, 183, 0.05) 48%,
        rgba(214, 104, 104, 0.5) 100%
      ),
      linear-gradient(
        90deg,
        #d87878 0%,
        rgba(235, 183, 183, 1) 48%,
        #d87878 100%
      );
  }
}
</style>
