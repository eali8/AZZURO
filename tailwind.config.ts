import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      fontFamily: {
        italiana: ['var(--font-italiana)', 'serif'],
        italianno: ['var(--font-italianno)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        lead: '#393A26',
        leadLight: '#8D835E',
        active: '#EBC981'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
