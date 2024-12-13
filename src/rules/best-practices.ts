import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import * as eslintrc from '@eslint/eslintrc';
import type { Linter } from 'eslint';

export const bestPractices = {
  languageOptions: {
    ...eslintrc.Legacy.environments.get('es2024'),
  },
  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: {
    curly: ['error', 'all'],
    'dot-notation': 'warn',
    eqeqeq: ['warn', 'always'],
    'no-alert': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-implicit-globals': 'error',
    'no-multi-spaces': 'warn',
    'no-param-reassign': ['warn', { props: false }],
    'no-useless-concat': 'warn',
    'no-useless-return': 'warn',
    strict: ['error', 'function'],
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'any'],
    yoda: ['error', 'never'],
    'class-methods-use-this': 'off',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-object-has-own': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/throw-new-error': 'error',
  } as Record<string, Linter.RuleEntry>,
};
