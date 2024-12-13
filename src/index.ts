import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { bestPractices } from './rules/best-practices.js';
import { es6 } from './rules/es6.js';
import { jsdoc } from './rules/jsdoc.js';

export const defineConfig = tseslint.config;

export const js = defineConfig(eslintJs.configs.recommended, bestPractices, es6, jsdoc);

export const prettier = defineConfig(eslintConfigPrettier, eslintPluginPrettierRecommended);

export const ts = defineConfig({
  files: ['**/*.ts'],
  extends: tseslint.config(bestPractices, es6, tseslint.configs.strict),
  languageOptions: {
    parserOptions: {
      parser: tseslint.parser,
    },
  },
});

export const vue = defineConfig(pluginVue.configs['flat/recommended']);
export const vueTs = defineConfig({
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

export const vue2 = defineConfig(pluginVue.configs['flat/vue2-recommended']);

export { default as globals } from 'globals';
