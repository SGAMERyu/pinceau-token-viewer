import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

// @unocss-include
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: {
    "token-name":
      "font-medium text-lg text-slate-500 font-mono mb-3 dark:text-slate-400",
    "token-value": "text-sm text-slate-9 font-mono"
    },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
