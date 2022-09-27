/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Dark Mode Elements
				"dark-blue": "hsl(209, 23%, 22%)",
				// Dark Mode Background
				"very-dark-blue-dark": "hsl(207, 26%, 17%)",
				// Light Mode Text
				"very-dark-blue-light": "hsl(200, 15%, 8%)",
				// Light Mode Input
				"dark-gray": "hsl(0, 0%, 52%)",
				// Light Mode Background
				"very-light-gray": "hsl(0, 0%, 98%)",
				// Dark Mode Text & Light Mode Elements
				White: "hsl(0, 0%, 100%)",
			},
		},
	},
	darkMode: "class",
	plugins: [],
}
