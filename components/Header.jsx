const Header = () => {
	return (
		<header className="bg-dark-dark-blue p-4 shadow-md">
			<div className="container mx-auto flex items-center">
				<h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mr-auto">
					Where in the world ?
				</h1>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-6 h-6 mr-4"
				>
					<path
						fillRule="evenodd"
						d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
						clipRule="evenodd"
					/>
				</svg>

				<p className="text-lg">Dark mode</p>
			</div>
		</header>
	)
}

export default Header
