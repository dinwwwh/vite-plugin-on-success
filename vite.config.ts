import { defineConfig } from "vitest/config";
import { checker } from "vite-plugin-checker";
import dts from "vite-plugin-dts";

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    environment: "node",
  },
  build: {
    ssr: true,
    sourcemap: true,
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
  },
  plugins: [dts({}), checker({ typescript: true })],
});
