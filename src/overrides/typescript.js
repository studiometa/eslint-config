module.exports = {
  files: ['*.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb-typescript/base',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
