module.exports = {
  rules: {
    curly: [ 'error', 'all' ],
    'dot-notation': 'error',
    eqeqeq: [ 'error', 'always' ],
    'no-alert': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-implicit-coercion': [ 'error', { allow: [ '!!' ] }],
    'no-implicit-globals': 'error',
    'no-multi-spaces': 'error',
    'no-useless-return': 'error',
    'vars-on-top': 'error',
    'wrap-iife': [ 'error', 'any' ],
    yoda: [ 'error', 'never' ],
  },
};
