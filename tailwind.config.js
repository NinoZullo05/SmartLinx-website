/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'f-pro-display-black-italic': [
        'SF Pro Display Black Italic',
        'ans-serif',
      ],
      'f-pro-display-bold': ['SF Pro Display Bold', 'ans-serif'],
      'f-pro-display-heavy-italic': [
        'SF Pro Display Heavy Italic',
        'ans-serif',
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
        light_background: '#FFFFFF', // Bianco
        light_primary: '#998EFE', //Colore Linx ( Viola)
        light_secondary: '#DAD5FF', // Viola più chiaro
        light_primaryContainer: '#F3F3F3', // Grigiolino leggero per contianer , NON UTILIZZATO!
        light_secondaryContainer: '#000000', // NERO Completo
        light_tertiary: '#E7F4FE', // Grigiolino più chiaro tendente al blu
        light_onSurface: '#EFEFEF', // grigiolino
        light_onSurfaceVariant: '#FFFFFF', // Grigio

        dark_background: '#292929', // Colore sfondo Grigio Scuro

        dark_primary: '#998EFE', //Colore Linx ( Viola), rimane inviariato
        dark_secondary: '#DAD5FF', // Grigio più chiaro
        dark_primaryContainer: '#1A1A1A', // nero più leggero
        dark_secondaryContainer: '#FFFFFF',
        dark_tertiary: '#20202E',
        dark_onSurface: '#20202E',
        dark_onSurfaceVariant: '#010101',

        //  NUOVI COLORI DA IMPLEMENTARE :
        // Colori per lo sfondo
        bg_light: '#FFFFFF', // Bianco
        bg_dark: '#292929', // Colore sfondo Grigio Scuro

        // Colori per il testo
        text_light: '#000000', // Nero
        text_dark: '#FFFFFF', // Bianco

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
      },
    },
  },
  plugins: [],
};
