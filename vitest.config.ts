// vitest.config.ts
import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vitest"],
      dts: true, // generate TypeScript declaration
    }),
  ],
  test: {
    globals: true,
    setupFiles: ["./tests/setup.ts"], // Specify your setup file
  },
});
