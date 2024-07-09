/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['SF Pro Display', 'Helvetica', 'Arial', 'sans-serif'],
      'f-pro-display-black-italic': [
        'SF Pro Display Black Italic',
        'SF Pro Display',
        'sans-serif',
      ],
      'f-pro-display-bold': [
        'SF Pro Display Bold',
        'SF Pro Display',
        'sans-serif',
      ],
      'f-pro-display-heavy-italic': [
        'SF Pro Display Heavy Italic',
        'SF Pro Display',
        'sans-serif',
      ],
    },
    screens: {
      xs: '331px',
      sm: '480px',
      md: '768px',
      lg: '1124px',
      xl: '1440px',
    },
    extend: {
      colors: {
        // Colori per lo sfondo
        bg_light: '#FFFFFF', // Bianco
        bg_dark: '#111827', // Colore sfondo Grigio Scuro tendente al blu

        // Colori per il testo
        text_light: '#000000', // Nero ,
        text_dark: '#898f80', // Bianco , DA RENDERE PIù GRIGINO

        // Colori per scritta viola
        text_primary_light: '#998EFE',
        text_primary_dark: '#998EFE',

        // Colori per scritta viola più chiaro
        text_secondary_light: '#DAD5FF',
        text_secondary_dark: '#DAD5FF',

        // Colori per scritta in grassetto :
        text_bold_light: '#4d4d4d',
        text_bold_dark: '#f3f4f6',

        // Colori per il bordo
        border_light: '#998EFE',
        border_dark: '#998EFE',

        //Colori per i Bottoni
        button_dark: '#998EFE',
        button_light: '#998EFE',

        //Colori Sfondo footer
        bg_footer_light: '#FFFFFF',
        bg_footer_dark: '#191a1c',

        //Colori per il titolo FAQ
        text_FAQ_title_light: '#191970',
        text_FAQ_title_dark: '#f3f4f6',

        //Colori per il background di FAQ
        bg_FAQ_light: '#9E5CF6',
        bg_FAQ_dark: '#2e2550',
      },
    },
  },
  plugins: [],
};
