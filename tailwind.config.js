import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              50: "#FEE7E7",
              100: "#FECFCF",
              200: "#FD9C9C",
              300: "#FC6868",
              400: "#FB3535",
              500: "#D32F2F", // Primary red
              600: "#A82626",
              700: "#7D1C1C",
              800: "#531313",
              900: "#2A0909",
              DEFAULT: "#D32F2F",
              foreground: "#FFFFFF"
            },
            secondary: {
              50: "#E7E9F5",
              100: "#D0D3EB",
              200: "#A0A7D7",
              300: "#717BC3",
              400: "#414FAF",
              500: "#303F9F", // Secondary blue
              600: "#26327F",
              700: "#1D265F",
              800: "#131940",
              900: "#0A0D20",
              DEFAULT: "#303F9F",
              foreground: "#FFFFFF"
            }
          }
        },
        dark: {
          colors: {
            background: "#11181C",
            foreground: "#ECEDEE",
            primary: {
              50: "#3A0D0D",
              100: "#5C1414",
              200: "#8B1F1F",
              300: "#BA2A2A",
              400: "#E93636",
              500: "#FF4444", // Primary red for dark mode
              600: "#FF6666",
              700: "#FF8888",
              800: "#FFAAAA",
              900: "#FFCCCC",
              DEFAULT: "#FF4444",
              foreground: "#11181C"
            },
            secondary: {
              50: "#0D0D1A",
              100: "#14142B",
              200: "#1F1F47",
              300: "#2A2A63",
              400: "#36367F",
              500: "#44449B", // Secondary blue for dark mode
              600: "#6666B7",
              700: "#8888D3",
              800: "#AAAAEF",
              900: "#CCCCFF",
              DEFAULT: "#44449B",
              foreground: "#11181C"
            }
          }
        }
      }
    })
  ]
}
