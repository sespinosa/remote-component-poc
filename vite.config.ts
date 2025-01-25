// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       react: path.resolve("./node_modules/react"),
//       "react-dom": path.resolve("./node_modules/react-dom"),
//     },
//   },
//   build: {
//     lib: {
//       entry: "./src/App.tsx", // Entry point of your project
//       name: "RemoteComponentPOC", // Global name for the library
//       fileName: (format) => `remote-component-poc.${format}.js`,
//       formats: ["es", "umd"], // Output both ES and UMD formats
//     },
//     rollupOptions: {
//       external: ["react", "react-dom"], // React and ReactDOM are external
//       output: {
//         globals: {
//           react: "React",
//           "react-dom": "ReactDOM",
//         },
//       },
//     },
//     target: "esnext", // Use modern JavaScript for compatibility with modern browsers
//   },
//   define: {
//     "process.env": {}, // Replace process.env to avoid Node.js-specific errors
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Entry point for your library
      name: "RemoteComponentPOC", // Global name for UMD builds
      fileName: (format) => `remote-component-poc.${format}.js`,
      formats: ["es", "umd"], // Outputs both ESM and UMD builds
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
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
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
    },
  },
});
