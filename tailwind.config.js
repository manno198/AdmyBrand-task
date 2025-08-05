/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated brand colors to match the palette
        brand: {
          navy: "#2E2D3E",
          "navy-light": "#3A3950",
          "navy-dark": "#252438",
          blue: "#7C8AAD",
          "blue-light": "#8B97B8",
          "blue-dark": "#6D7A9D",
          teal: "#B9D2D1",
          "teal-light": "#C7DDD9",
          "teal-dark": "#A8C5C4",
          white: "#EAF0F0",
          "white-dark": "#DDE6E6",
          red: "#800000",
          "red-light": "#A00000",
          "red-dark": "#600000",
          background: "#F0F4F8",
        },
        primary: {
          DEFAULT: "#7C8AAD",
          foreground: "#2E2D3E",
        },
        secondary: {
          DEFAULT: "#800000",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#800000",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F0F4F8",
        foreground: "#2E2D3E",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "button-hover": "buttonHover 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        buttonHover: {
          "0%": { backgroundColor: "#B9D2D1" },
          "100%": { backgroundColor: "#800000" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
