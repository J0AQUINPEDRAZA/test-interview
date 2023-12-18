/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        LightBlue: '#279aff',
        DarkBlue: '#147cc9',
        White: '#fffff',
        LightGray: '#f6f7fa',
        DarkGray: '#c4cbd6'
      },
      width: {
        input: 'calc(40% + 120px)',
        total: 'calc(20% - 35px)'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        contact: '20fr 0.8fr 18.4fr  0.8fr 7.6fr',
        details: '16fr  6fr  6fr  6fr 1fr'
      }
    }
  },
  plugins: []
}
