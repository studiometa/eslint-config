import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import bestPractices from './rules/best-practices.js';
import es6 from './rules/es6.js';
import jsdoc from './rules/jsdoc.js';

export const js = [eslintJs.configs.recommended, bestPractices, es6, jsdoc];

export const prettier = [eslintConfigPrettier, eslintPluginPrettierRecommended];

export const ts = tseslint.config({
  files: ['**/*.ts'],
  extends: tseslint.config(eslintJs.configs.recommended, tseslint.configs.strict),
  languageOptions: {
    parserOptions: {
      parser: tseslint.parser,
    },
  },
});

export const vue = [...pluginVue.configs['flat/recommended']];
export const vueTs = tseslint.config({
  files: ['**/*.vue'],
  extends: [ts, vue],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: globals.browser,
    parserOptions: {
      parser: tseslint.parser,
    },
  },
});

export const vue2 = [...pluginVue.configs['flat/vue2-recommended']];

export const defineConfig = tseslint.config;

export { default as globals } from 'globals';
