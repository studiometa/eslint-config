require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
    require.resolve('./rules/best-practices.js'),
    require.resolve('./rules/possible-errors.js'),
    require.resolve('./rules/stylistic-issues.js'),
    require.resolve('./rules/es6.js'),
    require.resolve('./rules/jsdoc.js'),
    require.resolve('./rules/import.js'),
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    require('./overrides/build-files.js'),
    require('./overrides/jest.js'),
    require('./overrides/prettier.js'),
    require('./overrides/vue.js'),
  ],
};
