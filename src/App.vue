<script setup lang="ts">
import LoginShell from '../components/LoginShell.vue';
import StepOneForm from '../components/StepOneForm.vue';

function handleSuccess(email: string) {
  localStorage.setItem('user_identity', email);
  window.location.href = new URL('Login2.html', window.location.href).href;
}
</script>

<template>
  <div class="min-h-screen bg-surface px-4 py-6 font-body text-on-surface md:px-6 md:py-8">
    <div class="mx-auto flex min-h-[calc(100vh-3rem)] max-w-[1100px] items-center justify-center">
      <LoginShell>
        <template #left>
          <div class="mb-8">
            <p class="inline-block rounded-full bg-primary-fixed px-3 py-1 text-sm font-semibold text-primary">
              課堂作業示範
            </p>
          </div>

          <h1 class="mb-4 text-[2.5rem] font-semibold leading-tight tracking-tight text-on-surface md:text-5xl">
            帳號登入（步驟一）
          </h1>

          <p class="text-lg font-medium text-on-surface/90">
            請輸入你要測試的帳號或手機
          </p>
        </template>

        <template #right>
          <div class="flex h-full flex-col justify-between gap-8">
            <StepOneForm @success="handleSuccess" />

            <p class="text-sm leading-relaxed text-secondary">
              這是課堂前端練習頁面，僅供介面展示與流程測試。
              <a class="font-semibold text-primary hover:underline" href="#">說明</a>
            </p>
          </div>
        </template>
      </LoginShell>
    </div>
  </div>
</template>
