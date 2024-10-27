/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'BL100': '#B3BCC5',
        'BL50': '#E6E9EC',
        'BL75': '#CCD2D8',
        'BL500': '#001F3D',
        'PE300': '#FBEAD9',
        'pl': '#FDF5EC',
        'typed': '#FBEAD9',
        'PE500': '#F8DCBF',
        'B75': '#CFCFCF',
        'B100': '#B7B7B7',
        'B300': '#707070',
        'B400': '#404040',
        'B500': '#101010',
        'G500': '#B7EBE1',
        'Background': '#FEF8F2',
      },
      width: {
        '45': '45%',
        '90': '90%',
        '90px': '90px',
        '48': '48%',
        '250': '250px',
        '290': '290px',
        '400': '400px',
        '500': '500px',
        '400': '400px',
        'off-16': 'calc(100% - 16px)',
        'off-32': 'calc(100% - 32px)',
      },
      minWidth: {
        '120': '120px',
        '250': '250px',
        '290': '290px',
        '400': '400px',
        '500': '500px',
        '400': '400px',
        '700': '700px',
      },
      maxWidth: {
        '290': '290px',
        '400': '400px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
      },
      maxHeight: {
        '700': '700px',
        '1000': '1000px',
      },
      height: {
        '90%': '90%',
        '60': '60px',
        '100': '100px',
        '300': '300px',
        '320': '320px',
        '400': '400px',
        '420': '420px',
        '500': '500px',
        '570': '570px',
        '650': '650px',
        '700': '700px',
        '906': '906px',
        '1044': '1044px',
      },
      inset: {
        '80': '80px',
        '88': '88px',
        '130': '130px',
      },
      lineHeight: {
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '22': '22px',
        '32': '32px',
        '24': '24px',
        '28': '28px',
        '34': '34px',
        '38': '38px',
        '48': '48px',
        '60': '60px',
        '64': '64px',
      },
      fontSize: {
        '12': '12px',
        '20': '20px',
        '28': '28px',
        '32': '32px',
        '48': '48px',
        '60': '60px',
        '64': '64px',
      },
      padding: {
        '10px': '10px',
      },
      backgroundImage: {
        'review-section': "url(img/review-image.png)",
        'immigration-section': "url(img/immigration.png)",
        'dotted-line': "url(img/dotted-line.png)",
        'hero-1': "url(img/hero-image-1.png)",
        'hero-2': "url(img/hero-image-2.png)",
        'news-1': "url(img/news-image-2.png)",
      },
      boxShadow: {
        'progress': '0px -10px 40px 0px rgba(0, 0, 0, 0.20)',
      },
    },
  },
  plugins: [],
}

