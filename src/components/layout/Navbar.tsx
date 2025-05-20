import zaakiyahLogo from '../../assets/zaakiyah-logo.svg';

const Navbar = () => {
	return (
		<nav className="w-full absolute top-0 left-0 z-20 mt-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<a href="/" className="flex items-center gap-2">
							<img src={zaakiyahLogo} alt="Zaakiyah" className="h-10 w-auto" />
							<span className="text-2xl font-bold text-white">Zaakiyah</span>
						</a>
					</div>

					{/* Navigation Links */}
					<div className="hidden md:flex items-center space-x-8">
						<a href="/about" className="text-white/70 hover:text-white font-semibold">
							About
						</a>
						<a
							href="/products"
							className="text-white/70 hover:text-white font-semibold"
						>
							Our Products
						</a>
						<a href="/blog" className="text-white/70 hover:text-white font-semibold">
							Blog
						</a>
						<a href="/help" className="text-white/70 hover:text-white font-semibold">
							Help Center
						</a>
					</div>

					{/* Download App Button */}
					<div className="hidden md:block">
						<button className="bg-white text-[#002828] px-8 py-2 rounded-lg font-medium">
							Download App
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
