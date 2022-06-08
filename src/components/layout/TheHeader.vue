<template>
  <header class="app-header">
    <div class="app-container">
      <div>
        <h1 title="Turn On a Binary Lamp!">
          <IconLightBulbSimple class="app-header__brand-icon" />
          <span class="cap">B</span>in<span class="cap">L</span>amps
        </h1>
        <h2 class="app-header__subtitle">
          Light Up Your Bytes
        </h2>
      </div>

      <button
        class="button button-text"
        @click="showAbout = true"
      >
        About
      </button>
      <LightBoardConsole />

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
import LightBoardConsole from '../feature/LightBoardConsole';
import ThemeSwitch from '../base/ThemeSwitch';
import { ref, watchEffect } from 'vue';
import BaseModal from '../base/BaseModal';
import AboutContent from '../feature/AboutContent';
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

const showAbout = ref(false);
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    var(--color-background) 0%,
    var(--color-background-mute) 100%
  );
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-out;
  width: 100%;
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

.app-header__subtitle {
  font-size: 0.875em;
  margin: -1em 0 0 3em;
  color: var(--color-text-soft);
  letter-spacing: 0.05rem;
}
</style>
