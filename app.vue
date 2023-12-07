<template>
  <SeoKit />
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	opacity: 1;
	transition: opacity 0.5s cubic-bezier(0.33, 1, 0.68, 1);
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
