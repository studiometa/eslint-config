module.exports = {
  rules: {
    curly: ['error', 'all'],
    'dot-notation': 'warn',
    eqeqeq: ['warn', 'always'],
    'no-alert': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-implicit-globals': 'error',
    'no-multi-spaces': 'warn',
    'no-param-reassign': ['warn', { props: false }],
    'no-useless-concat': 'warn',
    'no-useless-return': 'warn',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'any'],
    yoda: ['error', 'never'],
  },
};
