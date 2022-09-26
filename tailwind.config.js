/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Dark Mode Elements
				"dark-dark-blue": "hsl(209, 23%, 22%)",
				// Dark Mode Background
				"dark-very-dark-blue": "hsl(207, 26%, 17%)",
				// Light Mode Text
				"light-very-dark-blue": "hsl(200, 15%, 8%)",
				// Light Mode Input
				"light-dark-gray": "hsl(0, 0%, 52%)",
				// Light Mode Background
				"light-very-light-gray": "hsl(0, 0%, 98%)",
				// Dark Mode Text & Light Mode Elements
				White: "hsl(0, 0%, 100%)",
			},
		},
	},
	plugins: [],
}
