import CountriesList from "../components/CountriesList"
import Form from "../components/Form"

export default function Home({ countries }) {
	return (
		<>
			<Form />
			<CountriesList countries={countries} />
		</>
	)
}

export const getStaticProps = async () => {
	const res = await fetch("https://restcountries.com/v3.1/all")
	const countries = await res.json()

	return {
		props: { countries },
	}
}
