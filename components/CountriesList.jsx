import Link from "next/link"

const CountriesList = ({ countries }) => {
	return (
		<section className="px-8 my-16">
			<div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
				{countries.map(country => {
					const { flags, name, population, region, capital } = country

					return (
						<div
							className="bg-White dark:bg-dark-blue rounded-md shadow-md"
							key={name.common}
						>
							<img
								src={flags.png}
								alt={name.common}
								className="rounded-t-md aspect-video"
							/>

							<div className="p-5">
								<Link
									href="country/[name]"
									as={"/country/" + name.common}
								>
									<h2 className="font-bold text-xl mb-4 hover:underline cursor-pointer">
										{name.common}
									</h2>
								</Link>

								<ul role="list">
									<li>
										<span className="font-medium">
											Population:{" "}
										</span>
										{population}
									</li>
									<li>
										<span className="font-medium">
											Region:{" "}
										</span>
										{region}
									</li>
									<li>
										<span className="font-medium">
											Capital:{" "}
										</span>
										{capital}
									</li>
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default CountriesList
