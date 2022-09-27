import Link from "next/link"

export default function Country({ country }) {
	const {
		flags,
		name,
		population,
		region,
		capital,
		currencies,
		tld,
		subregion,
		languages,
		borders,
	} = country

	return (
		<section className="px-8">
			<div className="container mx-auto">
				<Link href="/">
					<button
						type="button"
						className="py-2 px-8 my-12 bg-White dark:bg-dark-blue rounded-md shadow-md flex items-center gap-2.5"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
								clipRule="evenodd"
							/>
						</svg>
						Back
					</button>
				</Link>

				<div className="grid grid-cols-2 gap-16 items-center">
					<img
						src={flags.svg}
						alt={name.common}
						className="max-h-[60vh] shadow-md rounded-md"
					/>

					<div>
						<h2 className="text-3xl font-semibold mb-8">
							{name.common}
						</h2>

						<ul role="list" className="grid grid-cols-2 gap-2">
							<li>
								<span className="font-medium">
									Native name:{" "}
								</span>
								{Object.values(name.nativeName)
									.map(name => name.common)
									.join(", ")}
								{}
							</li>
							<li>
								<span className="font-medium">
									Top level domain:{" "}
								</span>
								{tld.join(", ")}
							</li>
							<li>
								<span className="font-medium">
									Population:{" "}
								</span>
								{population}
							</li>
							<li>
								<span className="font-medium">
									Currencies:{" "}
								</span>
								{Object.values(currencies)
									.map(cur => cur.name)
									.join(", ")}
							</li>
							<li>
								<span className="font-medium">Region: </span>
								{region}
							</li>
							<li>
								<span className="font-medium">Languages: </span>
								{Object.values(languages).join(", ")}
							</li>
							<li>
								<span className="font-medium">
									Sub Region:{" "}
								</span>
								{subregion}
							</li>
							<li>
								<span className="font-medium">Capital: </span>
								{capital}
							</li>
						</ul>

						{borders && (
							<div className="mt-8 flex gap-4 flex-wrap items-center">
								<h3 className="font-medium text-lg">
									Border countries:
								</h3>
								{borders.map(country => (
									<div
										className="py-1.5 px-4 bg-White dark:bg-dark-blue rounded-md shadow-md"
										key={country}
									>
										{country}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export const getServerSideProps = async context => {
	const res = await fetch(`
		https://restcountries.com/v3.1/name/${context.params.name}?fullText=true
	`)
	const [country] = await res.json()

	return {
		props: {
			country,
		},
	}
}
