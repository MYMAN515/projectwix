import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        display: ['"Mona Sans"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          50: '#f3f4ff',
          100: '#e8ebff',
          200: '#c9ceff',
          300: '#aab1ff',
          400: '#6f77ff',
          500: '#353dff',
          600: '#2f37da',
          700: '#252ca9',
          800: '#1b2078',
          900: '#111547'
        },
        accent: {
          100: '#ffe7f3',
          200: '#ffc0e1',
          300: '#ff99cf',
          400: '#ff72bd',
          500: '#ff4baa'
        }
      },
      boxShadow: {
        soft: '0 10px 40px -20px rgba(53, 61, 255, 0.45)',
        outline: '0 0 0 4px rgba(53, 61, 255, 0.15)'
      },
      gradientColorStops: {
        'sunrise-start': '#353dff',
        'sunrise-mid': '#ff72bd',
        'sunrise-end': '#ffd166'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};

export default config;
