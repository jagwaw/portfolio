import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        void: {
          950: '#05050d',
          900: '#0a0a0f',
          800: '#0e0e18',
          700: '#111118',
          600: '#16161f',
          500: '#1c1c28',
        },
        violet: {
          50: '#f5f0ff',
          100: '#ede0ff',
          200: '#dbbfff',
          300: '#a78bfa',
          400: '#8b5cf6',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#2e1065',
          950: '#1a0533',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
        },
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(rgba(124,58,237,0.15) 1px, transparent 1px)',
        'grid-pattern':
          'linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 70%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(99,102,241,0.04) 100%)',
        'gradient-text':
          'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 40%, #818cf8 80%, #a78bfa 100%)',
      },
      backgroundSize: {
        dot: '24px 24px',
        grid: '40px 40px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        flicker: 'flicker 8s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        typing: 'typing 0.05s steps(1) forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.3' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.7' },
          '97%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(124,58,237,0.6), 0 0 100px rgba(124,58,237,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'violet-sm': '0 0 15px rgba(124,58,237,0.3)',
        'violet-md': '0 0 30px rgba(124,58,237,0.4)',
        'violet-lg': '0 0 60px rgba(124,58,237,0.3), 0 0 120px rgba(124,58,237,0.1)',
        card: '0 4px 32px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.6), 0 0 24px rgba(124,58,237,0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config
