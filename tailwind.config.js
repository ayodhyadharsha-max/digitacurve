/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#EDB451',
        'jet-black': '#000000',
        charcoal: '#111111',
        'charcoal-light': '#1a1a1a',
        'border-dark': '#2a2a2a',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3b82f6, #8b5cf6, #f97316)',
        'gradient-hero': 'linear-gradient(to right, #1e3a8a, #7c3aed)',
        'gradient-card': 'linear-gradient(145deg, #111111, #1a1a1a)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slideIn 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
