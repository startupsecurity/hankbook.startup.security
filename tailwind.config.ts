import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        red: {
          css: {
            '--tw-prose-body': 'rgb(185 28 28)',
            '--tw-prose-headings': 'rgb(153 27 27)',
            '--tw-prose-lead': 'rgb(185 28 28)',
            '--tw-prose-links': 'rgb(220 38 38)',
            '--tw-prose-bold': 'rgb(153 27 27)',
            '--tw-prose-counters': 'rgb(185 28 28)',
            '--tw-prose-bullets': 'rgb(185 28 28)',
            '--tw-prose-hr': 'rgb(254 226 226)',
            '--tw-prose-quotes': 'rgb(153 27 27)',
            '--tw-prose-quote-borders': 'rgb(254 226 226)',
            '--tw-prose-captions': 'rgb(185 28 28)',
            '--tw-prose-code': 'rgb(153 27 27)',
            '--tw-prose-pre-code': 'rgb(254 226 226)',
            '--tw-prose-pre-bg': 'rgb(127 29 29)',
            '--tw-prose-th-borders': 'rgb(254 202 202)',
            '--tw-prose-td-borders': 'rgb(254 226 226)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
