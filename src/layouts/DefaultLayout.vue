<template>
  <TheHeader class="app-header" />
  <main class="app-main">
    <MainView />
  </main>
  <TheFooter class="app-footer" />
</template>

<script setup>
import TheHeader from '../components/layout/TheHeader';
import TheFooter from '../components/layout/TheFooter';
import MainView from '../views/MainView';
</script>

<style>
#app {
  display: grid;
  max-width: 80rem;
  margin: 0 auto;
  font-weight: normal;
  grid-template-rows: 10% auto 10%;
  grid-template-columns: [start] 1fr [end];
  min-height: 100vh;
}

.app-header {
  box-shadow: 0 4px 4px var(--color-border);
}

.app-main {
  text-align: center;
}

</style>
