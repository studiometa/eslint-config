module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'airbnb',
		'prettier',
	],
	rules: {
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	plugins: ['prettier'],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2017,
		sourceType: 'module',
	},
	env: {
		es6: true,
	},
};
