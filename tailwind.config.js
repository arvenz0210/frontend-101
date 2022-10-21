const { ParadisTailwindPreset } = require("@pomelo-la/paradis/tailwind-preset");

module.exports = {
  presets: [ParadisTailwindPreset],

  content: [
    "./pages/**/*.{html,js}",
    "./node_modules/@pomelo-la/**/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
