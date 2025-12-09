/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        card: "var(--card)",
        bg: "var(--bg)",
        text: "var(--text)",
        border: "var(--border)",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      boxShadow: {
        DEFAULT: "var(--shadow)",
      },
    },
  },
  plugins: [],
};
