module.exports = {
  root: true,
  extends: ['eslint-config/base', 'plugin:vue/recommended'],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1,
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
};
