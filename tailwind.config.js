/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./data/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#020203",
        graphite: "#0a0a0d",
        shell: "#101015",
        shellsoft: "#15151c",
        text: "#f4f1ea",
        muted: "#9a96a8",
        toxic: "#8d63ff",
        electric: "#49b2ff",
        danger: "#ff4d63",
      },
      fontFamily: {
        opsmono: ["var(--font-mono-system)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        war: "0 28px 120px rgba(0, 0, 0, 0.55)",
      },
      letterSpacing: {
        brutal: "-0.08em",
      },
    },
  },
};
