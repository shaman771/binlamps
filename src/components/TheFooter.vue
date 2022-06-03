<template>
  <footer class="app-footer">
    BinLamps visual toy
    <span>
      <img
        src="@/assets/logo.svg"
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
  display: flex;
  background-color: var(--color-background-soft);
  justify-content: space-between;
  align-items: center;
  padding: 2em 1em;
}

</style>
