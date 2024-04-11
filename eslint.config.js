import { js, vue, prettier } from './src/index.js';
import { globals } from './src/utils.js';

export default [
  ...js,
  ...vue,
  ...prettier,
  {
    files: ['test/build-files/**/*'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
