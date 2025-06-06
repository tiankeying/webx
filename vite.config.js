import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 监听所有网络接口
    port: 8085,      // 指定端口号
    strictPort: true, // 如果端口被占用直接退出
    open: false       // 自动打开浏览器
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: './',
  build: {
    chunkSizeWarningLimit: 1500,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vue-vendor';
            } else if (id.includes('axios')) {
              return 'axios-vendor';
            }else if (id.includes('vant')) {
              return 'vant-vendor';
            } else if (id.includes('bootstrap')) {
              return 'bootstrap-vendor';
            } else if (id.includes('fontawesome')) {
              return 'fontawesome-vendor';
            } else {
              return 'other-vendor';
            }
          }
        },
      },
    },
  },
})