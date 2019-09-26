module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
    require.resolve('./rules/best-practices.js'),
    require.resolve('./rules/possible-errors.js'),
    require.resolve('./rules/stylistic-issues.js'),
    require.resolve('./rules/es6.js'),
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        vue: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  overrides: [
    require('./overrides/vue'),
    require('./overrides/build-files'),
  ],
};
