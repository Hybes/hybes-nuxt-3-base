<template>
	<div>
		<NuxtPwaManifest />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<UNotifications />
	</div>
</template>

<script setup>
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
	window.scrollTo(0, 0)
})
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
