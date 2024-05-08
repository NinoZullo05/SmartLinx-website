/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '331px',
      sm: '480px',
      md: '768px',
      lg: '1124px',
      xl: '1440px',
    },
    extend: {
      colors: {
        light_background: '#FFFFFF',
        light_primary: '#998EFE',
        light_secondary: '#DAD5FF',
        light_primaryContainer: '#F3F3F3',
        light_secondaryContainer: '#000000',
        light_tertiary: '#E7F4FE',
        light_onSurface: '#EFEFEF',
        light_onSurfaceVariant: '#FFFFFF',

        dark_background: '#292929',
        dark_primary: '#998EFE',
        dark_secondary: '#DAD5FF',
        dark_primaryContainer: '#1A1A1A',
        dark_secondaryContainer: '#FFFFFF',
        dark_tertiary: '#20202E',
        dark_onSurface: '#20202E',
        dark_onSurfaceVariant: '#010101',
      },
    },
  },
  plugins: [],
};
