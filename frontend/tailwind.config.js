/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      coral: '#FF8559',          // Coral
      charcoalGray: '#4A4A4A',   // Charcoal Gray
      softGold: '#D4AF37',       // Soft Gold
      dustyRose: '#DCA1A1',      // Dusty Rose
      cream: '#FDFBD4',          // Cream
      bglight: "#F1F5F7",        // Your existing color 'bglight'
    },
    fontFamily: {
      'logo-popins': '"Mochiy Pop One", sans-serif',
    },
  },
};
export const plugins = [];
