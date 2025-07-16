/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 20s infinite ease-in-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite"
      },
      keyframes: {
        blob: {
          '0%': { borderRadius: '50% 50% 50% 50%' },
          '33%': { borderRadius: '60% 40% 30% 70%' },
          '66%': { borderRadius: '40% 60% 70% 30%' },
          '100%': { borderRadius: '50% 50% 50% 50%' },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      }
    }
  },
  plugins: [],
}
