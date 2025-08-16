const js = require('@eslint/js');

module.exports = [
	js.configs.recommended,
	{
		env: {
			node: true,
			es2025: true,
		},
		languageOptions: {
			ecmaVersion: 'latest',
		},
		rules: {
			curly: ['error', 'multi-line', 'consistent'],
			'no-empty-function': 'error',
			'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
			'no-var': 'error',
			'prefer-const': 'error',
			'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
			'no-trailing-spaces': 'error',
			'semi': ['error', 'always'],
		},
	},
];
