export const theme = {
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    xxl: "(min-width: 1536px)",
  },

  font: {
    primary: "Inter, sans-serif",
    secondary: "PaytoneOne, serif",
  },

  color: {
    white: "#FFFFFF",
    black: "#191919",
    dimmed: "rgba(0, 0, 0, .35)",
    dark: "rgba(255, 255, 255, .15)",
    blue: {
      50: "#C5CDE8",
      100: "#B6C1E2",
      200: "#99A8D7",
      300: "#7B8FCB",
      400: "#5E77C0",
      500: "#4560B0",
      600: "#354A88",
      700: "#25345F",
      800: "#161E37",
      900: "#06080F",
    },
    red: {
      50: "#FCDFDA",
      100: "#FACFC7",
      200: "#F7AEA2",
      300: "#F48E7C",
      400: "#F06D57",
      500: "#ED4D31",
      600: "blue",
      700: "#A0240E",
      800: "#6C1809",
      900: "#390D05",
    },
    green: {
      50: "#CDF4E5",
      100: "#BCF0DC",
      200: "#9AE9CB",
      300: "#79E2BA",
      400: "#57DAA8",
      500: "#36D397",
      600: "#26AB78",
      700: "#1B7D58",
      800: "#114F38",
      900: "#072117",
    },
    yellow: {
      50: "#FFFFFF",
      100: "#FFFFFF",
      200: "#FFFFFF",
      300: "#FFFFFF",
      400: "#FFFFFF",
      500: "#FBEFDE",
      600: "#F5D7AC",
      700: "#EFBE7A",
      800: "#E9A648",
      900: "#DE8D1B",
    },
    grey: {
      50: "#F7F7F7",
      100: "#EBEBEB",
      200: "#D9D9D9",
      300: "#C0C0C0",
      400: "#A8A8A8",
      500: "#979797",
      600: "#7E7E7E",
      700: "#656565",
      800: "#4D4D4D",
      900: "#2E2E2E",
    },
    primary: {
      100: {
        initial: "{color.red.100}",
        dark: "{color.red.900}",
      },
      200: {
        initial: "{color.red.200}",
        dark: "{color.red.800}",
      },
      300: {
        initial: "{color.red.300}",
        dark: "{color.red.700}",
      },
      400: {
        initial: "{color.red.400}",
        dark: "{color.red.600}",
      },
      500: {
        initial: "{color.red.500}",
        dark: "{color.red.500}",
      },
      600: {
        initial: "{color.red.600}",
        dark: "{color.red.400}",
      },
      700: {
        initial: "{color.red.700}",
        dark: "{color.red.300}",
      },
      800: {
        initial: "{color.red.800}",
        dark: "{color.red.200}",
      },
      900: {
        initial: "{color.red.900}",
        dark: "{color.red.100}",
      },
    },
  },

  shadow: {
    xs: "0 1px 2px 0 {color.grey.800}",
    sm: "0 1px 2px -1px {color.grey.800}, 0 1px 3px 0 {color.grey.800}",
    md: "0 2px 4px -2px {color.grey.800}, 0 4px 6px -1px {color.grey.800}",
    lg: "0 4px 6px -4px {color.grey.800}, 0 10px 15px -3px {color.grey.800}",
    xl: "0 8px 10px -6px {color.grey.800}, 0 20px 25px -5px {color.grey.800}",
    xxl: "0 25px 50px -12px {color.grey.800}",
  },

  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "60px",
    "7xl": "72px",
    "8xl": "96px",
    "9xl": "128px",
  },

  letterSpacing: {
    tighter: "-.05em",
    tight: "-0025em",
    normal: "0em",
    wide: "0025em",
    wider: ".05em",
    widest: "0.1em",
  },

  lead: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  radii: {
    "2xs": "0.125rem",
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1rem",
    xxl: "1.5rem",
    full: "9999px",
  },

  size: {
    4: "4px",
    6: "6px",
    8: "8px",
    12: "12px",
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",
    40: "40px",
    48: "48px",
    56: "56px",
    64: "64px",
    80: "80px",
    104: "104px",
    200: "200px",
  },

  space: {
    0: "0",
    1: "1px",
    2: "2px",
    4: "4px",
    6: "6px",
    8: "8px",
    10: "10px",
    12: "12px",
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",
    40: "40px",
    44: "44px",
    48: "48px",
    56: "56px",
    64: "64px",
    80: "80px",
    104: "104px",
    140: "140px",
    200: "200px",
  },

  borderWidth: {
    noBorder: "0",
    sm: "1px",
    md: "2px",
    lg: "3px",
  },

  opacity: {
    noOpacity: "0",
    bright: "0.1",
    light: "0.15",
    soft: "0.3",
    medium: "0.5",
    high: "0.8",
    total: "1",
  },

  zIndex: {
    0: "0",
    1: "1",
    2: "2",
    4: "4",
    6: "6",
    8: "8",
    10: "10",
    12: "12",
    16: "16",
    20: "20",
    24: "24",
    32: "32",
    40: "40",
    44: "44",
    48: "48",
    56: "56",
    64: "64",
    80: "80",
    104: "104",
    140: "140",
    200: "200",
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
