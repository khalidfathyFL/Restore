import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// change port to be 3000 like rreact
export default defineConfig({
  server: {
    port:3000
  },
  plugins: [react()],
})
