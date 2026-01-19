/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0e1a',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Legacy support
        midnight: '#0a0e1a',
        'midnight-light': '#0f172a',
        primary: '#06b6d4',
        secondary: '#f59e0b',
        slate: '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -10px rgba(6, 182, 212, 0.2), 0 0 0 1px rgba(6, 182, 212, 0.1)',
        'premium-lg': '0 30px 60px -15px rgba(6, 182, 212, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.15)',
        'glow': '0 0 20px rgba(6, 182, 212, 0.4)',
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0891b2 0%, #22d3ee 100%)',
        'gradient-accent': 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0a0e1a 0%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
};
