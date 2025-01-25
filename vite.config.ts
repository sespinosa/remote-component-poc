import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: "./src/main.tsx", // Entry point of your project
      name: "RemoteComponentPOC", // Global name for the library
      fileName: (format) => `remote-component-poc.${format}.js`,
      formats: ["es", "umd"], // Output both ES and UMD formats
    },
    rollupOptions: {
      // Do not mark React or ReactDOM as external to include them in the bundle
      external: [], // Empty array ensures nothing is externalized
      output: {
        globals: {}, // No global mappings needed since React is bundled
      },
    },
    target: "esnext", // Use modern JavaScript for compatibility with modern browsers
  },
  define: {
    "process.env": {}, // Replace process.env to avoid Node.js-specific errors
  },
});
