/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#07090e',
          surface: '#0d111a',
          card: 'rgba(18, 24, 38, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          accent: '#3b82f6',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          emerald: '#10b981',
          text: '#f3f4f6',
          muted: '#9ca3af'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace']
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%': { opacity: '0.3', transform: 'scale(0.98)' },
          '100%': { opacity: '0.7', transform: 'scale(1.02)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.25)',
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.25)',
        'glass': '0 20px 50px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
