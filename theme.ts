import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    50: "#E6F7FF",
    100: "#BAE3FF",
    200: "#7CC4FA",
    300: "#47A3F3",
    400: "#2186EB",
    500: "#0967D2",
    600: "#0552B5",
    700: "#03449E",
    800: "#01337D",
    900: "#002159",
  },
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
};

const semanticTokens = {
  colors: {
    text: {
      default: "gray.900",
      _dark: "gray.50",
    },
    "text.secondary": {
      default: "gray.600",
      _dark: "gray.400",
    },
    "bg.primary": {
      default: "white",
      _dark: "gray.900",
    },
    "bg.secondary": {
      default: "gray.50",
      _dark: "gray.800",
    },
    "bg.tertiary": {
      default: "gray.100",
      _dark: "gray.700",
    },
    "border.primary": {
      default: "gray.200",
      _dark: "gray.700",
    },
    "border.secondary": {
      default: "gray.300",
      _dark: "gray.600",
    },
  },
};

const fonts = {
  heading: "Inter Variable, system-ui, sans-serif",
  body: "Inter Variable, system-ui, sans-serif",
  mono: "Menlo, monospace",
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: "bg.primary",
      color: "text",
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "500",
      borderRadius: "md",
    },
    variants: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
        },
      },
      outline: {
        borderColor: "border.primary",
        _hover: {
          bg: "bg.secondary",
        },
      },
      ghost: {
        _hover: {
          bg: "bg.secondary",
        },
      },
      link: {
        _hover: {
          textDecoration: "none",
          color: "brand.500",
        },
      },
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: "none",
        color: "brand.500",
      },
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  semanticTokens,
  fonts,
  styles,
  components,
});

export default theme;
