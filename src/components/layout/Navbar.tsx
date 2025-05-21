import zaakiyahLogo from '../../assets/zaakiyah-logo.svg';
import Button from '../common/Button';
import { useState } from 'react';
import { MenuIcon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="w-full absolute top-0 left-0 z-20 md:mt-4 mb-40">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<a href="/" className="flex items-center gap-2">
							{/* <img src={zaakiyahLogo} alt="Zaakiyah" className="h-10 w-auto" /> */}
							<img src={zaakiyahLogo} alt="Zaakiyah" className="w-15 h-15" />

							<span className="text-2xl font-bold text-white">Zaakiyah</span>
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 text-white"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						<HugeiconsIcon
							icon={isMenuOpen ? Cancel01Icon : MenuIcon}
							size={24}
							color="currentColor"
							strokeWidth={1.5}
						/>
					</button>

					{/* Desktop Navigation Links */}
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

					{/* Desktop Download App Button */}
					<div className="hidden md:block">
						<Button variant="primary" size="medium">
							Download App
						</Button>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				<div
					className={`fixed inset-0 bg-[#002828] z-50 transform transition-transform duration-300 ease-in-out ${
						isMenuOpen ? 'translate-x-0' : 'translate-x-full'
					} md:hidden`}
				>
					<div className="flex flex-col h-full">
						{/* Mobile Menu Header */}
						<div className="flex justify-between items-center p-4 border-b border-white/10">
							<a href="/" className="flex items-center gap-2">
								<img src={zaakiyahLogo} alt="Zaakiyah" className="h-10 w-auto" />
								<span className="text-2xl font-bold text-white">Zaakiyah</span>
							</a>
							<button
								className="p-2 text-white"
								onClick={toggleMenu}
								aria-label="Close menu"
							>
								<HugeiconsIcon
									icon={Cancel01Icon}
									size={24}
									color="currentColor"
									strokeWidth={1.5}
								/>
							</button>
						</div>

						{/* Mobile Navigation Links */}
						<div className="flex flex-col p-4 space-y-4">
							<a
								href="/about"
								className="text-white/70 hover:text-white font-semibold text-lg"
								onClick={toggleMenu}
							>
								About
							</a>
							<a
								href="/products"
								className="text-white/70 hover:text-white font-semibold text-lg"
								onClick={toggleMenu}
							>
								Our Products
							</a>
							<a
								href="/blog"
								className="text-white/70 hover:text-white font-semibold text-lg"
								onClick={toggleMenu}
							>
								Blog
							</a>
							<a
								href="/help"
								className="text-white/70 hover:text-white font-semibold text-lg"
								onClick={toggleMenu}
							>
								Help Center
							</a>
						</div>

						{/* Mobile Download App Button */}
						<div className="p-4 mt-auto">
							<Button variant="primary" size="large" className="w-full">
								Download App
							</Button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
