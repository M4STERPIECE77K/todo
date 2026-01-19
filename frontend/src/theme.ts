import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#eefcfd" },
          100: { value: "#d7eff2" },
          200: { value: "#afdee5" },
          300: { value: "#75c3cd" },
          400: { value: "#3e818e" },
          500: { value: "#3e818e" },
          600: { value: "#366d7a" },
          700: { value: "#315a66" },
          800: { value: "#2e4c56" },
          900: { value: "#2a414a" },
        },
        secondary: {
          50: { value: "#fdf9ec" },
          100: { value: "#f9efce" },
          200: { value: "#f2df9d" },
          300: { value: "#ebcf8a" },
          400: { value: "#e1b74d" },
          500: { value: "#d3a033" },
          600: { value: "#b87f28" },
          700: { value: "#996323" },
          800: { value: "#7d5122" },
          900: { value: "#67441f" },
        },
      },
      fonts: {
        heading: { value: "'Poppins', sans-serif" },
        body: { value: "'Poppins', sans-serif" },
        display: { value: "'Poppins', sans-serif" },
        mono: { value: "'Poppins', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          main: {
            value: { _light: "#f6f7f8", _dark: "#1d2126" },
          },
        },
        card: {
          value: { _light: "white", _dark: "#252a30" },
        },
        item: {
          value: { _light: "white", _dark: "#2a2f36" },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: "bg.main",
      color: { _light: "#131516", _dark: "gray.100" },
    },
    ".material-symbols-outlined": {
      fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      display: "inline-block",
    },
    ".material-symbols-outlined.fill": {
      fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
    },
    "::selection": {
      bg: "rgba(62, 129, 142, 0.3)",
    },
  },
})

export const system = createSystem(defaultConfig, config)
