import { useEffect, useState } from "react"

import CountriesList from "../components/CountriesList"
import Form from "../components/Form"
import fetchData from "../util/fetchData"

export default function Home({ countries }) {
	const [allCountries, setAllCountries] = useState(countries)
	const [filteredCountries, setFilteredCountries] = useState(countries)
	const [search, setSearch] = useState("")
	const [region, setRegion] = useState("none")

	useEffect(() => {
		if (search)
			setFilteredCountries(
				allCountries.filter(country =>
					country.name.common
						.toLowerCase()
						.includes(search.toLowerCase())
				)
			)
		else setFilteredCountries(allCountries)
	}, [search])

	useEffect(() => {
		if (region !== "none")
			fetchData(`https://restcountries.com/v3.1/region/${region}`).then(
				countries => setAllCountries(countries)
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
	const countries = await fetchData(
		"https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
	)

	return {
		props: { countries },
	}
}
