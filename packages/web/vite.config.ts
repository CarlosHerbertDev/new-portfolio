import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@mocks": path.resolve(__dirname, "src/mocks"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@styles": path.resolve(__dirname, "src/styles"),
      react: path.resolve('./node_modules/react'),
    },
  },
});
