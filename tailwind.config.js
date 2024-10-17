/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-purple": "linear-gradient(to right, #EDBEFF, #B800FF)", // Gradient background
      },
      colors: {
        BGBlue: "#031329", // Custom background color
        IconBlue: "#19376D", // Custom icon color
      },
      fontFamily: {
        "roboto-mono": ['"Roboto Mono"', "monospace"],
        "roboto": ['"Roboto"', "monospace"], // Roboto Mono font
        "jetbrains-mono-medium": ['"JetBrainsMonoMedium"', "monospace"], // JetBrains Mono Medium font
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // Tailwind scrollbar plugin
  ],
};
