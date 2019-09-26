module.exports = {
  files: ['**/*.vue'],
  extends: ['plugin:vue/recommended'],
  rules: {
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    indent: 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1,
      },
    ],
  },
};
