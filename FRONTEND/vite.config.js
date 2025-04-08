// Keep only one set of imports
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Your configuration
export default defineConfig({
  plugins: [react()],
  // ... other configuration options
})