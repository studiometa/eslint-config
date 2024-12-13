import type { Linter } from 'eslint';

export const es6 = {
  rules: {
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
  } as Record<string, Linter.RuleEntry>,
};
