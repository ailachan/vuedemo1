import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{//前端配置访问哪些后台支持跨域
    proxy:{ //配置代理
      '/api':{ //代理路径别名
        target:'http://localhost:8080',//要代理的路径
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, '') //路径替换重写
      }
    },
  }
})
