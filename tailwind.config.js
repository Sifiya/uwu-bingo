/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--primary-50) / <alpha-value>)",
          100: "rgb(var(--primary-100) / <alpha-value>)",
          200: "rgb(var(--primary-200) / <alpha-value>)",
          300: "rgb(var(--primary-300) / <alpha-value>)",
          400: "rgb(var(--primary-400) / <alpha-value>)",
          500: "rgb(var(--primary-500) / <alpha-value>)",
          600: "rgb(var(--primary-600) / <alpha-value>)",
          700: "rgb(var(--primary-700) / <alpha-value>)",
          800: "rgb(var(--primary-800) / <alpha-value>)",
          900: "rgb(var(--primary-900) / <alpha-value>)",
          1000: "rgb(var(--primary-1000) / <alpha-value>)",
        },
        white: "rgb(var(--white) / <alpha-value>)",
        accent: {
          300: "rgb(var(--accent-300) / <alpha-value>)",
          400: "rgb(var(--accent-400) / <alpha-value>)",
        },
        error: {
          400: "rgb(var(--error-400) / <alpha-value>)",
          500: "rgb(var(--error-500) / <alpha-value>)",
        },
        success: {
          300: "rgb(var(--success-300) / <alpha-value>)",
          400: "rgb(var(--success-400) / <alpha-value>)",
        },
        cadet: {
          400: "rgb(var(--cadet-400) / <alpha-value>)",
        },
        'primary-bg': 'rgb(var(--primary-100) / <alpha-value>)',
        'primary-text': 'rgb(var(--primary-700) / <alpha-value>)',
        'primary-bg-dark': 'rgb(var(--primary-800) / <alpha-value>)',
        'primary-text-dark': 'rgb(var(--primary-50) / <alpha-value>)',
        'secondary-text': 'rgb(var(--primary-500) / <alpha-value>)',
        'secondary-text-dark': 'rgb(var(--primary-300) / <alpha-value>)',

        'button-bg': 'rgb(var(--accent-400) / <alpha-value>)',
        'button-text': 'rgb(var(--white) / <alpha-value>)',
        'button-bg-dark': 'rgb(var(--accent-300) / <alpha-value>)',
        'button-text-dark': 'rgb(var(--primary-700) / <alpha-value>)',

        'card-bg': 'rgb(var(--primary-50) / <alpha-value>)',
        'card-bg-dark': 'rgb(var(--primary-900) / <alpha-value>)',
        'card-text': 'rgb(var(--primary-700) / <alpha-value>)',
        'card-text-dark': 'rgb(var(--primary-50) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}

