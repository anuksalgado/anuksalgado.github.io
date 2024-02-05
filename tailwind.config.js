/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the HTML file in the public directory
    "./public/**/*.js",     // Include JavaScript files in the public directory
    "./public/**/*.css",    // Include CSS files in the public directory
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        playfair: ['PlayFair Display', 'serif'],
        playfairExtraBold: ['PlayFair Display', 'serif', 'ExtraBold']
      },
      fontWeight: {
        'normal': 400,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
      colors: {
        'custom-yellow':'#BAA333',
        'cream-white' :'#FFF8E1',
        cyan: {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#00bcd4',
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
        },
        blue: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
      },
    },
  },
  plugins: [],
}

