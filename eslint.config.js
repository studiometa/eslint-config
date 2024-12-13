import { defineConfig, js, vueTs, prettier, ts, globals } from './dist/index.js';

export default defineConfig(js, ts, vueTs, prettier, {
  files: ['test/build-files/**/*'],
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
});
