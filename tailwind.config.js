/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      colors: {
        surface: "#0B0E14",
        card: "#0E131C",
        line: "#273244",
        accent: "#3B82F6",
        accentSoft: "#8B5CF6"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(6, 13, 28, 0.45)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.26), transparent 45%), radial-gradient(circle at 78% 6%, rgba(139,92,246,0.2), transparent 40%), radial-gradient(circle at 90% 85%, rgba(56,189,248,0.14), transparent 35%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.35 },
          "50%": { opacity: 0.65 }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        pulseSoft: "pulseSoft 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
