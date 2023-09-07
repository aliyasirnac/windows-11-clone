import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgDesktopImage": "url('/images/win11.jpg')",
        "bgLockScreenImage": "url('/images/lockscreen.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
