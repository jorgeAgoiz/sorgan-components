import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "sorgan-components",
      formats: ["es", "umd"],
      fileName: (format) => `sorgan-components.${format}.js`,
    },
  },
});
