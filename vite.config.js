import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'virtual-assistant': resolve(__dirname, 'virtual-assistant.html'),
        'press-release': resolve(__dirname, 'press-release.html'),
        'lead-generation': resolve(__dirname, 'lead-generation.html'),
        'website-design': resolve(__dirname, 'website-design.html'),
        'google-maps': resolve(__dirname, 'google-maps.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        tos: resolve(__dirname, 'tos.html'),
        'how-to-find-a-reliable-virtual-assistant-for-your-dental-practice-in-2026': resolve(__dirname, 'how-to-find-a-reliable-virtual-assistant-for-your-dental-practice-in-2026.html'),
      },
    },
  },
});
