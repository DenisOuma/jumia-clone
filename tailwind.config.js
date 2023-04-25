/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			colors: {
				"primary-bg-page": "#6AC1D5",
				"primary-color-page": "#E07E1B",
				"primary-page-color": "#ffff",
				"primary-font-color": "#313133",
				"gray-text-color": "#75757A",
				"secondary-text-color": "#FF9900",
				"danger-add-color": "#E61601",
				"alcohol-theme-color": "#B177DA",
				"food-pay-color": "#F1F1F2",
				"footer-bg-color": "#535357",
			},
		},
	},
	plugins: [],
};
