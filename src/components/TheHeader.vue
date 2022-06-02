<template>
  <header>
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
      v-model.number="wordSize"
      name="wordSize"
      :items="wordSizeOptions"
      title="Byte word size"
    >
      <IconSize />
    </RadioGroup>

    <RadioGroup
      v-model="digitFormat"
      name="digitFormat"
      :items="digitFormatOptions"
      title="Light bulb numeric label format"
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
import ThemeSwitch from './base/ThemeSwitch';
import RadioGroup from './base/RadioGroup';
import { ref } from 'vue';
import BaseModal from './base/BaseModal';
import AboutContent from './AboutContent';
import IconNumeric from './icons/IconNumeric';
import IconSize from './icons/IconSize';

const wordSize = ref(8);
const digitFormat = ref('dec');
const wordSizeOptions = [
  { value: 8, label: '8 bit' },
  { value: 16, label: '16 bit' },
  { value: 24, label: '24 bit' },
];
const digitFormatOptions = [
  { value: 'dec', label: 'decimal' },
  { value: 'bin', label: 'binary' },
  { value: 'hex', label: 'hexadecimal' },
];
const showAbout = ref(false);
</script>

<style scoped></style>
