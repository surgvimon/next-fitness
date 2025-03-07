import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        divider: '#CBD5E0',
        primary: {
          "dark-3": "#880e4f",
          "dark-2": "#ad1457",
          "dark-1": "#c2185b",
          "light-3": "#fce4ec",
          "light-2": "#f06292",
          "light-1": "#ec407a",
        },
        secondary: {
          "dark-3": "#1A237E",
          "dark-2": "#283593",
          "dark-1": "#303F9F",
          "light-3": "#C5CAE9",
          "light-2": "#9FA8DA",
          "light-1": "#5C6BC0",
        },
      },
      keyframes: {
        slideUp:{
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDownAndFadeIn:{
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleAndFadeIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        scaleandfadein: "scaleAndFadeIn 200ms ease forwards",
        slidedownandfadein: "slideDownAndFadeIn 200ms ease forwards",
        fadein: "fadeIn 0.5s ease-in-out forwards",
        fadeout: "fadeOut 0.5s ease-in-out forwards",
      },
      spacing: {
        'tab54': '54px',
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
} satisfies Config;
