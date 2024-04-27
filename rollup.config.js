import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    name: "next-js-active-link",
  },
  external: ["react", "react-dom", "next"],
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
