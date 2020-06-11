module.exports = {
  files: ['*.vue'],
  extends: ['plugin:vue/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    /**
     * Disallow orphan closing `>`
     * @see https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
     */
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    /**
     * Disable the core indent rule in favor of the `vue/script-indent` one
     * @see https://eslint.org/docs/rules/indent
     */
    indent: 'off',
    /**
     * Force content of scripts tag to be nested
     * @see https://eslint.vuejs.org/rules/script-indent.html
     */
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1,
      },
    ],
    /**
     * Allow a maximum of 3 attributes on a same line
     * @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
     */
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
};
