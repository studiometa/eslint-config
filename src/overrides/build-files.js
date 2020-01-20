module.exports = {
  files: ['gulpfile.js', 'webpack.mix.js', '.*rc.js', '*.config.js'],
  rules: {
    'global-require': 'off',
    'import/no-extraneous-dependencies': ['warning', { devDependencies: true }],
  },
};
