import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // The 'base' path MUST match your repo name
  base: "/WebPortoBayu/", 
  plugins: [react()],
});