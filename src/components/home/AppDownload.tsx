import Button from '../common/Button';

const AppDownload = () => {
	// Get web app URL from environment variable
	// Default to localhost for development if not set
	const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL || 'http://localhost:3000';

	return (
		<section
			id="get-started"
			className="bg-[#00939D]/[0.06] py-12 md:py-16 relative overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Left content */}
					<div className="text-center lg:text-left order-2 lg:order-1">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-[#002828]">
							Ready to fulfill a major pillar of the Deen?
						</h2>
						<p className="text-sm md:text-base text-[#002828]/70 mb-6 leading-relaxed">
							Access Zaakiyah on any device - no download required. Our mobile-first web app works seamlessly on your phone, tablet, or computer.
						</p>

						{/* Get Started Button */}
						<div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
							<a
								href={WEB_APP_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<Button
									variant="primary"
									size="large"
									className="w-full sm:w-auto"
								>
									Get Started
								</Button>
							</a>
							<a
								href={`${WEB_APP_URL}/signup`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<Button
									variant="outline"
									size="large"
									className="w-full sm:w-auto border-2 border-[#00939D] text-[#00939D] hover:bg-[#00939D] hover:text-white"
								>
									Create Account
								</Button>
							</a>
						</div>
					</div>

					{/* Right content - Web app screenshots */}
					<div className="relative order-1 lg:order-2 flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-4 sm:gap-3 md:gap-4 lg:gap-6">
						{/* First screenshot - Dashboard */}
						<div className="relative group">
							<div className="absolute inset-0 bg-gradient-to-br from-[#00939D]/20 to-[#002828]/20 rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-500 -z-10 scale-110"></div>
							<div className="rounded-[2.5rem] p-1 bg-gradient-to-br from-[#002828]/30 to-[#002828]/10 shadow-2xl transform -rotate-6 sm:-rotate-8 lg:-rotate-6 group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500">
								<img
									src="/app-dashboard-screenshot.png"
									alt="Zaakiyah web app dashboard showing Zakaat calculation"
									loading="lazy"
									decoding="async"
									width="300"
									height="650"
									className="w-full max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] mx-auto lg:mx-0 rounded-[2.25rem] object-cover block"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.onerror = null;
										target.style.backgroundColor = '#f0f0f0';
										target.style.borderRadius = '2.25rem';
										target.style.height = 'auto';
										target.style.width = 'auto';
										target.style.aspectRatio = '9/19.5';
									}}
								/>
							</div>
						</div>

						{/* Second screenshot - Calculation Complete */}
						<div className="relative group -mt-4 sm:mt-0">
							<div className="absolute inset-0 bg-gradient-to-br from-[#00939D]/20 to-[#002828]/20 rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-500 -z-10 scale-110"></div>
							<div className="rounded-[2.5rem] p-1 bg-gradient-to-br from-[#002828]/30 to-[#002828]/10 shadow-2xl transform rotate-6 sm:rotate-8 lg:rotate-6 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500">
								<img
									src="/app-calculation-complete-screenshot.png"
									alt="Zaakiyah web app showing completed Zakaat calculation"
									loading="lazy"
									decoding="async"
									width="300"
									height="650"
									className="w-full max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] mx-auto lg:mx-0 rounded-[2.25rem] object-cover block"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.onerror = null;
										target.style.backgroundColor = '#f0f0f0';
										target.style.borderRadius = '2.25rem';
										target.style.height = 'auto';
										target.style.width = 'auto';
										target.style.aspectRatio = '9/19.5';
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppDownload;
