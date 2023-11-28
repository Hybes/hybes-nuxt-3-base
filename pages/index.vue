<template>
  <div class="w-screen h-screen flex flex-col gap-2 justify-center items-center">
    <h1>Current route: {{ route.path }}</h1>
    <p>{{ apiData.body?.message }}</p>
    <UButton variant="link" to="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</UButton>
  </div>
</template>

<script setup>
const route = useRoute()
const apiData = await $fetch('/api/hello')
</script>