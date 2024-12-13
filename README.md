# @studiometa/eslint-config

[![NPM Version](https://img.shields.io/npm/v/@studiometa/eslint-config.svg?style=flat&colorB=3e63dd&colorA=414853)](https://www.npmjs.com/package/@studiometa/eslint-config/)
[![Downloads](https://img.shields.io/npm/dm/@studiometa/eslint-config?style=flat&colorB=3e63dd&colorA=414853)](https://www.npmjs.com/package/@studiometa/eslint-config/)
[![Size](https://img.shields.io/bundlephobia/minzip/@studiometa/eslint-config?style=flat&colorB=3e63dd&colorA=414853&label=size)](https://bundlephobia.com/package/@studiometa/eslint-config)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@studiometa/eslint-config?style=flat&colorB=3e63dd&colorA=414853)](https://david-dm.org/studiometa/eslint-config)

Set of [ESLint](https://eslint.org/) configurations for multiple usages.

## Installation

Install the package with NPM along ESLint and Prettier:

```bash
npm install --save-dev eslint prettier @studiometa/eslint-config
```

## Usage

To use the basic configuration, you just have to install this package and reference it in your ESLint configuration file:

```js
import { defineConfig, js, prettier, globals } from '@studiometa/eslint-config';

export default defineConfig(js, prettier, {
  files: ['./src/js/**/*.js'],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
});
```

Make sure to always place the `prettier` configuration last to avoid rules conflicts.

Configurations for Vue 2, Vue 3 and TypeScript are also available:

**Vue 3**

```js
import { defineConfig, js, vue, prettier, globals } from '@studiometa/eslint-config';

export default defineConfig(js, vue, prettier, {
  files: ['./src/js/**/*.{js,vue}'],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
});
```

**TypeScript**

```js
import { defineConfig, ts, prettier, globals } from '@studiometa/eslint-config';

export default defineConfig(ts, prettier, {
  files: ['./src/js/**/*.ts'],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
});
```

**Vue 3 × TypeScript**

```js
import { defineConfig, ts, vueTs, prettier, globals } from '@studiometa/eslint-config';

export default defineConfig(ts, vueTs, prettier, {
  files: ['./src/js/**/*.{js,ts}'],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
});
```
