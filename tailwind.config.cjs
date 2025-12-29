// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Вмикаємо ручне перемикання тем через клас "dark":contentReference[oaicite:7]{index=7}
  theme: {
    extend: {
      // тут можна додати свої кольори, шрифти тощо
    },
  },
  plugins: [],
};
