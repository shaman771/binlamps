<template>
  <header class="app-header">
    <h1 title="Turn On a Binary Lamp!">
      <img
        src="@/assets/light-bulb.png"
        width="32"
        height="32"
        alt=""
      >
      BinLamps
    </h1>

    <button
      class="button button-text"
      @click="showAbout = true"
    >
      About
    </button>

    <RadioGroup
      :model-value="store.wordSize"
      name="wordSize"
      :items="wordSizeOptions"
      title="Byte word size"
      @update:model-value="store.setWordSize"
    >
      <IconSize />
    </RadioGroup>

    <RadioGroup
      :model-value="store.resultBase"
      name="resultBase"
      :items="resultBaseOptions"
      title="Light bulb numeric label format"
      @update:model-value="store.setResultBase"
    >
      <IconNumeric />
    </RadioGroup>

    <ThemeSwitch />

    <Teleport to="body">
      <BaseModal
        :is-shown="showAbout"
        @close="showAbout = false"
      >
        <template #header>
          <h3>About BinLamps</h3>
        </template>
        <template #body>
          <AboutContent />
        </template>
      </BaseModal>
    </Teleport>
  </header>
</template>

<script setup>
import ThemeSwitch from '../base/ThemeSwitch';
import RadioGroup from '../base/RadioGroup';
import { ref, watchEffect } from 'vue';
import BaseModal from '../base/BaseModal';
import AboutContent from '../feature/AboutContent';
import IconNumeric from '../icons/IconNumeric';
import IconSize from '../icons/IconSize';
import { useStore } from '../../stores/store';

const store = useStore();

watchEffect(() => {
  const action = store.$state.theme === 'light' ? 'add' : 'remove';
  document.documentElement.classList[action]('dark');
});

watchEffect(() => {
  if (store.$state.lighted >= store.maxNumber) {
    store.setLighted(store.maxNumber - 1);
  }
});

const wordSizeOptions = [
  { value: 8, label: '8 bit' },
  { value: 16, label: '16 bit' },
  { value: 24, label: '24 bit' },
];
const resultBaseOptions = [
  { value: 10, label: 'decimal' },
  { value: 2, label: 'binary' },
  { value: 16, label: 'hexadecimal' },
];
const showAbout = ref(false);
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-soft);
  padding: 0.5em 1em;
}
</style>
