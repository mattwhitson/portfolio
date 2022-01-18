const defaultTheme = require("tailwindcss/defaultTheme");

const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = [
  "Roboto", // <-- Roboto is a default sans font now
  "system-ui",
  // <-- you may provide more font fallbacks here
];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
    },
    extend: {},
  },
  plugins: [],
};
