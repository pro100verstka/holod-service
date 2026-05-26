import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/Имя репозитория/', // <-- замените на имя вашего репо
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})