import Head from "next/head"

import Header from "./Header"

const Layout = ({ children }) => {
	return (
		<main className="bg-very-light-gray text-very-dark-blue-light dark:bg-very-dark-blue-dark dark:text-White min-h-screen">
			<Head>
				<title>
					Frontend Mentor | REST Countries API with color theme
					switcher | Dipshan Adhikari
				</title>
				<meta
					name="description"
					content="REST Countries API with color theme
					switcher by Dipshan Adhikari using Next.js and tailwind CSS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			{children}
		</main>
	)
}

export default Layout
