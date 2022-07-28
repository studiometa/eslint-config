module.exports = {
  plugins: ['eslint-plugin-import'],
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-duplicates': ['error', { considerQueryString: true }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
