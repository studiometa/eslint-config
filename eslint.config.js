import { defineConfig, js, vue, prettier, ts, globals } from './src/index.js';

export default defineConfig(js, ts({ vue: true }), vue, prettier, {
  files: ['test/build-files/**/*'],
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
});
