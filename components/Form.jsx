const Form = () => {
	return (
		<form className="px-4 text-lg my-16">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<div className="relative w-full">
					<input
						type="text"
						placeholder="Search for a country..."
						className="bg-dark-dark-blue rounded-md appearance-none py-4 outline-none text-base pl-3 pl-[75px] shadow-md w-1/2"
					/>

					<span className="absolute top-0 left-0 w-20 h-full flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="white"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</div>

				<div className="relative">
					<select
						className="bg-dark-dark-blue rounded-md appearance-none py-4 outline-none pl-5 pr-20 shadow-md"
						defaultValue="none"
					>
						<option value="none" disabled>
							Filter By Region
						</option>
						<option>Africa</option>
						<option>America</option>
						<option>Asia</option>
						<option>Europe</option>
						<option>Oceania</option>
					</select>
					<span className="absolute right-0 top-0 h-full w-16 text-center text-gray-600 pointer-events-none flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="white"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</div>
			</div>
		</form>
	)
}

export default Form
