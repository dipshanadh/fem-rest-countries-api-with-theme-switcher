const searchCountry = (countries, search) =>
	countries.filter(country =>
		country.name.common.toLowerCase().includes(search.toLowerCase())
	)

export default searchCountry
