# Studiometa ESLint Configurations

> Basic and extension of Studio Meta's ESLint configurations.

## Installation

Use your favorite package manager to install the package:

```bash
yarn add --dev @studiometa/eslint-config
# OR
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
