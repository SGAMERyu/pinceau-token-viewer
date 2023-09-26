import { join, resolve } from "pathe";
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import VueRouter from "unplugin-vue-router/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import Vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import PinceauViewer from "../node";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "~/": __dirname,
    },
  },
  plugins: [
    VueRouter({
      dts: join(__dirname, "router.d.ts"),
      routesFolder: [
        {
          src: join(__dirname, "src/pages"),
        },
      ],
    }),
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
      imports: ["vue", "@vueuse/core", VueRouterAutoImports],
    }),
    Unocss(),
    PinceauViewer({
      designTokenDir: join(__dirname, "./.nuxt/pinceau/"),
    }),
  ],
  build: {
    target: "esnext",
    outDir: resolve(__dirname, "../../dist/client"),
    minify: false, // 'esbuild',
    emptyOutDir: true,
  },
});
