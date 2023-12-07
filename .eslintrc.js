module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'none',
				bracketSpacing: true,
				printWidth: 120
			}
		],
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off'
	}
}
