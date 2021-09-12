module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#d2d2d2',
          300: '#B4B4B4',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#272E32',
          700: '#20272B',
          800: '#192024',
          900: '#151B1E',
        },
        primary: {
          base: '#0d8bd1',
          hover: '#0B75AF',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
