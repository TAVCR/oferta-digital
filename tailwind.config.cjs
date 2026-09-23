module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#d97706',
          gold: '#f59e0b',
          dark: '#111111',
          surface: '#1a1a1a',
          subtle: '#262626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['League Spartan', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
