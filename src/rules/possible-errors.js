import process from 'node:process';

export default {
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    'no-debugger': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
  },
};
