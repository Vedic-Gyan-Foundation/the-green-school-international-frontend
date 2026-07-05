/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navlink: "#4d4d4d",
        primarycolor: "#040e04",
        primarycolortwo: "#0e3302",
        brand: {
          50: "#f0faf3",
          100: "#dbf3e3",
          200: "#b8e6c9",
          300: "#86d2a3",
          400: "#52b67c",
          500: "#2e9b5e",
          600: "#1f7d49",
          700: "#08703D",
          800: "#0e5630",
          900: "#0e3302",
          950: "#040e04",
        },
        sun: {
          50: "#fffce8",
          100: "#fff7c2",
          200: "#ffec85",
          300: "#ffd84a",
          400: "#fec627",
          500: "#EABE61",
          600: "#c89540",
          700: "#a06e25",
        },
        coral: {
          400: "#ff8c7a",
          500: "#FF6652",
          600: "#e84a36",
          700: "#c43626",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d4d7dd",
          300: "#a8aebb",
          400: "#7a8194",
          500: "#525a6e",
          600: "#3a3f4f",
          700: "#262a36",
          800: "#171a23",
          900: "#0b0d13",
        },
      },
      fontFamily: {
        display: [
          '"Plus Jakarta Sans"',
          '"Poppins"',
          "system-ui",
          "sans-serif",
        ],
        sans: ['"Inter"', '"Roboto"', "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(8, 112, 61, 0.18)",
        elevated:
          "0 25px 50px -12px rgba(15, 23, 42, 0.12), 0 8px 24px -8px rgba(8, 112, 61, 0.18)",
        glow: "0 0 0 1px rgba(8, 112, 61, 0.15), 0 12px 40px -8px rgba(8, 112, 61, 0.35)",
        ringbrand:
          "0 0 0 4px rgba(8, 112, 61, 0.18), 0 0 0 1px rgba(8, 112, 61, 0.4)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #08703D 0%, #0e5630 50%, #0e3302 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(8,112,61,0.95) 0%, rgba(14,86,48,0.92) 50%, rgba(14,51,2,0.92) 100%)",
        "sun-gradient": "linear-gradient(135deg, #EABE61 0%, #c89540 100%)",
        "coral-gradient": "linear-gradient(135deg, #FF6652 0%, #e84a36 100%)",
        "leaf-pattern":
          "radial-gradient(circle at 20% 20%, rgba(8,112,61,0.08), transparent 40%), radial-gradient(circle at 80% 80%, rgba(234,190,97,0.08), transparent 40%)",
        "hero-vignette":
          "linear-gradient(180deg, rgba(4,14,4,0.05) 0%, rgba(4,14,4,0.55) 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
