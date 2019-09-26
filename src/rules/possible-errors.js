module.exports = {
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    'no-debugger': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
  },
};
