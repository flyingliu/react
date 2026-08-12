import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages 项目站点部署到 /react/ 子路径；本地开发仍用 /
  base: process.env.GITHUB_ACTIONS ? '/react/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '/@': path.resolve(__dirname, './src'),
    },
  },
})
