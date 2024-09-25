/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      name: "Murmurhash",
      entry: {
        index: "./lib/index.ts",
      },
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        switch (format) {
          case "es":
          case "esm": {
            return "index.js";
          }
          case "cjs":
          case "commonjs": {
            return "index.cjs";
          }
          case "umd": {
            return "index.umd.js";
          }
        }
        throw new Error(`unknown format: ${format}`);
      },
    },
    outDir: "./dist/",
  },
  server: {
    host: "127.0.0.1",
  },
  plugins: [dts()],
});
