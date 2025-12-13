import zaakiyahLogo from '../../assets/zaakiyah-logo.svg';
import Button from '../common/Button';
import { useState, useEffect } from 'react';
import { Menu02Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Prevent body scroll when mobile menu is open and reset scroll position
	useEffect(() => {
		if (isMenuOpen) {
			// Save current scroll position
			const scrollY = window.scrollY;
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollY}px`;
			document.body.style.width = '100%';
		} else {
			// Restore scroll position
			const scrollY = document.body.style.top;
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';
			if (scrollY) {
				window.scrollTo(0, parseInt(scrollY || '0') * -1);
			}
		}
		return () => {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Scroll drawer to top when opened
	useEffect(() => {
		if (isMenuOpen) {
			// Find the drawer element and scroll it to top
			const drawer = document.querySelector('[data-mobile-drawer]') as HTMLElement;
			if (drawer) {
				drawer.scrollTop = 0;
			}
		}
	}, [isMenuOpen]);

	const navLinks = [
		{ path: '/about', label: 'About' },
		{ path: '/blog', label: 'Blog' },
		{ path: '/help', label: 'Help Center' },
	];

	const isActive = (path: string) => location.pathname === path;

	const scrollToGetStarted = (e: React.MouseEvent) => {
		e.preventDefault();
		closeMenu();
		
		if (location.pathname === '/') {
			// Already on home page, scroll to section
			setTimeout(() => {
				const element = document.getElementById('get-started');
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}, 100);
		} else {
			// Navigate to home page first, then scroll
			navigate({ to: '/' }).then(() => {
				setTimeout(() => {
					const element = document.getElementById('get-started');
					if (element) {
						element.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				}, 300);
			});
		}
	};

	return (
		<nav
			className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
					: 'bg-transparent py-4 md:py-6'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105"
					>
						<img
							src={zaakiyahLogo}
							alt="Zaakiyah"
							loading="eager"
							fetchPriority="high"
							width="48"
							height="48"
							className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:rotate-3"
						/>
						<span
							className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
								isScrolled
									? 'text-[#002828] group-hover:text-[#00939D]'
									: 'text-white group-hover:text-[#00939D]'
							}`}
						>
							Zaakiyah
						</span>
					</Link>

					{/* Mobile Menu Button */}
					<button
						className={`md:hidden p-2.5 rounded-lg transition-all duration-300 ${
							isScrolled
								? 'text-[#002828] hover:bg-[#E0F2F2]'
								: 'text-white hover:bg-white/10'
						}`}
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						<HugeiconsIcon
							icon={isMenuOpen ? Cancel01Icon : Menu02Icon}
							size={24}
							color="currentColor"
							strokeWidth={1.5}
						/>
					</button>

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex items-center gap-1">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`relative px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
									isScrolled
										? isActive(link.path)
											? 'text-[#00939D] bg-[#E0F2F2]'
											: 'text-[#002828] hover:text-[#00939D] hover:bg-[#E0F2F2]/50'
										: isActive(link.path)
											? 'text-white bg-white/20'
											: 'text-white/80 hover:text-white hover:bg-white/10'
								}`}
							>
								{link.label}
								{isActive(link.path) && (
									<span
										className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
											isScrolled ? 'bg-[#00939D]' : 'bg-white'
										}`}
									/>
								)}
							</Link>
						))}
					</div>

					{/* Desktop Get Started Button */}
					<div className="hidden md:block">
						{isScrolled ? (
							<Button
								variant="outline"
								size="medium"
								className="border-2 border-[#00939D] text-[#00939D] hover:bg-[#00939D] hover:text-white transition-all duration-300"
								onClick={scrollToGetStarted}
							>
								Get Started
							</Button>
						) : (
							<Button variant="primary" size="medium" onClick={scrollToGetStarted}>
								Get Started
							</Button>
						)}
					</div>
					</div>

				{/* Mobile Navigation Menu */}
				<div
					data-mobile-drawer
					className={`fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#002828] via-[#003838] to-[#002828] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
						isMenuOpen ? 'translate-x-0' : 'translate-x-full'
					} md:hidden`}
					style={{ 
						position: 'fixed', 
						top: 0, 
						left: 0, 
						right: 0, 
						bottom: 0,
						width: '100%',
						height: '100vh',
						overflowY: 'auto'
					}}
				>
					{/* Background Pattern - Fixed */}
					<div 
						className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-20 pointer-events-none"
						style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
					></div>
					<div 
						className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002828]/50 to-[#002828] pointer-events-none"
						style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
					></div>

					<div className="relative z-10 flex flex-col min-h-screen w-full">
						{/* Mobile Menu Header */}
						<div className="flex justify-between items-center p-6 border-b border-white/10">
							<Link
								to="/"
								className="flex items-center gap-2.5 group"
								onClick={closeMenu}
							>
								<img
									src={zaakiyahLogo}
									alt="Zaakiyah"
									loading="eager"
									fetchPriority="high"
									width="40"
									height="40"
									className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
								/>
								<span className="text-2xl font-bold text-white group-hover:text-[#00939D] transition-colors duration-300">
									Zaakiyah
								</span>
							</Link>
							<button
								className="p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
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
						<div className="flex flex-col p-6 space-y-2 flex-1">
							{navLinks.map((link, index) => (
								<Link
									key={link.path}
									to={link.path}
									className={`px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
										isActive(link.path)
											? 'text-white bg-white/20 border-l-4 border-[#00939D]'
											: 'text-white/70 hover:text-white hover:bg-white/10'
									}`}
									onClick={closeMenu}
									style={{ animationDelay: `${index * 50}ms` }}
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Mobile Get Started Button */}
						<div className="p-6 border-t border-white/10">
							<Button
								variant="primary"
								size="large"
								className="w-full bg-white text-[#002828] hover:bg-[#00939D] hover:text-white transition-all duration-300"
								onClick={scrollToGetStarted}
							>
								Get Started
							</Button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
