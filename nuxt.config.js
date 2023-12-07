// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	colorMode: {
		preference: 'dark'
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en-GB'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
				{ name: 'theme-color', content: '#586276' },
				{ name: 'msapplication-TileColor', content: '#586276' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'tags, go, here'
				},
				{
					hid: 'description',
					name: 'description',
					content: 'DESCRIPTION HERE'
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: 'TITLE HERE'
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: 'DESCRIPTION HERE'
				},
				{ hid: 'og:image', name: 'og:image', content: 'og-image.png' },
				{ hid: 'og:url', name: 'og:url', content: 'https://test.brth.uk' },
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: 'TITLE HERE'
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: 'DESCRIPTION HERE'
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: '/twitter.png'
				},
				{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
			],
			link: [
				{ rel: 'icon', type: 'image', href: '/favicon.ico' }
				// { rel: 'stylesheet', href: 'https://use.typekit.net/nyk3qjw.css' },
			],
			script: [
				{
					hid: 'umami-script',
					src: 'https://view.cnnct.uk/script.js',
					async: true,
					'data-website-id': '3d897626-f5f5-43ba-89f7-53ef9e247d4b'
				}
			]
		},
		pageTransition: { name: 'fade', mode: 'out-in' }
	},
	devtools: { enabled: true },
	site: {
		name: "Ben's Site",
		description: 'DESCRIPTION HERE',
		url: 'https://test.brth.uk',
		defaultLocale: 'en-GB'
	},
	modules: [
		'@nuxtjs/device',
		'@nuxtjs/google-fonts',
		'@nuxtjs/eslint-module',
		'@nuxtjs/device',
		'@nuxtjs/html-validator',
		'@nuxtjs/fontaine',
		'@nuxt/image',
		'@nuxt/content',
		'@nuxt/ui',
		'@vueuse/nuxt',
		'@vite-pwa/nuxt',
		'@nuxtseo/module',
		'@morev/vue-transitions/nuxt',
		'nuxt-simple-robots',
		'nuxt-simple-sitemap',
		'nuxt-schema-org',
		'nuxt-icon',
		'nuxt-lodash',
		'nuxt-headlessui',
		'nuxt-payload-analyzer',
		'dayjs-nuxt'
	],
	css: ['~/assets/css/main.css'],
	tailwindcss: {
		viewer: false
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	}
})
