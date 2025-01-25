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
      // Externalize dependencies to avoid bundling React and ReactDOM
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    target: "esnext", // Use modern JavaScript for browser compatibility
  },
  define: {
    // Replace process.env with an empty object to avoid issues in the browser
    "process.env": {},
  },
});
