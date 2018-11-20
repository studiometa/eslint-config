module.exports = {
  rules: {
    'array-bracket-spacing': [
      'error',
      'always',
      { arraysInArrays: false, objectsInArrays: false },
    ],
    camelcase: [ 'error', { properties: 'always' }],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', { before: false, after: true }],
    indent: [ 'error', 2 ],
    'max-len': [
      'error',
      { code: 80, ignoreUrls: true, ignoreRegExpLiterals: true },
    ],
    'no-multi-assign': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    quotes: [ 'error', 'single' ],
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    semi: [ 'error', 'always' ],
    'semi-style': [ 'error', 'last' ],
    'space-before-blocks': 'error',
  },
};
