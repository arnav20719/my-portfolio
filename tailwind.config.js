/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1120',
          secondary: '#111827',
        },
        card: {
          DEFAULT: '#1E293B',
        },
        accent: {
          blue: '#38BDF8',
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #06B6D4, #8B5CF6)',
        'gradient-hero': 'radial-gradient(circle at top left, rgba(37, 99, 235, 0.13), transparent 40%), radial-gradient(circle at bottom right, rgba(147, 51, 234, 0.2), transparent 40%), linear-gradient(135deg, #0B1120, #1E1B4B, #2E1065)',
        'gradient-projects': 'linear-gradient(180deg, #111827, #0F172A)',
        'gradient-skills': 'linear-gradient(180deg, #172554, #111827)',
        'gradient-experience': 'linear-gradient(180deg, #0F172A, #020617)',
        'gradient-certificates': 'linear-gradient(180deg, #111827, #172554)',
        'gradient-about': 'linear-gradient(180deg, #172554, #1E1B4B)',
        'gradient-contact': 'linear-gradient(135deg, #020617, #1E1B4B, #0F172A)',
      },
      boxShadow: {
        'premium': '0 20px 40px rgba(59, 130, 246, 0.25)',
        'premium-hover': '0 20px 60px rgba(56, 189, 248, 0.25)',
      },
    },
  },
  plugins: [],
};