import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "740px",
      laptop: "940px",
      desktop: "1280px",
    },
    extend: {
      fontSize: {
        "clamp-xl": "clamp(30px, 9vw, 65px)",
      },
      height: {
        "clamp-about-image": "clamp(500px, 10vw, 800px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        white: "var(--white)",
        accent_hover: "var(--accent_hover)",
        font_dark: "var(--font_dark)",
      },
    },
  },
  plugins: [],
};
export default config;
