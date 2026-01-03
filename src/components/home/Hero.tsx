import { HugeiconsIcon } from '@hugeicons/react';
import { Calculator01Icon, SaveMoneyDollarIcon, UserSearchIcon } from '@hugeicons/core-free-icons';
import Button from '../common/Button';
import TopBannerStats from '../common/TopBannerStats';
import FeatureCard from '../common/FeatureCard';
import NisaabPreview from './NisaabPreview';
import { heroFeatures } from '../../data/featuresData';

const Hero = () => {
	// Get web app URL from environment variable
	const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL || 'http://localhost:3000';
	return (
		<section className="relative bg-[#002828] text-white pt-6 overflow-visible">
			<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-70"></div>
			<div className="absolute inset-0 bg-gradient-to-b from-[#002828]/50 to-[#002828]"></div>

			<div className="relative mt-30 overflow-visible">
				<div className="flex flex-col items-center gap-3 w-full">
					<TopBannerStats />
					{/* Nisaab Preview */}
					<div className="max-w-md w-full px-4 relative z-0">
						<NisaabPreview />
					</div>
				</div>

				<div className="w-full px-4 sm:px-6 md:px-8 pt-4 md:pt-6 pb-32 sm:pb-40 md:pb-48 overflow-visible relative z-20">
					<div className="text-center max-w-5xl mx-auto">
						<h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-4 tracking-tight">
							Transform Lives {/* <br /> */}
							<span className="bg-gradient-to-r from-white to-[#00939D] bg-clip-text text-transparent">
								Through Giving
							</span>
						</h1>
						<p className="text-sm md:text-base text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
							Your Zakaat and Sadaqah can uplift those in need,
							<br className="hidden md:block" />
							<span className="md:hidden"> </span>
							and earn you immense rewards in the Hereafter.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center relative z-30 mb-6 sm:mb-0">
							<a
								href={`${WEB_APP_URL}/calculate`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<Button
									variant="primary"
									size="large"
									className="inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
								>
									<HugeiconsIcon
										icon={Calculator01Icon}
										size={24}
										color="#002828"
										strokeWidth={1.5}
									/>
									Calculate Zakaat
								</Button>
							</a>
							<a
								href={`${WEB_APP_URL}/zakaat/donation/recipients`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<Button
									variant="secondary"
									size="large"
									className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
								>
									<HugeiconsIcon
										icon={SaveMoneyDollarIcon}
										size={24}
										color="currentColor"
										strokeWidth={1.5}
									/>
									Give Donations
								</Button>
							</a>
							<a
								href={`${WEB_APP_URL}/zakaat/apply`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<Button
									variant="secondary"
									size="large"
									className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
								>
									<HugeiconsIcon
										icon={UserSearchIcon}
										size={24}
										color="currentColor"
										strokeWidth={1.5}
									/>
									Request Assistance
								</Button>
							</a>
						</div>
					</div>

					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-5 w-full">
						<div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 md:px-8 py-6 md:py-8 shadow-2xl border border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center transform hover:scale-[1.01] transition-all duration-500 relative z-5">
							{heroFeatures.map((feature, index) => (
								<FeatureCard
									key={index}
									icon={feature.icon}
									title={feature.title}
									description={feature.desc}
									variant="compact"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
