import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '192.168.28.174', // Ensure this is a string
    port: 3000,
    open: true, // Optional: This will open the browser automatically
  }
})
