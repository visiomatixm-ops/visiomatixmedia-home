// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: "dist",
//     sourcemap: false,
//     minify: "terser",
//   },
//   server: {
//     proxy: {
//       "/admin": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//       },
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//       },
//     },
//   },
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['lemon-pronto-hypertext.ngrok-free.dev']
  }
})