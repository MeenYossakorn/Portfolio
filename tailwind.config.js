/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-purple": "linear-gradient(to right, #EDBEFF, #B800FF)", // เส้นใต้ชื่อ
      },
      colors: {
        BGBlue: "#031329", // เพิ่มสีที่กำหนดเอง
        IconBlue: "#19376D",
      },
      fontFamily: {
        "roboto-mono": ['"Roboto Mono"', "monospace"], // ฟ้อน
      },
    },
  },
  plugins: [],
};
