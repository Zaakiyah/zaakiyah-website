import { HugeiconsIcon } from '@hugeicons/react';
import { Calculator01Icon, MuslimIcon, SaveMoneyDollarIcon } from '@hugeicons/core-free-icons';

const Hero = () => {
	return (
		<section className="relative bg-[#002828] text-white pt-6">
			{/* Background image with overlay */}
			<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-70"></div>

			{/* Content container */}
			<div className="relative z-10">
				{/* Top Banner */}
				<div className="flex justify-center w-full mt-40">
					<div className="flex items-center gap-2 px-6 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
						<span className="flex items-center">
							<HugeiconsIcon
								icon={MuslimIcon}
								size={24}
								color="currentColor"
								strokeWidth={1.5}
							/>
						</span>
						<span className="text-sm">Reaching 100k+ Muslims Nationwide</span>
					</div>
				</div>

				{/* Main Hero Content */}
				<div className="w-full px-8 pt-4 pb-24">
					<div className="text-center mb-14">
						<h1 className="text-[64px] leading-tight font-bold mb-4 tracking-[-0.02em]">
							Transform Lives Through Giving
						</h1>
						<p className="text-xl md:text-2xl text-white/90 mb-14">
							Your Zakaat and Sadaqah can uplift those in need,
							<br />
							and earn you immense rewards in the Hereafter.
						</p>
						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="bg-white text-[#002828] px-8 py-3 rounded-lg text-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
								<HugeiconsIcon
									icon={Calculator01Icon}
									size={24}
									color="#002828"
									strokeWidth={1.5}
								/>
								Calculate Zakaat
							</button>
							<button className="border border-white text-white px-8 py-3.5 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
								<HugeiconsIcon
									icon={SaveMoneyDollarIcon}
									size={24}
									color="currentColor"
									strokeWidth={1.5}
								/>
								Give Donations
							</button>
							<button className="border border-white text-white px-8 py-3.5 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
								Request Assistance
							</button>
						</div>
					</div>

					{/* Statistics */}
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mb-48">
						<div className="bg-white rounded-3xl px-8 py-12 shadow grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
							<div>
								<div className="text-5xl font-extrabold text-[#00939D] mb-2">
									₦30M+
								</div>
								<div className="text-gray-500 text-lg">Donations Processed</div>
							</div>
							<div>
								<div className="text-5xl font-extrabold text-[#00939D] mb-2">
									250+
								</div>
								<div className="text-gray-500 text-lg">Active Donors</div>
							</div>
							<div>
								<div className="text-5xl font-extrabold text-[#00939D] mb-2">
									200+
								</div>
								<div className="text-gray-500 text-lg">Lives Impacted</div>
							</div>
							<div>
								<div className="text-5xl font-extrabold text-[#00939D] mb-2">
									99.9%
								</div>
								<div className="text-gray-500 text-lg">Success Rate</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
