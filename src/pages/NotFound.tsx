import { Link } from '@tanstack/react-router';
import { SEO } from '../components/common/SEO';
import { HugeiconsIcon } from '@hugeicons/react';
import {
	Home01Icon,
	Search01Icon,
	QuestionIcon,
	InformationCircleIcon,
} from '@hugeicons/core-free-icons';
import Button from '../components/common/Button';
import zaakiyahLogo from '../assets/zaakiyah-logo.svg';

const quickLinks = [
	{ label: 'Home', path: '/', icon: Home01Icon },
	{ label: 'About Us', path: '/about', icon: InformationCircleIcon },
	{ label: 'Blog', path: '/blog', icon: Search01Icon },
	{ label: 'Help Center', path: '/help', icon: QuestionIcon },
];

export function NotFound() {
	return (
		<>
			<SEO
				title="Page Not Found"
				description="The page you're looking for doesn't exist. Return to Zaakiyah homepage or explore our other pages."
			/>
			{/* Minimal Navigation */}
			<nav className="w-full absolute top-0 left-0 z-20 pt-6">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Link to="/" className="flex items-center gap-2 group">
						<img
						src={zaakiyahLogo}
						alt="Zaakiyah"
						loading="eager"
						fetchPriority="high"
						className="h-10 w-auto"
					/>
						<span className="text-2xl font-bold text-[#002828] group-hover:text-[#00939D] transition-colors duration-300">
							Zaakiyah
						</span>
					</Link>
				</div>
			</nav>
			<section className="w-full bg-white relative overflow-hidden pt-32 md:pt-40 pb-20 min-h-screen">
				{/* Subtle Background Pattern */}
				<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-5"></div>
				<div className="absolute inset-0 bg-gradient-to-b from-[#00939D]/5 via-transparent to-[#E0F2F2]/30"></div>

				{/* Decorative Elements */}
				<div className="absolute top-20 right-10 w-64 h-64 bg-[#00939D]/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-10 w-80 h-80 bg-[#E0F2F2] rounded-full blur-3xl"></div>

				{/* Main Content */}
				<div className="relative z-10 w-full flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						{/* 404 Number with Animation */}
						<div className="mb-8">
							<h1 className="text-[120px] sm:text-[150px] md:text-[180px] font-extrabold leading-none bg-gradient-to-r from-[#00939D] to-[#002828] bg-clip-text text-transparent drop-shadow-sm">
								404
							</h1>
						</div>

						{/* Main Message */}
						<div className="mb-8">
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#002828]">
								Oops! Page Not Found
							</h2>
							<p className="text-lg sm:text-xl text-[#002828]/70 max-w-2xl mx-auto leading-relaxed">
								The page you're looking for seems to have wandered off. Perhaps it's
								fulfilling its Zakaat elsewhere? Let's get you back on track.
							</p>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
							<Link to="/">
								<Button
									variant="primary"
									size="large"
									className="inline-flex items-center gap-2 group"
								>
									<HugeiconsIcon
										icon={Home01Icon}
										size={20}
										color="#002828"
										strokeWidth={1.5}
									/>
									<span>Return Home</span>
								</Button>
							</Link>
							<Link to="/help">
								<Button
									variant="outline"
									size="large"
									className="inline-flex items-center gap-2 border-2 border-[#00939D] text-[#00939D] hover:bg-[#00939D] hover:text-white"
								>
									<HugeiconsIcon
										icon={Search01Icon}
										size={20}
										color="currentColor"
										strokeWidth={1.5}
									/>
									<span>Get Help</span>
								</Button>
							</Link>
						</div>

						{/* Quick Links Section */}
						<div className="mt-16 pt-12 border-t border-[#E0F2F2]">
							<p className="text-sm text-[#002828]/60 mb-6 font-medium">
								Or explore these popular pages:
							</p>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
								{quickLinks.map((link, index) => (
									<Link
										key={index}
										to={link.path}
										className="group bg-white hover:bg-[#E0F2F2] rounded-xl p-4 border-2 border-[#E0F2F2] hover:border-[#00939D] transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
									>
										<div className="flex flex-col items-center gap-3">
											<div className="w-12 h-12 rounded-full bg-[#E0F2F2] group-hover:bg-[#00939D] flex items-center justify-center transition-all duration-300">
												<HugeiconsIcon
													icon={link.icon}
													size={24}
													color="#002828"
													strokeWidth={1.5}
													className="group-hover:!text-white transition-colors duration-300"
												/>
											</div>
											<span className="text-sm font-medium text-[#002828] group-hover:text-[#00939D] transition-colors duration-300">
												{link.label}
											</span>
										</div>
									</Link>
								))}
							</div>
						</div>

						{/* Decorative Element */}
						<div className="mt-16 flex justify-center">
							<div className="flex items-center gap-2 text-[#002828]/40 text-sm">
								<div className="w-8 h-px bg-[#E0F2F2]"></div>
								<span>Error 404</span>
								<div className="w-8 h-px bg-[#E0F2F2]"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
