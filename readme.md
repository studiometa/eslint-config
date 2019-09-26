# Studio Meta ESLint Configurations

[![NPM Version](https://img.shields.io/npm/v/@studiometa/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@studiometa/eslint-config)
[![Dependency Status](https://img.shields.io/david/studiometa/eslint-config.svg?label=deps&style=flat-square)](https://david-dm.org/studiometa/eslint-config)
[![devDependency Status](https://img.shields.io/david/dev/studiometa/eslint-config.svg?label=devDeps&style=flat-square)](https://david-dm.org/studiometa/eslint-config?type=dev)

> Set of [ESLint](https://eslint.org/) configurations for multiple usages.

## Installation

Install the package with NPM:

```bash
npm install --save-dev eslint prettier @studiometa/eslint-config
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


## Rules documentation

Find below some documentation on the rules this configuration extends. Some are best practices, some are more opinionated choices.

### `eslint:recommended`

These rules report common problems we can encounter in JavaScript. The full list can be found in the [ESLint documentation](https://eslint.org/docs/rules/).

### `eslint-config-airbnb-base`

People at Airbnb have written a [detailed documentation](https://github.com/airbnb/javascript#readme) of their JavaScript style guide and have published ESLint configurations to enforce it.

### `plugin:prettier/recommended`

This plugin turns off all ESLint stylistic rules that might conflict with [Prettier](https://github.com/prettier/prettier). You can find out more on the [project's repository](https://github.com/prettier/eslint-config-prettier#readme).                    |

### `plugin:vue/recommended`

For all `*.vue` files, we use the [official ESLint plugin](https://eslint.vuejs.org/) created by Vue.js. The following rules are also specified:

<table>
  <thead>
    <tr>
      <th>Rule</th>
      <th>Configuration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://eslint.vuejs.org/rules/html-closing-bracket-newline.html">code>vue/html-closing-bracket-newline</code></a></td>
      <td>
        <pre>[
  'error',
  {
    singleline: 'never',
    multiline: 'never',
  },
]</pre>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/indent"><code>indent</code></a></td>
      <td><code>'off'</code></td>
    </tr>
    <tr>
      <td><a href="https://eslint.vuejs.org/rules/script-indent.html"><code>vue/script-indent</code></a></td>
      <td>
        <pre>[
  'error',
  2,
  {
    baseIndent: 1,
    switchCase: 1,
  },
]</pre>
      </td>
    </tr>
  </tbody>
</table>

### Custom rules configurations

Below are some rules specific to this configuration.

#### Best practices

Some rules considered as best practices.

|                                     Rule                                     |         Configuration          |
|------------------------------------------------------------------------------|--------------------------------|
| [`curly`](https://eslint.org/docs/rules/curly)                               | `['error', 'all']`             |
| [`dot-notation`](https://eslint.org/docs/rules/dot-notation)                 | `'warn'`                       |
| [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)                             | `['warn', 'always']`           |
| [`no-alert`](https://eslint.org/docs/rules/no-alert)                         | `'error'`                      |
| [`no-empty-function`](https://eslint.org/docs/rules/no-empty-function)       | `'error'`                      |
| [`no-eval`](https://eslint.org/docs/rules/no-eval)                           | `'error'`                      |
| [`no-implicit-coercion`](https://eslint.org/docs/rules/no-implicit-coercion) | `['error', { allow: ['!!'] }]` |
| [`no-implicit-globals`](https://eslint.org/docs/rules/no-implicit-globals)   | `'error'`                      |
| [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces)           | `'warn'`                       |
| [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)       | `['warn', { props: false }]`   |
| [`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat)       | `'warn'`                       |
| [`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)       | `'warn'`                       |
| [`strict`](https://eslint.org/docs/rules/strict)                             | `['error', 'function']`        |
| [`vars-on-top`](https://eslint.org/docs/rules/vars-on-top)                   | `'error'`                      |
| [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife)                       | `['error', 'any']`             |
| [`yoda`](https://eslint.org/docs/rules/yoda)                                 | `['error', 'never']`           |

#### Possible errors

These rules help developpers avoir some possible errors.

|                            Rule                            |                       Configuration                       |
|------------------------------------------------------------|-----------------------------------------------------------|
| [`no-console`](https://eslint.org/docs/rules/no-console)   | `process.env.NODE_ENV !== 'production' ? 'off' : 'error'` |
| [`no-debugger`](https://eslint.org/docs/rules/no-debugger) | `process.env.NODE_ENV !== 'production' ? 'off' : 'error'` |

#### Stylistic issues

<table>
  <thead>
    <tr>
      <th>Rule</th>
      <th>Configuration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://eslint.org/docs/rules/array-bracket-spacing"><code>array-bracket-spacing</code></a></td>
      <td>
        <pre>[
  'warn',
  'always',
  {
    arraysInArrays: false,
    objectsInArrays: false
  },
]</pre>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/camelcase"><code>camelcase</code></a></td>
      <td>
        <code>['warn', { properties: 'always' }]</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/comma-dangle"><code>comma-dangle</code></a></td>
      <td>
        <code>['warn', 'always-multiline']</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/comma-spacing"><code>comma-spacing</code></a></td>
      <td>
        <code>['warn', { before: false, after: true }]</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/indent"><code>indent</code></a></td>
      <td>
        <code>['warn', 2]</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/max-len"><code>max-len</code></a></td>
      <td>
        <pre>[
  'warn',
  {
    code: 80,
    ignoreUrls: true,
    ignoreRegExpLiterals: true
  },
]</pre>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/no-multi-assign"><code>no-multi-assign</code></a></td>
      <td>
        <code>'warn'</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/no-trailing-spaces"><code>no-trailing-spaces</code></a></td>
      <td>
        <code>'warn'</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/no-unneeded-ternary"><code>no-unneeded-ternary</code></a></td>
      <td>
        <code>'warn'</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/quotes"><code>quotes</code></a></td>
      <td>
        <code>['warn', 'single']</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/require-jsdoc"><code>require-jsdoc</code></a></td>
      <td>
        <pre>[
  'warn',
  {
    require: {
      FunctionDeclaration: true,
      MethodDefinition: true,
      ClassDeclaration: true,
      ArrowFunctionExpression: false,
      FunctionExpression: false,
    },
  },
]</pre>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/semi"><code>semi</code></a></td>
      <td>
        <code>['warn', 'always']</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/semi-style"><code>semi-style</code></a></td>
      <td>
        <code>['warn', 'last']</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://eslint.org/docs/rules/space-before-blocks"><code>space-before-blocks</code></a></td>
      <td>
        <code>'warn'</code>
      </td>
    </tr>
  </tbody>
</table>

#### ES6

|                                       Rule                                       |               Configuration               |
|----------------------------------------------------------------------------------|-------------------------------------------|
| [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing)                   | `['warn', { before: true, after: true }]` |
| [`no-var`](https://eslint.org/docs/rules/no-var)                                 | `'error'`                                 |
| [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)             | `'error'`                                 |
| [`prefer-const`](https://eslint.org/docs/rules/prefer-const)                     | `'error'`                                 |
| [`prefer-template`](https://eslint.org/docs/rules/prefer-template)               | `'error'`                                 |
| [`rest-spread-spacing`](https://eslint.org/docs/rules/rest-spread-spacing)       | `['warn', 'never']`                       |
| [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing) | `['warn', 'never']`
