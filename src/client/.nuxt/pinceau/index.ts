export const theme = {
  media: {
    sm: {
      value: "(min-width: 640px)",
      variable: "var(--media-sm)",
      raw: "(min-width: 640px)",
    },
    md: {
      value: "(min-width: 768px)",
      variable: "var(--media-md)",
      raw: "(min-width: 768px)",
    },
    lg: {
      value: "(min-width: 1024px)",
      variable: "var(--media-lg)",
      raw: "(min-width: 1024px)",
    },
    xl: {
      value: "(min-width: 1280px)",
      variable: "var(--media-xl)",
      raw: "(min-width: 1280px)",
    },
    xxl: {
      value: "(min-width: 1536px)",
      variable: "var(--media-xxl)",
      raw: "(min-width: 1536px)",
    },
  },
  font: {
    primary: {
      value: "Inter, sans-serif",
      variable: "var(--font-primary)",
      raw: "Inter, sans-serif",
    },
    secondary: {
      value: "PaytoneOne, serif",
      variable: "var(--font-secondary)",
      raw: "PaytoneOne, serif",
    },
  },
} as const;

export type GeneratedPinceauTheme = typeof theme;

export type GeneratedPinceauPaths =
  | "media.sm"
  | "media.md"
  | "media.lg"
  | "media.xl"
  | "media.xxl"
  | "font.primary"
  | "font.secondary"
  | "color.white"
  | "color.black"
  | "color.dimmed"
  | "color.dark"
  | "color.blue.50"
  | "color.blue.100"
  | "color.blue.200"
  | "color.blue.300"
  | "color.blue.400"
  | "color.blue.500"
  | "color.blue.600"
  | "color.blue.700"
  | "color.blue.800"
  | "color.blue.900"
  | "color.red.50"
  | "color.red.100"
  | "color.red.200"
  | "color.red.300"
  | "color.red.400"
  | "color.red.500"
  | "color.red.600"
  | "color.red.700"
  | "color.red.800"
  | "color.red.900"
  | "color.green.50"
  | "color.green.100"
  | "color.green.200"
  | "color.green.300"
  | "color.green.400"
  | "color.green.500"
  | "color.green.600"
  | "color.green.700"
  | "color.green.800"
  | "color.green.900"
  | "color.yellow.50"
  | "color.yellow.100"
  | "color.yellow.200"
  | "color.yellow.300"
  | "color.yellow.400"
  | "color.yellow.500"
  | "color.yellow.600"
  | "color.yellow.700"
  | "color.yellow.800"
  | "color.yellow.900"
  | "color.grey.50"
  | "color.grey.100"
  | "color.grey.200"
  | "color.grey.300"
  | "color.grey.400"
  | "color.grey.500"
  | "color.grey.600"
  | "color.grey.700"
  | "color.grey.800"
  | "color.grey.900"
  | "color.primary.100"
  | "color.primary.200"
  | "color.primary.300"
  | "color.primary.400"
  | "color.primary.500"
  | "color.primary.600"
  | "color.primary.700"
  | "color.primary.800"
  | "color.primary.900"
  | "shadow.xs"
  | "shadow.sm"
  | "shadow.md"
  | "shadow.lg"
  | "shadow.xl"
  | "shadow.xxl"
  | "fontWeight.thin"
  | "fontWeight.extralight"
  | "fontWeight.light"
  | "fontWeight.normal"
  | "fontWeight.medium"
  | "fontWeight.semibold"
  | "fontWeight.bold"
  | "fontWeight.extrabold"
  | "fontWeight.black"
  | "fontSize.xs"
  | "fontSize.sm"
  | "fontSize.md"
  | "fontSize.lg"
  | "fontSize.xl"
  | "fontSize.xxl"
  | "fontSize.3xl"
  | "fontSize.4xl"
  | "fontSize.5xl"
  | "fontSize.6xl"
  | "fontSize.7xl"
  | "fontSize.8xl"
  | "fontSize.9xl"
  | "letterSpacing.tighter"
  | "letterSpacing.tight"
  | "letterSpacing.normal"
  | "letterSpacing.wide"
  | "letterSpacing.wider"
  | "letterSpacing.widest"
  | "lead.none"
  | "lead.tight"
  | "lead.snug"
  | "lead.normal"
  | "lead.relaxed"
  | "lead.loose"
  | "radii.2xs"
  | "radii.xs"
  | "radii.sm"
  | "radii.md"
  | "radii.lg"
  | "radii.xl"
  | "radii.xxl"
  | "radii.full"
  | "size.4"
  | "size.6"
  | "size.8"
  | "size.12"
  | "size.16"
  | "size.20"
  | "size.24"
  | "size.32"
  | "size.40"
  | "size.48"
  | "size.56"
  | "size.64"
  | "size.80"
  | "size.104"
  | "size.200"
  | "space.0"
  | "space.1"
  | "space.2"
  | "space.4"
  | "space.6"
  | "space.8"
  | "space.10"
  | "space.12"
  | "space.16"
  | "space.20"
  | "space.24"
  | "space.32"
  | "space.40"
  | "space.44"
  | "space.48"
  | "space.56"
  | "space.64"
  | "space.80"
  | "space.104"
  | "space.140"
  | "space.200"
  | "borderWidth.noBorder"
  | "borderWidth.sm"
  | "borderWidth.md"
  | "borderWidth.lg"
  | "opacity.noOpacity"
  | "opacity.bright"
  | "opacity.light"
  | "opacity.soft"
  | "opacity.medium"
  | "opacity.high"
  | "opacity.total"
  | "zIndex.0"
  | "zIndex.1"
  | "zIndex.2"
  | "zIndex.4"
  | "zIndex.6"
  | "zIndex.8"
  | "zIndex.10"
  | "zIndex.12"
  | "zIndex.16"
  | "zIndex.20"
  | "zIndex.24"
  | "zIndex.32"
  | "zIndex.40"
  | "zIndex.44"
  | "zIndex.48"
  | "zIndex.56"
  | "zIndex.64"
  | "zIndex.80"
  | "zIndex.104"
  | "zIndex.140"
  | "zIndex.200"
  | "transition.all";

export default theme;
