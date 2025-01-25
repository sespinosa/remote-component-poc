import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Entry point for the library
      name: "RemoteComponentPOC", // UMD global variable name
      fileName: (format) => `remote-component-poc.${format}.js`, // Output file names
      formats: ["es", "umd"], // Support both ES and UMD modules
    },
    rollupOptions: {
      // Externalize react and react-dom to avoid bundling them
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"), // Ensure React resolves correctly
      "react-dom": path.resolve("./node_modules/react-dom"),
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"), // Ensure proper environment variable replacement
  },
});
