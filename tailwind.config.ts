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
        "clamp-about": "clamp(30px, 9vw, 50px)",
        "clamp-about-key-fact-mobile": "clamp(30px, 6vw, 50px)",
        "clamp-key-fact-item": "clamp(20px, 6vw, 90px)",
        "clamp-key-fact-item-text": "clamp(12px, 4vw, 18px)",
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
