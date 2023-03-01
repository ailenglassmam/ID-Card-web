/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'projects-background': "url('./img/background.png')"
      },
      colors: {
        'cinder': {
          50: '#F3F3F3',
          100: '#E7E6E7',
          200: '#C2C1C4',
          300: '#9D9CA0',
          400: '#545258',
          500: '#0A0811',
          600: '#09070F',
          700: '#06050A',
          800: '#050408',
          900: '#030205',
        },

        'di-serria': {
          50: '#FDFAF7',
          100: '#FCF5F0',
          200: '#F7E6D9',
          300: '#F2D7C2',
          400: '#E9B995',
          500: '#DF9B67',
          600: '#C98C5D',
          700: '#865D3E',
          800: '#64462E',
          900: '#432F1F',
        },

        'scooter': {
          50: '#F5FCFE',
          100: '#EBF9FC',
          200: '#CDEFF8',
          300: '#AEE5F3',
          400: '#72D2EA',
          500: '#35BEE1',
          600: '#30ABCB',
          700: '#207287',
          800: '#185665',
          900: '#103944',
        },

        'sapphire': {
          50: '#F6F7FA',
          100: '#EDEEF6',
          200: '#D1D5E8',
          300: '#B6BCD9',
          400: '#7F8ABD',
          500: '#4858A1',
          600: '#414F91',
          700: '#2B3561',
          800: '#202848',
          900: '#161A30',
        },
    },
  },
  plugins: [],
}}
