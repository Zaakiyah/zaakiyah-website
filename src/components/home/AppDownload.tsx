import appDashboardImage from '../../assets/app-dashboard.svg';

const AppDownload = () => {
	return (
		<section className="bg-[#002828] text-white py-16 relative overflow-hidden">
			<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-70"></div>

			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
				{/* Left content */}
				<div className="z-10 md:col-span-4">
					<h2 className="text-5xl md:text-5xl font-bold mb-4">
						Ready to fulfill a major pillar of the Deen?
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Get our App on App store or Playstore
					</p>

					{/* App store buttons */}
					<div className="flex flex-wrap gap-8">
						<a href="#" className="inline-block" aria-label="Download on the App Store">
							<img
								src="/app-store-badge.png"
								alt="Download on the App Store"
								className="h-22 w-auto"
								onError={(e) => {
									const target = e.target as HTMLImageElement;
									target.onerror = null;
									target.src =
										'https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg';
								}}
							/>
						</a>

						<a href="#" className="inline-block" aria-label="Get it on Google Play">
							<img
								src="/google-play-badge.png"
								alt="Get it on Google Play"
								className="h-22 w-auto"
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

				{/* Right content - App screenshot */}
				<div className="relative md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 z-10">
					<img
						src={appDashboardImage}
						alt="Zaakiyah mobile app screenshot"
						className="w-full max-w-xs md:max-w-md mx-auto"
						onError={(e) => {
							const target = e.target as HTMLImageElement;
							target.onerror = null;
							target.style.backgroundColor = '#f0f0f0';
							target.style.borderRadius = '24px';
							target.style.height = '500px';
							target.style.width = '250px';
						}}
					/>
				</div>

				{/* Optional: Background pattern or gradient */}
				<div className="absolute inset-0 bg-gradient-to-r from-[#002828] to-[#004848] opacity-50"></div>
			</div>
		</section>
	);
};

export default AppDownload;
