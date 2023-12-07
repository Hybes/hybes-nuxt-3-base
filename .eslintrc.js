module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	extends: ['@nuxt/eslint-config'],
	rules: {
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off'
	}
}
