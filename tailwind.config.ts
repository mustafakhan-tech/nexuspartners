import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { night: "#0C0B09", cream: "#E7E1CC", ash: "#1A1915" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
export default config;
