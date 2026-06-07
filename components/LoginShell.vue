<template>
  <main class="w-full max-w-[1024px] grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest rounded-lg overflow-hidden shadow-editorial">
    <section class="p-10 md:p-14 flex flex-col justify-start">
      <slot name="left" />
    </section>

    <section class="p-10 md:p-14 flex flex-col">
      <slot name="right" />
    </section>
  </main>
</template>
