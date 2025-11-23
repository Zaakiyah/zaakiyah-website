const AppDownload = () => {
	return (
		<section
			id="app-download"
			className="bg-[#00939D]/[0.06] py-16 md:py-24 relative overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left content */}
					<div className="text-center lg:text-left order-2 lg:order-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#002828]">
							Ready to fulfill a major pillar of the Deen?
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-[#002828]/70 mb-8 md:mb-10 leading-relaxed">
							Get our App on App store or Playstore
						</p>

						{/* App store buttons */}
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
							<a
								href="#"
								className="inline-block transition-transform duration-300 hover:scale-105"
								aria-label="Download on the App Store"
							>
								<img
									src="/app-store-badge.png"
									alt="Download on the App Store"
									className="h-14 sm:h-16 md:h-18 w-auto"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.onerror = null;
										target.src =
											'https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg';
									}}
								/>
							</a>

							<a
								href="#"
								className="inline-block transition-transform duration-300 hover:scale-105"
								aria-label="Get it on Google Play"
							>
								<img
									src="/google-play-badge.png"
									alt="Get it on Google Play"
									className="h-14 sm:h-16 md:h-18 w-auto"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.onerror = null;
										target.src =
											'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';
									}}
								/>
							</a>
						</div>
					</div>

					{/* Right content - App screenshots */}
					<div className="relative order-1 lg:order-2 flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-6 sm:gap-4 md:gap-6 lg:gap-8">
						{/* First screenshot - Dashboard */}
						<div className="relative group">
							<div className="absolute inset-0 bg-gradient-to-br from-[#00939D]/20 to-[#002828]/20 rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-500 -z-10 scale-110"></div>
							<div className="rounded-[2.5rem] p-1 bg-gradient-to-br from-[#002828]/30 to-[#002828]/10 shadow-2xl transform -rotate-6 sm:-rotate-8 lg:-rotate-6 group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500">
								<img
									src="/app-dashboard-screenshot.png"
									alt="Zaakiyah app dashboard showing Zakaat calculation"
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
									alt="Zaakiyah app showing completed Zakaat calculation"
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
