/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors"); 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
        customG: "1.61px 1.61px 8.03px 4.02px hsla(0, 0%, 0%, 0.1)",
        "inner-custom": "-5px -11px 10.8px 0px #00000040 inset",
      },
      colors: {
        primary: "rgba(2, 7, 29, 1)", // custom black
        "primary-200": "rgb(237, 135, 51)",
        secondary: "rgba(247, 139, 41, 1)",
        "dark-blue": "hsla(229, 87%, 6%, 1)",
        "dark-blue2": "#232A3E",
        "fade-white": "#E5E7EB",
        "fade-black": "rgba(33, 33, 33, 1)",
        "fade-gray": "#A1A6B4",
        "fade-gray-label": "rgba(60, 60, 67, 0.6)",
        radioprimary: "rgba(20, 22, 100, 1)",
        radiosecondary: "rgba(31, 33, 123, 1)",
        "fade-blue": "rgba(92, 98, 255, 1)",
        "fade-blue-100": "hsla(238, 100%, 68%, 1)",

        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
      },
      fontFamily: {
        sfPro: ["SFPRO", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeInDrop1: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDrop2: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scaleY(0)" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
          "100%": { opacity: "0", transform: "scaleY(0)" },
        },
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        fadeInDrop1: "fadeInDrop1 0.8s ease-out forwards",
        fadeInDrop2: "fadeInDrop2 0.8s ease-out forwards",
        scaleIn: "scaleIn 1.5s ease-in-out forwards",
        spin: "spin 1s linear infinite",
      },
      boxShadow: {
        custom: "-3px 0px 20px 0px rgba(0, 0, 0, 0.25)",
        "inner-custom": "-5px -11px 10.8px 0px #00000090 inset",
        customG: "1.61px 1.61px 8.03px 4.02px hsla(0, 0%, 0%, 0.1)",
      },
    },
  },
  plugins: [],
};
