module.exports = {
  rules: {
    'array-bracket-spacing': [
      'error',
      'always',
      {
        arraysInArrays: false,
        objectsInArrays: false,
      },
    ],
    'no-trailing-spaces': 'error',
    indent: [ 'error', 2 ],
    quotes: [ 'error', 'single' ],
    semi: [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', { before: false, after: true }],
    'max-len': [
      'error',
      { code: 80, ignoreUrls: true, ignoreRegExpLiterals: true },
    ],
    'no-multi-assign': 'error',
    'no-unneeded-ternary': 'error',
    'require-jsdoc': [ 'warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: true,
      },
    }],
    'semi-style': [ 'error', 'last' ],
    'space-before-blocks': 'error',
    camelcase: [ 'error', { properties: 'always' }],
  },
};
