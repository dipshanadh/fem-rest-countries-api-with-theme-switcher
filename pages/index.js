import { useEffect, useState } from "react"

import CountriesList from "../components/CountriesList"
import Form from "../components/Form"
import fetchData from "../util/fetchData"

export default function Home({ allCountries }) {
	const [countries, setCountries] = useState(allCountries)
	const [search, setSearch] = useState("")
	const [region, setRegion] = useState("none")

	useEffect(() => {
		if (region === "none") return

		fetchData(`https://restcountries.com/v3.1/region/${region}`).then(
			countries => {
				setCountries(countries)

				if (search)
					setCountries(
						countries.filter(country =>
							country.name.common
								.toLowerCase()
								.includes(search.toLowerCase())
						)
					)
				else setCountries(countries)
			}
		)
	}, [search, region])

	return (
		<>
			<Form
				search={search}
				setSearch={setSearch}
				region={region}
				setRegion={setRegion}
			/>
			<CountriesList countries={countries} />
		</>
	)
}

export const getStaticProps = async () => {
	const allCountries = await fetchData(
		"https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
	)

	return {
		props: { allCountries },
	}
}
