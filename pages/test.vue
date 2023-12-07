<template>
	<div class="min-h-screen w-screen flex flex-col gap-4 justify-center items-center">
		<h1>{{ data }}</h1>
		<h2>{{ count }}</h2>
		<UButton @click="count++">Increment</UButton>
		<UButton to="/"> Go back to home </UButton>
	</div>
</template>

<script setup>
const data = ref('Hello World!')
const count = ref(0)
</script>
