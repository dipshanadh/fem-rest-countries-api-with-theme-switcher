import { useEffect, useState } from "react"

import CountriesList from "../components/CountriesList"
import Form from "../components/Form"
import fetchData from "../util/fetchData"
import searchCountry from "../util/search"

export default function Home({ initailCountries }) {
	const [allCountries, setAllCountries] = useState(initailCountries)
	const [filteredCountries, setFilteredCountries] = useState(initailCountries)
	const [search, setSearch] = useState("")
	const [region, setRegion] = useState("none")

	useEffect(() => {
		setFilteredCountries(searchCountry(allCountries, search))
	}, [search])

	useEffect(() => {
		if (region !== "none")
			fetchData(`https://restcountries.com/v3.1/region/${region}`).then(
				countries => {
					setFilteredCountries(searchCountry(countries, search))
					setAllCountries(countries)
				}
			)
	}, [region])

	return (
		<>
			<Form
				search={search}
				setSearch={setSearch}
				region={region}
				setRegion={setRegion}
			/>
			<CountriesList countries={filteredCountries} />
		</>
	)
}

export const getStaticProps = async () => {
	const initailCountries = await fetchData(
		"https://restcountries.com/v3.1/all"
	)

	return {
		props: { initailCountries },
	}
}
