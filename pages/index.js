import { useEffect, useState } from "react"

import CountriesList from "../components/CountriesList"
import Form from "../components/Form"

export default function Home({ data }) {
	const [countries, setCountries] = useState(data)
	const [search, setSearch] = useState("")

	useEffect(() => {
		if (search)
			setCountries(
				data.filter(country =>
					country.name.common
						.toLowerCase()
						.includes(search.toLowerCase())
				)
			)
		else setCountries(data)
	}, [search])

	return (
		<>
			<Form search={search} setSearch={setSearch} />
			<CountriesList countries={countries} />
		</>
	)
}

export const getStaticProps = async () => {
	const res = await fetch(
		"https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
	)
	const data = await res.json()

	return {
		props: { data },
	}
}
