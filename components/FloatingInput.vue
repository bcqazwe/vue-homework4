<template>
  <div class="relative">
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :aria-invalid="hasError"
      :aria-describedby="hasError ? errorId : undefined"
      class="peer w-full px-4 py-4 border border-outline-variant/30 rounded-md focus:ring-2 focus:ring-primary outline-none transition-all bg-transparent"
      :class="hasError ? 'border-error ring-2 ring-error/15' : ''"
      placeholder=" "
      @input="onInput"
    />
    <label
      :for="inputId"
      class="absolute left-4 top-4 text-secondary transition-all duration-200 pointer-events-none origin-left peer-focus:-translate-y-5 peer-focus:scale-[0.85] peer-focus:px-1 peer-focus:bg-surface peer-focus:text-primary peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-[0.85] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-surface peer-not-placeholder-shown:text-primary"
    >
      {{ label }}
    </label>
    <p
      v-if="hasError"
      :id="errorId"
      class="mt-1 text-sm text-error"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  modelValue: string;
  label: string;
  type?: string;
  id?: string;
  errorMessage?: string;
}>(), {
  type: 'text',
  id: '',
  errorMessage: '',
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const generatedId = `floating-input-${Math.random().toString(36).slice(2, 10)}`;
const inputId = props.id || generatedId;
const errorId = `${inputId}-error`;
const hasError = computed(() => Boolean(props.errorMessage));

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>
