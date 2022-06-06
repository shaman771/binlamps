<template>
  <footer class="app-footer">
    <address>
      <span class="app-footer__brand">BinLamps</span> visual toy
    </address>
    <span>Helps you with binary numbers</span>
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
  </footer>
</template>

<script setup>
</script>

<style scoped>
.app-footer {
  font-size: 0.875rem;
  display: flex;
  background-color: var(--color-background-soft);
  justify-content: space-between;
  align-items: center;
  padding: 2em 4em;
}

.app-footer__brand {
  font-family: Timebomb, monospace;
  font-size: 1.25em;
}
</style>
