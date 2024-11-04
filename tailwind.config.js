/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        uncp: 'url(/images/uncp.webp)'
      },
      colors: {
        primary: '#64748b',
        secondary: 'var(--aw-color-secondary)',
        backgroud: '#f5f5f5'
      }
    }
  },
  plugins: []
}
