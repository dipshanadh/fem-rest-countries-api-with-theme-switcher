import Head from "next/head"

import Header from "./Header"

const Layout = ({ children }) => {
	return (
		<>
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
		</>
	)
}

export default Layout
