import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
      fontFamily: {
        sans: ["iranyekan", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        hole: "inset 0 1px 0 0 rgba(0,0,0,0.1), 0 1px 0 0 rgba(255,255,255,0.05)",
        bump: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 1px 0 0 rgba(0,0,0,0.1)",
      },
      fontSize: {
        "3xs": "0.5625rem",
        "2xs": "0.625rem",
      },
      maxWidth: {
        "screen-3xl": "1676px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bg: {
        50: "hsl(var(--bg-50))",
        100: "hsl(var(--bg-100))",
        200: "hsl(var(--bg-200))",
        DEFAULT: "hsl(var(--bg))",
      },
      backdrop: "hsl(var(--backdrop))",
      fg: {
        hover: "hsl(var(--fg-hover))",
        muted: "hsl(var(--fg-muted))",
        disabled: "hsl(var(--fg-disabled))",
        DEFAULT: "hsl(var(--fg))",
      },
      primary: {
        50: "hsl(var(--primary-50))",
        border: "hsl(var(--primary-border))",
        DEFAULT: "hsl(var(--primary))",
      },
      "primary-fg": {
        hover: "hsl(var(--primary-fg-hover))",
        muted: "hsl(var(--primary-fg-muted))",
        disabled: "hsl(var(--primary-fg-disabled))",
        DEFAULT: "hsl(var(--primary-fg))",
      },
      secondary: {
        50: "hsl(var(--secondary-50))",
        border: "hsl(var(--secondary-border))",
        DEFAULT: "hsl(var(--secondary))",
      },
      "secondary-fg": {
        hover: "hsl(var(--secondary-fg-hover))",
        muted: "hsl(var(--secondary-fg-muted))",
        disabled: "hsl(var(--secondary-fg-disabled))",
        DEFAULT: "hsl(var(--secondary-fg))",
      },
      error: {
        50: "hsl(var(--error-50))",
        border: "hsl(var(--error-border))",
        DEFAULT: "hsl(var(--error))",
      },
      "error-fg": {
        hover: "hsl(var(--error-fg-hover))",
        muted: "hsl(var(--error-fg-muted))",
        disabled: "hsl(var(--error-fg-disabled))",
        DEFAULT: "hsl(var(--error-fg))",
      },
      warning: {
        50: "hsl(var(--warning-50))",
        border: "hsl(var(--warning-border))",
        DEFAULT: "hsl(var(--warning))",
      },
      "warning-fg": {
        hover: "hsl(var(--warning-fg-hover))",
        muted: "hsl(var(--warning-fg-muted))",
        disabled: "hsl(var(--warning-fg-disabled))",
        DEFAULT: "hsl(var(--warning-fg))",
      },
      success: {
        50: "hsl(var(--success-50))",
        border: "hsl(var(--success-border))",
        DEFAULT: "hsl(var(--success))",
      },
      "success-fg": {
        hover: "hsl(var(--success-fg-hover))",
        muted: "hsl(var(--success-fg-muted))",
        disabled: "hsl(var(--success-fg-disabled))",
        DEFAULT: "hsl(var(--success-fg))",
      },
      info: {
        50: "hsl(var(--info-50))",
        border: "hsl(var(--info-border))",
        DEFAULT: "hsl(var(--info))",
      },
      "info-fg": {
        hover: "hsl(var(--info-fg-hover))",
        muted: "hsl(var(--info-fg-muted))",
        disabled: "hsl(var(--info-fg-disabled))",
        DEFAULT: "hsl(var(--info-fg))",
      },
      ring: "hsl(var(--ring))",
      border: "hsl(var(--border))",
      black: "hsl(0 0 0%)",
    },
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.border", "currentColor"),
    }),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
      rounded: "var(--rounded)",
    },
    ringColor: ({ theme }) => ({
      DEFAULT: theme("colors.primary.DEFAULT"),
      ...theme("colors"),
    }),
    ringOffsetColor: ({ theme }) => ({
      DEFAULT: theme("colors.bg.DEFAULT"),
      ...theme("colors"),
    }),
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};

export default config;
