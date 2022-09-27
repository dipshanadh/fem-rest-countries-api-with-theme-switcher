import Link from "next/link"

const CountriesList = ({ countries }) => {
	return (
		<section className="px-4 pb-8">
			<div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
				{countries.map(country => {
					const { flags, name, population, region, capital, area } =
						country

					return (
						<div
							className="bg-White dark:bg-dark-blue rounded-md shadow-md"
							key={name.common}
						>
							<img
								src={flags.png}
								alt={name.common}
								className="rounded-t-md aspect-video w-full"
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

								<ul>
									<li>
										<span className="font-medium">
											Capital:{" "}
										</span>
										{capital}
									</li>
									<li>
										<span className="font-medium">
											Population:{" "}
										</span>
										{new Intl.NumberFormat("en-us").format(
											population
										)}
									</li>
									<li>
										<span className="font-medium">
											Area:{" "}
										</span>
										{new Intl.NumberFormat("en-us").format(
											area
										)}{" "}
										sq. km
									</li>
									<li>
										<span className="font-medium">
											Region:{" "}
										</span>
										{region}
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
