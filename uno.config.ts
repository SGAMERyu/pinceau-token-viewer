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
      "text-lg flex-grow text-slate-900 text-center md:text-left mb-2",
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
