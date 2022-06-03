<template>
  <button
    class="theme-switch button"
    type="button"
    role="switch"
    aria-label="toggle dark mode"
    @click="store.toggleTheme"
  >
    <span class="theme-switch__check">
      <IconSun class="icon theme-switch__check--light" />
      <IconMoon class="icon theme-switch__check--dark" />
    </span>
  </button>
</template>

<script setup>
import { useStore } from '@/stores/store';
import IconSun from '../icons/IconSun';
import IconMoon from '../icons/IconMoon';
const store = useStore();
</script>

<style>
  .theme-switch {
    border-radius: 0.875rem;
    display: block;
    width: 2.5rem;
    height: 1.25rem;
    border: 1px solid var(--vt-c-divider-light-1);
    background-color: var(--color-background-mute);
    transition: border-color .25s,background-color .25s;
    text-align: initial;
    padding: 0 0.125em;
    cursor: pointer;
  }

  .theme-switch__check {
    position: relative;
    display: inline-block;
    width: 1rem;
    height: 95%;
    border-radius: 50%;
    background-color: var(--color-background);
    transition: background-color .25s, transform .25s;
  }

  .theme-switch__check .icon {
    position: absolute;
    top: 1px;
    left: 1px;
    transition: opacity .25s;
    border-radius: 50%;
    width: 90%;
    height: 90%;
    fill: var(--color-text);
  }

  .theme-switch__check--dark {
    opacity: 0;
  }

  .dark .theme-switch__check {
    transform: translateX(1.2rem);
  }

  .dark .theme-switch__check--light {
    opacity: 0;
  }

  .dark .theme-switch__check--dark {
    opacity: 1;
  }
</style>
