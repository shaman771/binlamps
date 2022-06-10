<template>
  <Transition
    name="modal"
    mode="out-in"
  >
    <div
      v-if="isShown"
      class="modal-wrapper"
    >
      <div
        class="modal-mask"
        @click="emit('close')"
      />
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header" />
        </div>

        <div class="modal-body">
          <slot name="body" />
        </div>

        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

defineProps({
  isShown: Boolean,
});

const emit = defineEmits(['close']);
</script>

<style>
.modal-wrapper,
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
}

.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity var(--transition-timing) ease;
}

.modal-container {
  width: 40rem;
  max-width: 80%;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  background-color: var(--color-background-soft);
  border-radius: 0.25rem;
  box-shadow: var(--shadow-2);
  transition: all var(--transition-timing) ease;
}

.modal-header h3 {
  margin-top: 0;
  color: var(--color-primary-soft);
}

.modal-body {
  margin: 1.25em 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all var(--transition-timing) ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
