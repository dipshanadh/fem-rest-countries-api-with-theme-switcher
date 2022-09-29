import "../styles/globals.css"

import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import LoadingBar from "react-top-loading-bar"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	const [progress, setProgress] = useState(0)

	useEffect(() => {
		router.events.on("routeChangeStart", () => setProgress(25))
		router.events.on("routeChangeComplete", () => setProgress(100))
		router.events.on("routeChangeError", () => setProgress(0))
	}, [])

	return (
		<Layout>
			<LoadingBar
				color="#f11946"
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
				height={3}
			/>

			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
