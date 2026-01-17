module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#041026',
        'midnight-light': '#07162a',
        primary: '#10b981',
        success: '#10b981',
        slate: '#94a3b8',
        secondary: '#cfe9ff'
      },
      backgroundColor: {
        'glass': 'rgba(255,255,255,0.04)'
      }
    }
  },
  plugins: []
}
