<template>
  <div class="radio-group">
    <slot />
    <template
      v-for="item in items"
      :key="item.label"
    >
      <input
        :id="`${item.label}-id`"
        type="radio"
        class="radio-group__native-input"
        :name="name"
        :value="item.value"
        :checked="item.value === modelValue"
        @change="onChange"
      >
      <label
        :for="`${item.label}-id`"
        class="radio-group__label"
      >{{ item.label }}</label>
    </template>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number, undefined, null],
    default: null
  },
  name: {
    type: String,
    default: 'radio-group'
  },
  items: {
    type: Array,
    required: true,
    validator(val) {
      return val.every(item => 'value' in item && 'label' in item)
    }
  },
})

const emit = defineEmits(['update:modelValue']);

function onChange(evt) {
  emit('update:modelValue', evt.target.value);
}
</script>

<style scoped>
.radio-group {
  display: inline-flex;
}

.radio-group__label {
  margin-left: 0.25em;
}

.radio-group__native-input {
  color: transparent;
  background-color: transparent;
  width: 0;
  height: 0;
  transition: color 0.3s;
}
.radio-group__label {
  color: var(--vt-c-text-light-2);
  cursor: pointer;
}

.radio-group__native-input:checked + .radio-group__label {
  color: var(--binlamps-active);
  text-shadow: 0 0 1px #49a81f;
}
</style>
