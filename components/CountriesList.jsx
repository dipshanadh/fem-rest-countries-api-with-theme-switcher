const CountriesList = ({ countries }) => {
	return (
		<section className="px-8 my-16">
			<div className="max-w-6xl mx-auto grid grid-cols-4 gap-16">
				{countries.map(country => {
					const { flags, name, population, region, capital } = country

					return (
						<div
							className="bg-dark-dark-blue rounded-md"
							key={name.common}
						>
							<img
								src={flags.png}
								alt={name.common}
								className="rounded-t-md aspect-video w-full"
							/>

							<div className="p-5">
								<h2 className="font-semibold text-xl mb-4">
									{name.common}
								</h2>

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
