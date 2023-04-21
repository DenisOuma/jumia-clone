/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"primary-bg-page": "#F1F1F2",
				"primary-color-page": "#E07E1B",
				"primary-page-color": "#ffff",
				"primary-font-color": "#313133",
				"gray-text-color": "#75757A",
			},
		},
	},
	plugins: [],
};
