import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#07070A",
        surface: "#11131A",
        primary: "#7C3AED",
        secondary: "#22D3EE",
        accent: "#F43F5E",
        text: "#F8FAFC",
        muted: "#94A3B8",
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
