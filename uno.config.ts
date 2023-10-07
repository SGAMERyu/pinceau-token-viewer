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
    "color-container":
      "flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5",
    "color-item":
      "h-10 lg:w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full border border-gray-200 border-solid",
    "color-title":
      "w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white",
    "color-value":
      "text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs",
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
