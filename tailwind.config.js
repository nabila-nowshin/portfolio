module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
      backdropBlur: {
        lg: "20px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "sunset",
      "business",
      "luxury",
      "abyss",
      "autumn",
      "caramellatte",
    ],
  },
};
