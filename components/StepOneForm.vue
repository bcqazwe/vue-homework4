<script setup lang="ts">
import { ref } from 'vue';
import FloatingInput from './FloatingInput.vue';

const emit = defineEmits<{
  (event: 'success', email: string): void;
}>();

const email = ref('');
const errorMessage = ref('');

function onSubmit() {
  const trimmedEmail = email.value.trim();

  if (!trimmedEmail) {
    errorMessage.value = 'Enter an email or phone number';
    return;
  }

  errorMessage.value = '';
  emit('success', trimmedEmail);
}
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent="onSubmit">
    <div class="space-y-2">
      <FloatingInput
        id="step-one-email"
        v-model="email"
        label="Email or phone"
        type="email"
        :error-message="errorMessage"
      />

      <button
        type="button"
        class="text-left text-sm font-medium text-primary hover:underline"
      >
        Forgot email?
      </button>
    </div>

    <div class="mt-2 flex items-center justify-between gap-4">
      <a
        href="/"
        class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/8"
      >
        返回首頁
      </a>

      <button
        type="submit"
        class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary/90"
      >
        Next
      </button>
    </div>
  </form>
</template>