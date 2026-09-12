import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poster: ['Anton', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        hand: ['Shantell Sans', 'cursive'],
        sans: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        canvas: 'var(--canvas)',
        card: 'var(--card)',
        'card-2': 'var(--card-2)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-faint': 'var(--ink-faint)',
        line: 'var(--line)',
        'line-2': 'var(--line-2)',
        tool: 'var(--tool)',
        'tool-soft': 'var(--tool-soft)',
        accent: 'var(--accent)',
        'accent-deep': 'var(--accent-deep)',
        'accent-soft': 'var(--accent-soft)',
        live: 'var(--live)',
      },
    },
  },
  plugins: [],
};
export default config;