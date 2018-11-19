# Studiometa ESLint Configurations

> Basic and extension of Studio Meta's ESLint configurations.

# Usage

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
