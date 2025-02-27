import { nextui } from "@nextui-org/react";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-logo": "spin 20s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
