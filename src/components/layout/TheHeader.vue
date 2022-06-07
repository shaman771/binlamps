<template>
  <header class="app-header">
    <div class="app-container">
      <h1 title="Turn On a Binary Lamp!">
        <IconLightBulbSimple class="app-header__brand-icon" />
        <span class="cap">B</span>in<span class="cap">L</span>amps
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
    </div>
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
import IconLightBulbSimple from '../icons/IconLightBulbSimple';

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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  background: linear-gradient(180deg, var(--color-background) 0%, var(--color-background-mute) 100%);
  display: flex;
  justify-content: center;
  z-index: 1;
}

.dark .app-header {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.app-header h1 {
  font-family: Timebomb, monospace;
  color: var(--color-primary-soft);
}

.app-header h1 > .cap {
  font-size: 1.25em;
  margin-left: 0.125em;
  color: var(--color-primary);
}

.app-header__brand-icon {
  width: 2.5rem;
}
</style>
