import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#060606',
        foreground: '#f5f2ed',
        accent: '#c8a36a',
        'accent-soft': '#a67c52',
        panel: 'rgba(255,255,255,0.06)',
        line: 'rgba(255,255,255,0.12)',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(0, 0, 0, 0.45)',
        luxe: '0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
