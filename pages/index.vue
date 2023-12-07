<template>
	<div class="w-screen h-screen flex flex-col gap-2 justify-center items-center">
		<h1>Current route: {{ route.path }}</h1>
		<p>{{ apiData.body?.message }}</p>
		<UButton variant="link" to="https://nuxt.com/docs/getting-started/routing" target="_blank" class="text-md">
			Learn more about Nuxt Routing
			<UIcon name="line-md:arrow-right-circle" class="w-5 h-5" dynamic />
		</UButton>
	</div>
</template>

<script setup>
const route = useRoute()
const apiData = await $fetch('/api/hello')
</script>
