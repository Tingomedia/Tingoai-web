import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["yup"],
  },
  plugins: [
    react(),
    visualizer({
      open: true, // Automatically opens in browser
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
