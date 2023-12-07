<template>
	<div>
		<NuxtPwaManifest />
		<NuxtPage />
	</div>
</template>

<script setup>
useSchemaOrg([
	definePerson({
		name: 'Ben Hybert'
	}),
	defineWebSite({
		name: 'Ben Hybert Test Site'
	}),
	defineWebPage()
])
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
