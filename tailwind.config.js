/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/mono-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        },
        primary: {
          100: '#f1f5f9',
          900: '#0f172a' 
        }
      }
    },
  },
  plugins: [],
}

