module.exports = {
  files: ['**/*.vue'],
  extends: ['plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
    },
    ecmaVersion: 2019,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'vue/html-closing-bracket-newline': 'off',
    indent: 'off',
    'vue/script-indent': 'off',
    /**
     * Allow a maximum of 3 attributes on a same line.
     * @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
     */
    'vue/max-attributes-per-line': 'off',
    /**
     * Force kebab-case components' name in templates.
     * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
     */
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    /**
     * Force kebab-case name for events.
     * @see https://eslint.vuejs.org/rules/custom-event-name-casing.html
     */
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/html-button-has-type': 'warn',
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/next-tick-style': ['warn', 'promise'],
    'vue/no-boolean-default': 'warn',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'warn',
    'vue/no-invalid-model-keys': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-template-target-blank': 'warn',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-unused-refs': 'warn',
    'vue/no-use-computed-property-like-method': 'warn',
    'vue/no-useless-mustaches': 'warn',
    'vue/no-useless-template-attributes': 'warn',
    'vue/no-useless-v-bind': 'warn',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-direct-export': 'warn',
    'vue/v-on-event-hyphenation': 'warn',
    'vue/v-on-function-call': 'warn',
    'vue/valid-next-tick': 'warn',
    'vue/eqeqeq': ['warn', 'always'],
    'vue/camelcase': ['warn', { properties: 'always' }],
    'vue/no-irregular-whitespace': 'warn',
    'vue/multi-word-component-names': 'warn',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
