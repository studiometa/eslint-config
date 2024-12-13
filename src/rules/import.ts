// @todo update eslint-plugin-import when it supports ESLint v9
// @see https://github.com/import-js/eslint-plugin-import/issues/2948
export const imports = {
  plugins: ['eslint-plugin-import'],
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-duplicates': ['error', { considerQueryString: true }],
  },
};
