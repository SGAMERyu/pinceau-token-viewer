import { join, resolve } from "pathe";
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": __dirname,
    },
  },
  plugins: [
    Vue({
      script: {
        defineModel: true,
      },
    }),
    Components({
      dirs: ["components"],
      dts: join(__dirname, "components.d.ts"),
    }),
    AutoImport({
      dts: join(__dirname, "auto-imports.d.ts"),
      imports: ["vue", "@vueuse/core"],
    }),
    Unocss(),
  ],
  build: {
    target: "esnext",
    outDir: resolve(__dirname, "../../dist/client"),
    minify: false, // 'esbuild',
    emptyOutDir: true,
  },
});