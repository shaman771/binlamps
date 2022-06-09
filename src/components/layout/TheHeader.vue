<template>
  <header class="app-header">
    <div class="app-container">
      <div class="app-header__brand">
        <h1 title="Turn On a Binary Lamp!">
          <IconLightBulbSimple class="app-header__brand-icon" />
          <span class="cap">B</span>in<span class="cap">L</span>amps
        </h1>
        <h2 class="app-header__subtitle">
          Light Up Your Bytes
        </h2>
      </div>
      <LightBoardConsole />
      <ThemeSwitch class="app-header__theme" />
    </div>
  </header>
</template>

<script setup>
import LightBoardConsole from '../feature/LightBoardConsole';
import ThemeSwitch from '../base/ThemeSwitch';
import { watchEffect } from 'vue';
import { useStore } from '../../stores/store';
import IconLightBulbSimple from '../icons/IconLightBulbSimple';

const store = useStore();

watchEffect(() => {
  const action = store.$state.theme === 'light' ? 'add' : 'remove';
  document.documentElement.classList[action]('dark');
});

watchEffect(() => {
  if (store.$state.lighted >= store.maxNumber) {
    store.setLighted((store.maxNumber - 1).toString(store.$state.resultBase));
  }
});
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
  width: 100%;
  padding: calc(0.2em + 0.5vw) 0;
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

.app-header__brand {
  flex: 0 0 auto;
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

@media screen and (max-width: 48rem) {
  .app-header__theme {
    position: absolute;
    left: calc(2em + 2vw);
    top: 2em;
  }
}
</style>
