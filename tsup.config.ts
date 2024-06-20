import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/v4/index.ts", "src/v5/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
});
