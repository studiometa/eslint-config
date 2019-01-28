module.exports = {
  rules: {
    'array-bracket-spacing': [
      'warn',
      'always',
      { arraysInArrays: false, objectsInArrays: false },
    ],
    camelcase: [ 'warn', { properties: 'always' }],
    'comma-dangle': [ 'warn', 'always-multiline' ],
    'comma-spacing': [ 'warn', { before: false, after: true }],
    indent: [ 'warn', 2 ],
    'max-len': [
      'warn',
      { code: 80, ignoreUrls: true, ignoreRegExpLiterals: true },
    ],
    'no-multi-assign': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    quotes: [ 'warn', 'single' ],
    'require-jsdoc': [
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
    ],
    semi: [ 'warn', 'always' ],
    'semi-style': [ 'warn', 'last' ],
    'space-before-blocks': 'warn',
  },
};
