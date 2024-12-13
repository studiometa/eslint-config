import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import bestPractices from './rules/best-practices.js';
import es6 from './rules/es6.js';
import jsdoc from './rules/jsdoc.js';
import tseslint from 'typescript-eslint';

export const js = [eslintJs.configs.recommended, bestPractices, es6, jsdoc];

export const prettier = [eslintConfigPrettier, eslintPluginPrettierRecommended];

export const vue = [...pluginVue.configs['flat/recommended']];
export const vue2 = [...pluginVue.configs['flat/vue2-recommended']];

export const ts = ({ vue = false } = {}) =>
  tseslint.config({
    files: vue ? ['**/*.{ts,vue}'] : ['**/*.ts'],
    extends: tseslint.config(eslintJs.configs.recommended, tseslint.configs.strict),
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  });

export const defineConfig = tseslint.config;

export { globals } from './utils.js';
