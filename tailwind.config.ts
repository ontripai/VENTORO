import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdf0',
          100: '#fff9c2',
          200: '#ffef85',
          300: '#ffe047',
          400: '#ffd014',
          500: '#ffc000', // perdac benchmark gold
          600: '#d4af37', // metallic gold
          700: '#b89125',
          800: '#8c6b16',
          900: '#5c4509',
        },
        brand: {
          dark: '#0f141c',
          darker: '#0a0d13',
          card: '#161c26',
          accent: '#ffc000',
          bronze: '#c86f37',
          gray: '#6b7280',
          lightgray: '#f4f6f8',
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Montserrat', 'Open Sans', 'sans-serif'],
        heading: ['var(--font-roboto-slab)', 'Roboto Slab', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 192, 0, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(255, 192, 0, 0.8)' },
        },
      }
    },
  },
  plugins: [],
};

export default config;
