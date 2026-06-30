/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cascavel 3D Maker — identidade visual
        accent: '#7B6FE0',           // roxo (lado esquerdo do gradiente)
        'accent-hover': '#6A5ECF',
        'accent-bg': '#EEEAFF',
        'cyan': '#00C8D4',           // ciano (lado direito do gradiente)
        'purple-muted': '#A8A0C8',   // roxo suave do "CASCAVEL"
        'bg-primary': '#F2EDE3',     // cream do fundo da logo
        'card': '#FFFFFF',
        'border': '#E0DAD0',
        'text-primary': '#1A1A2E',
        'text-secondary': '#6B6B7A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
