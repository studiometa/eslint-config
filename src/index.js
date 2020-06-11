module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
    require.resolve('./rules/best-practices.js'),
    require.resolve('./rules/possible-errors.js'),
    require.resolve('./rules/stylistic-issues.js'),
    require.resolve('./rules/es6.js'),
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
        extensions: ['.js', '.vue', '.mjs', '.jsx'],
      },
    },
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    require('./overrides/build-files'),
    require('./overrides/jest'),
    require('./overrides/prettier'),
    require('./overrides/vue'),
  ],
};
