# Studio Meta ESLint Configurations

[![NPM Version](https://img.shields.io/npm/v/@studiometa/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@studiometa/eslint-config)
[![Dependency Status](https://img.shields.io/david/studiometa/eslint-config.svg?label=deps&style=flat-square)](https://david-dm.org/studiometa/eslint-config)
[![devDependency Status](https://img.shields.io/david/dev/studiometa/eslint-config.svg?label=devDeps&style=flat-square)](https://david-dm.org/studiometa/eslint-config?type=dev)

> Set of [ESLint](https://eslint.org/) configurations for multiple usages.

## Installation

Install the package with Yarn:

```bash
yarn add --dev @studiometa/eslint-config
```

Or with NPM:

```bash
npm install --save-dev @studiometa/eslint-config
```

## Usage

To use the basic configuration, you just have to install this package and reference it in your ESLint configuration file:

```js
module.exports = {
  extends: '@studiometa/eslint-config/base',
};
```

If your project is a Vue web app, you can extend the Vue specific configuration:

```js
module.exports = {
  extends: '@studiometa/eslint-config/vue',
};
```


## To Do

- Soften stylistic issues to warning, not errors
- Add some documentation
