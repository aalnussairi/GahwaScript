import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['quickjs-emscripten', '@jitl/quickjs-wasmfile-release-sync'],
    },
  },
});
