import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-red': '#FF3939',
        'dark-gray': '#333333',
        gray: '#737373',
        lavendar: '#BEADFF',
        'light-lavender': '#EFEBFF',
        'light-gray': '#D9D9D9',
        'very-light-gray': '#FAFAFA',
        violet: '#633CFF',
      },
    },
  },
  plugins: [],
};
export default config;
