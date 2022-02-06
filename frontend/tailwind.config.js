const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				os: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
				lato: ["Lato", ...defaultTheme.fontFamily.sans],
				pop: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				bg: { 100: "#CAF0F8", 200: "#A5E6F3" },
				comp: { 100: "#E33310", 200: "#D22F0F" },
			},
		},
	},
	plugins: [],
};
