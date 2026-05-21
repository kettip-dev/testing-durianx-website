/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EAF3DA',
          100: '#D7E8BD',
          200: '#C5DDA1',
          300: '#B0D388',
          400: '#9DCA71',
          500: '#82C341',
          600: '#72AB3D',
          700: '#5F9233',
          800: '#4F802D',
          900: '#2B4C1D',
          950: '#142408',
        },
        dark: {
          colors: {
            background: "#F2F2F2",
          },
        },
        light: {
          colors: {
            background: "#F2F2F2",
          },
        },
      },
      
    },
  },
  plugins: [],
}
