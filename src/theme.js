import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5f8ff",
      100: "#e9efff",
      200: "#cddcff",
      300: "#a8c0ff",
      400: "#7ea1ff",
      500: "#4d7dff", // PRIMARY
      600: "#325fe6",
      700: "#2848b4",
      800: "#213a8f",
      900: "#1c316f",
    },
    accent: {
      50: "#fff8f5",
      100: "#ffeae1",
      200: "#ffd0bf",
      300: "#ffab8d",
      400: "#ff7c51",
      500: "#ff5a26", // PRIMARY
      600: "#e04316",
      700: "#b43515",
      800: "#8c2b16",
      900: "#6e2414",
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
  },
  fonts: {
    heading: "'Poppins', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
  shadows: {
    soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
    medium:
      "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    large:
      "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
});

export default theme;

