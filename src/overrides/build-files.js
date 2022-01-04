module.exports = {
  files: [
    'gulpfile.js',
    'webpack.mix.js',
    '.*rc.js',
    '.*rc.mjs',
    '.*rc.cjs',
    '*.config.js',
    '*.config.mjs',
    '*.config.cjs',
  ],
  env: {
    node: true,
  },
  rules: {
    'global-require': 'off',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
  },
};
