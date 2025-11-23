import { HugeiconsIcon } from '@hugeicons/react';
import { Calculator01Icon, SaveMoneyDollarIcon, UserSearchIcon } from '@hugeicons/core-free-icons';
import Button from '../common/Button';
import TopBannerStats from '../common/TopBannerStats';
import FeatureCard from '../common/FeatureCard';
import { heroFeatures } from '../../data/featuresData';

const Hero = () => {
	return (
		<section className="relative bg-[#002828] text-white pt-6 overflow-visible">
			<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-70"></div>
			<div className="absolute inset-0 bg-gradient-to-b from-[#002828]/50 to-[#002828]"></div>

			<div className="relative mt-30 overflow-visible">
				<div className="flex justify-center w-full">
					<TopBannerStats />
				</div>

				<div className="w-full px-8 pt-6 md:pt-8 pb-25 md:pb-35 overflow-visible relative">
					<div className="text-center max-w-5xl mx-auto">
						<h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-bold mb-6 tracking-tight">
							Transform Lives {/* <br /> */}
							<span className="bg-gradient-to-r from-white to-[#00939D] bg-clip-text text-transparent">
								Through Giving
							</span>
						</h1>
						<p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
							Your Zakaat and Sadaqah can uplift those in need,
							<br className="hidden md:block" />
							<span className="md:hidden"> </span>
							and earn you immense rewards in the Hereafter.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								variant="primary"
								size="large"
								className="inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
							>
								<HugeiconsIcon
									icon={Calculator01Icon}
									size={24}
									color="#002828"
									strokeWidth={1.5}
								/>
								Calculate Zakaat
							</Button>
							<Button
								variant="secondary"
								size="large"
								className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
							>
								<HugeiconsIcon
									icon={SaveMoneyDollarIcon}
									size={24}
									color="currentColor"
									strokeWidth={1.5}
								/>
								Give Donations
							</Button>
							<Button
								variant="secondary"
								size="large"
								className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
							>
								<HugeiconsIcon
									icon={UserSearchIcon}
									size={24}
									color="currentColor"
									strokeWidth={1.5}
								/>
								Request Assistance
							</Button>
						</div>
					</div>

					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 w-full">
						<div className="bg-white/95 backdrop-blur-md rounded-3xl px-6 md:px-12 py-8 md:py-12 shadow-2xl border border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center transform hover:scale-[1.01] transition-all duration-500 relative z-30">
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
