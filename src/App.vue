<template>
  <TheHeader class="app-header" />
  <main class="app-main">
    <LightBoard />
  </main>
  <TheFooter class="app-footer" />
</template>

<script setup>
import TheHeader from './components/layout/TheHeader';
import TheFooter from './components/layout/TheFooter';
import LightBoard from './components/feature/LightBoard';
</script>

<style>
@import './assets/styles/base.css';

#app {
  display: grid;
  margin: 0 auto;
  font-weight: normal;
  grid-template-rows: 10% auto 10%;
  grid-template-columns: [start] 1fr [end];
  min-height: 100vh;
}
.app-main {
  text-align: center;
}
</style>
