module.exports = {
  ...require('./src/index.js'),
  env: {
    node: true,
    browser: false,
  },
  rules: {
    'global-require': 'off',
  },
};
