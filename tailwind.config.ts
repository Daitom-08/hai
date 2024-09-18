import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        garamond: ['EB Garamond', 'serif'],
        lato: ['Lato', 'sans-serif'],
        sansi: ['Roboto', 'sans-serif'],
      },
      colors: {
        dark: "#011213",
        primary: "#036E74",
        secondary: "#D0E7E9",
        testimonial: "#D0E7E9",
        paleBlue: "#F5F6FF",
        white400: "rgba(255, 255, 255, 0.80)",
        pureBlack: "#3A3A3A",
        goodGreen: "#00A181",
      },
      textStrokeWidth: {
        DEFAULT: '1px',
        sm: '2px',
        lg: '3px',
      },
      textStrokeColor: {
        red: '#ff0000',
        blue: '#0000ff',
      },
      backgroundImage: {
        'hero-image': "url('/assets/images/Hero.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'gradient-radial': "radial-gradient(var(--tw-gradient-stops))",
        'gradient-conic': "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleX(0)' },
          '80%': { transform: 'scaleX(1.2)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'open-menu2': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'open-menu2': 'open-menu2 0.5s ease-in-out forwards',
        'fade-in-out': 'fade-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-red': {
          '-webkit-text-stroke-color': '#036E74',
        },
        '.text-stroke-blue': {
          '-webkit-text-stroke-color': '#0000ff',
        },
      });
    },
  ],
};

export default config;