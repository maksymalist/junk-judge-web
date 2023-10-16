/** @type {import('tailwindcss').Config} */
module.exports = {
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
      keyframes: {
        skeleton: {
          "0%, 100%": { backgroundColor: "#f3f3f3" }, // Light gray background color
          "50%": { backgroundColor: "#e0e0e0" }, // Slightly darker gray background color
        },
      },
      animation: {
        skeleton: "skeleton 1.5s infinite", // Use the skeleton keyframe animation
      },
    },
  },
  plugins: [],
};
