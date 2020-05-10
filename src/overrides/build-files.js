module.exports = {
  files: ['gulpfile.js', 'webpack.mix.js', '.*rc.js', '*.config.js'],
  env: {
    node: true,
  },
  rules: {
    'global-require': 'off',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
  },
};
