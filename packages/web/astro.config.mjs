import netlify from '@astrojs/netlify';
import { defineConfig } from 'astro/config';

export default defineConfig({
  adapter: netlify(),
  vite: {
    optimizeDeps: {
      exclude: ['quickjs-emscripten', '@jitl/quickjs-wasmfile-release-sync'],
    },
  },
});
