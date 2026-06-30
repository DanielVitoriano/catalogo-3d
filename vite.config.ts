import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Mude 'catalogo-3d' para o nome exato do seu repositório no GitHub
export default defineConfig({
  plugins: [react()],
  base: '/catalogo-3d/',
})
