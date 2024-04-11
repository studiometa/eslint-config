import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import bestPractices from './rules/best-practices.js';
import es6 from './rules/es6.js';
import jsdoc from './rules/jsdoc.js';
// import tseslint from 'typescript-eslint';

export const js = [eslintJs.configs.recommended, bestPractices, es6, jsdoc];

export const prettier = [eslintConfigPrettier, eslintPluginPrettierRecommended];

export const vue = [...pluginVue.configs['flat/recommended']];

// @todo wait for typescript-eslint to support ESLint v9
// @see https://github.com/typescript-eslint/typescript-eslint/issues/8211
// export const ts = tseslint.config(eslintJs.configs.recommended, ...tseslint.configs.recommended);
