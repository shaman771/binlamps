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
      <div
        class="modal-container"
      >
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
defineProps({
  isShown: Boolean
})

const emit = defineEmits(['close']);
</script>




<style>
.modal-wrapper, .modal-mask {
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
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from, .modal-leave-to {
  transition: all 0.3s;
  opacity: 0;
  transform: scale(1.1);
}

.modal-leave-from {
  /*transition: all 0.3s;*/
}

</style>
