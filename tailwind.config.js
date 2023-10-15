/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#F5921D'
      },
      fontFamily: {
        'montreal': ['NeueMontreal', 'sans']
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'medium-italic': '500',
        'semibold': '600'
      }
    },
  },
  plugins: [],
}
