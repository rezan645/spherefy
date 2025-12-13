// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Вмикаємо ручне перемикання тем через клас "dark":contentReference[oaicite:7]{index=7}
  theme: {
    extend: {
      // тут можна додати свої кольори, шрифти тощо
    },
  },
  plugins: [],
}
