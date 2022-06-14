<template>
  <footer class="app-footer">
    <div class="app-container">
      <address>
        <span class="app-footer__brand">BinLamps</span> visual toy ・
        <button
          class="button button-text"
          @click="showAbout = true"
        >
          About
        </button>
      </address>
      <span>Helps you understand binary numbers</span>
      <span>
        <img
          src="@/assets/images/logo.svg"
          alt="Vue logo"
          width="24"
          height="24"
        > Built with <a
          href="https://vuejs.org/"
          rel="noreferrer noopener"
          target="_blank"
        >Vue 3</a> on <a
          href="https://vitejs.dev/"
          rel="noreferrer noopener"
          target="_blank"
        >Vite</a>
      </span>
    </div>
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
  </footer>
</template>

<script setup>
import BaseModal from '../base/BaseModal';
import AboutContent from '../feature/AboutContent';
import { ref } from 'vue';
const showAbout = ref(false);
</script>

<style scoped>
.app-footer {
  font-size: 0.875rem;
  display: flex;
  background-color: var(--color-background-soft);
  align-items: center;
  justify-content: center;
  color: var(--color-text-soft);
}

.app-footer__brand {
  font-family: Timebomb, monospace;
  font-size: 1.25em;
  color: var(--color-primary-soft);
}
</style>
