<template>
  <ul
    id="lamps"
    class="lamps mt-5 mb-5"
  >
    <li
      id="lamp7"
      class="mb-5"
    >
      <span class="lamp-pos">7</span> <span
        class="lamp-value"
      >128</span> <span class="lamp-status">0</span>
    </li>
    <li
      id="lamp6"
      class="mb-5"
    >
      <span class="lamp-pos">6</span> <span
        class="lamp-value"
      >64</span> <span class="lamp-status">0</span>
    </li>
    <li
      id="lamp5"
      class="mb-5"
    >
      <span class="lamp-pos">5</span> <span
        class="lamp-value"
      >32</span><span class="lamp-status">0</span>
    </li>
    <li
      id="lamp4"
      class="mb-5"
    >
      <span class="lamp-pos">4</span> <span
        class="lamp-value"
      >16</span><span class="lamp-status">0</span>
    </li>
    <li
      id="lamp3"
      class="mb-5"
    >
      <span class="lamp-pos">3</span> <span
        class="lamp-value"
      >8</span><span class="lamp-status">0</span>
    </li>
    <li
      id="lamp2"
      class="mb-5"
    >
      <span class="lamp-pos">2</span> <span
        class="lamp-value"
      >4</span><span class="lamp-status">0</span>
    </li>
    <li
      id="lamp1"
      class="mb-5"
    >
      <span class="lamp-pos">1</span> <span
        class="lamp-value"
      >2</span><span class="lamp-status">0</span>
    </li>
    <li
      id="lamp0"
      class="mb-5"
    >
      <span class="lamp-pos">0</span> <span
        class="lamp-value"
      >1</span><span class="lamp-status">0</span>
    </li>
  </ul>

  <div class="row justify-content-center">
    <div class="col-md-2">
      <p class="value-type">
        Binary
      </p>
      <p
        id="value-bin"
        class="value"
      >
        00000000
      </p>
    </div>
    <div class="col-md-2">
      <p class="value-type">
        <strong>Decimal</strong>
      </p>
      <p
        id="value-dec"
        class="value"
      >
        0
      </p>
    </div>
    <div class="col-md-2">
      <p class="value-type">
        Hexadecimal
      </p>
      <p
        id="value-hex"
        class="value"
      >
        00
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>
