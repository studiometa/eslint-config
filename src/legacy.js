module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base/legacy',
    require.resolve('./rules/best-practices.js'),
    require.resolve('./rules/possible-errors.js'),
    require.resolve('./rules/stylistic-issues.js'),
    'plugin:prettier/recommended',
  ],
};
