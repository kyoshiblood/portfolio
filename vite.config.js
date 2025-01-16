import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({server: {
  host: '0.0.0.0',  // Permite o acesso de qualquer interface de rede
  port: 3000,
},
  plugins: [vue()],
})
