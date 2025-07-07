/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sunset-orange': '#FF5E5B',
        'tropical-yellow': '#FFD93D',
        'ocean-blue': '#247BA0',
        'deep-purple': '#6A0572',
        'mint-green': '#9AEBA3',
        'coral-pink': '#FF6F91',
        'midnight-black': '#0D1B2A',
        'soft-lavender': '#B8A9C9',
        'electric-cyan': '#00FFF7',
        'golden-rod': '#FFC857',
      },
      animation: {
        'pulse-bright': 'pulseBright 2.5s infinite ease-in-out',
        'fade-slide': 'fadeSlide 1s ease-out forwards',
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        pulseBright: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 94, 91, 0.7)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 94, 91, 1)' },
        },
        fadeSlide: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
