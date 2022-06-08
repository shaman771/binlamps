<template>
  <div
    class="console-switch"
    :class="{ '--vertical': options.isVertical, '--right': options.isRight }"
  >
    <slot />
    <template
      v-for="item in items"
      :key="item.label"
    >
      <input
        :id="`${item.label}-id`"
        type="radio"
        class="console-switch__native-input"
        :name="name"
        :value="item.value"
        :checked="item.value === modelValue"
        @change="onChange"
      >
      <label
        :for="`${item.label}-id`"
        class="console-switch__label"
      >{{ item.label }}</label>
    </template>
    <i
      class="console-switch__indicator"
      :style="indicatorStyle"
    />
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number, undefined, null],
    default: null
  },
  name: {
    type: String,
    default: 'console-switch'
  },
  items: {
    type: Array,
    required: true,
    validator(val) {
      return val.every(item => 'value' in item && 'label' in item)
    }
  },
  options: {
    type: Object,
    default() {
      return {};
    }
  }
})
const indicatorPos = ref('0');

watchEffect(() => {
  const currentIdx = props.items.findIndex(item => item.value == props.modelValue);
  if (currentIdx !== -1) {
    indicatorPos.value = `${100 / props.items.length * currentIdx}%`;
  }
})

const indicatorStyle = computed(() => {
  return ({ transform: `translateY(${indicatorPos.value})`});
})

const emit = defineEmits(['update:modelValue']);

function onChange(evt) {
  emit('update:modelValue', evt.target.value);
}
</script>

<style scoped>
.console-switch {
  display: inline-flex;
  position: relative;
}

.console-switch::after {
  content: '';
  left: 0;
  position: absolute;
  background: transparent;
  width: 0.75em;
  height: 90%;
  border: 1px solid var(--color-border);
  border-radius: 1em;
  z-index: -1;
  top: 3px;
}

.console-switch__indicator {
  display: block;
  position: absolute;
  left: 0.075em;
  height: 100%;
  width: 0.55em;
  transition: transform 0.3s;
  padding: 0.25em 0;
  z-index: -1;
  top: 3px;
}

.console-switch__indicator::after {
  display: block;
  content: "";
  border-radius: 50%;
  background: var(--color-primary-soft);
  width: 0.5em;
  height: 0.5em;
}

.console-switch.--vertical {
  flex-direction: column;
}

.console-switch.--right {
  text-align: right;
}

.console-switch.--right::after {
  left: unset;
  right: 0;
}

.--vertical .console-switch__label {
  padding-left: 1.25em;
}

.--vertical.--right .console-switch__label {
  padding-left: 0;
  padding-right: 1.25em;
}


.--right .console-switch__indicator {
  left: unset;
  right: 0.075em;
}

.console-switch__native-input {
  color: transparent;
  background-color: transparent;
  width: 0;
  height: 0;
  transition: color 0.3s;
}

.console-switch__label {
  color: var(--color-text-soft);
  cursor: pointer;
  margin-left: 0.25em;
}

.console-switch__native-input:checked + .console-switch__label {
  color: var(--color-primary-soft);
  text-shadow: 0 0 1px #49a81f;
}
</style>
