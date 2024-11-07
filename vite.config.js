import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // SVG를 아이콘처럼 사용할 수 있도록 설정
        exportType: 'named', // named export를 사용하도록 설정
      },
    }),
  ],
  server: {
    proxy: {
      '/auth': {
        target: 'https://mature-leigha-jogyewon-front-4fd9dfe2.koyeb.app:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, ''),
        secure: true,
        ws: true,
      },
    },
  },
  publicDir: 'public',
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@apis', replacement: '/src/apis' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@util', replacement: '/src/util' },
      { find: '@recoil', replacement: '/src/recoil' },
      { find: '@hooks', replacement: '/src/hooks' },
    ],
  },
});
