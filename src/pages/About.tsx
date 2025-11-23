import { PageHeader } from '../components/common/PageHeader';
import TopBannerStats from '../components/common/TopBannerStats';
import { SEO } from '../components/common/SEO';
import { HugeiconsIcon } from '@hugeicons/react';
import FAQ from '../components/common/FAQ';
import { faqItems } from '../data/faqData';
import { coreValues, milestones, missionData, visionData, aboutStory } from '../data/aboutData';

export function About() {
	return (
		<>
			<SEO
				title="About Us"
				description="Learn about Zaakiyah's mission to revolutionize Zakaat calculation and distribution. Discover our values, vision, and commitment to Islamic principles."
				keywords="About Zaakiyah, Zakaat platform, Islamic finance, Shariah compliant, Islamic giving platform, Nigeria"
			/>
			<PageHeader
				title="About Zaakiyah"
				subtitle="Empowering Muslims to fulfill their Zakaat obligations with confidence and ease."
			>
				<div className="flex justify-center w-full mb-3">
					<TopBannerStats />
				</div>
			</PageHeader>

			{/* Mission & Vision Section */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="group bg-gradient-to-br from-white to-[#E0F2F2]/30 rounded-3xl p-8 md:p-10 border-2 border-[#E0F2F2] hover:border-[#00939D] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
							<div className="bg-[#00939D] rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
								<HugeiconsIcon
									icon={missionData.icon}
									size={40}
									color="white"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-2xl md:text-3xl font-bold text-[#002828] mb-4 group-hover:text-[#00939D] transition-colors duration-300">
								{missionData.title}
							</h3>
							<p className="text-base md:text-lg text-[#002828]/70 leading-relaxed">
								{missionData.description}
							</p>
						</div>
						<div className="group bg-gradient-to-br from-white to-[#E0F2F2]/30 rounded-3xl p-8 md:p-10 border-2 border-[#E0F2F2] hover:border-[#00939D] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
							<div className="bg-[#00939D] rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
								<HugeiconsIcon
									icon={visionData.icon}
									size={40}
									color="white"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-2xl md:text-3xl font-bold text-[#002828] mb-4 group-hover:text-[#00939D] transition-colors duration-300">
								{visionData.title}
							</h3>
							<p className="text-base md:text-lg text-[#002828]/70 leading-relaxed">
								{visionData.description}
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 px-6 bg-[#00939D]/6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-[#002828] mb-4">
							Our Core Values
						</h2>
						<div className="w-24 h-1 bg-[#00939D] mx-auto rounded-full"></div>
						<p className="text-lg text-[#002828]/70 mt-4 max-w-2xl mx-auto">
							The principles that guide everything we do
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{coreValues.map((value, index) => (
							<div
								key={index}
								className="group bg-white rounded-2xl p-6 border-2 border-[#E0F2F2] hover:border-[#00939D] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
							>
								<div className="bg-[#E0F2F2] rounded-xl p-3 w-fit mb-4 group-hover:bg-[#00939D] transition-colors duration-300">
									<HugeiconsIcon
										icon={value.icon}
										size={32}
										color="#002828"
										strokeWidth={1.5}
										className="group-hover:text-white transition-colors duration-300"
									/>
								</div>
								<h3 className="text-xl font-bold text-[#002828] mb-2 group-hover:text-[#00939D] transition-colors duration-300">
									{value.title}
								</h3>
								<p className="text-sm text-[#002828]/70 leading-relaxed">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-block px-4 py-2 bg-[#00939D]/10 rounded-full mb-6">
								<span className="text-sm font-semibold text-[#00939D]">
									{aboutStory.badge}
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-[#002828] mb-6 leading-tight">
								{aboutStory.title}
							</h2>
							<div className="space-y-4 text-base md:text-lg text-[#002828]/80 leading-relaxed">
								{aboutStory.paragraphs.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
								<p className="font-semibold text-[#00939D]">
									{aboutStory.callToAction}
								</p>
							</div>
						</div>

						<div className="relative">
							<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00939D] to-[#E0F2F2] hidden lg:block"></div>
							<div className="space-y-8">
								{milestones.map((milestone, index) => (
									<div key={index} className="relative flex items-start gap-6">
										<div className="relative z-10 flex-shrink-0">
											<div className="w-16 h-16 rounded-full bg-[#00939D] flex items-center justify-center text-white font-bold text-lg shadow-lg">
												{milestone.year.slice(-2)}
											</div>
										</div>
										<div className="flex-1 pt-2">
											<h3 className="text-xl font-bold text-[#002828] mb-2">
												{milestone.title}
											</h3>
											<p className="text-base text-[#002828]/70">
												{milestone.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 px-6 bg-gradient-to-br from-[#00939D]/8 to-[#002828]/5">
				<div className="max-w-7xl mx-auto">
					<div
						id="impact-stats"
						className="bg-white rounded-3xl shadow-xl px-6 md:px-12 py-12 md:py-16 border border-[#00939D]/20"
					>
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold text-[#002828] mb-4">
								Our Vision for Impact
							</h2>
							<div className="w-24 h-1 bg-[#00939D] mx-auto rounded-full mb-4"></div>
							<p className="text-base md:text-lg text-[#002828]/70 max-w-3xl mx-auto">
								Our goal is to help thousands of Muslims fulfill their Zakaat
								obligations and support those in need through our innovative
								platform.
							</p>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
							<div className="text-center group">
								<div className="text-3xl md:text-5xl font-extrabold text-[#00939D] mb-3 group-hover:scale-110 transition-transform duration-300">
									Secure
								</div>
								<div className="text-xs md:text-base font-medium text-[#002828]/70">
									Bank-Level Security
								</div>
							</div>
							<div className="text-center group">
								<div className="text-3xl md:text-5xl font-extrabold text-[#00939D] mb-3 group-hover:scale-110 transition-transform duration-300">
									100%
								</div>
								<div className="text-xs md:text-base font-medium text-[#002828]/70">
									Shariah Compliant
								</div>
							</div>
							<div className="text-center group">
								<div className="text-3xl md:text-5xl font-extrabold text-[#00939D] mb-3 group-hover:scale-110 transition-transform duration-300">
									Real-Time
								</div>
								<div className="text-xs md:text-base font-medium text-[#002828]/70">
									Transparency
								</div>
							</div>
							<div className="text-center group">
								<div className="text-3xl md:text-5xl font-extrabold text-[#00939D] mb-3 group-hover:scale-110 transition-transform duration-300">
									Easy
								</div>
								<div className="text-xs md:text-base font-medium text-[#002828]/70">
									User-Friendly
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<FAQ items={faqItems} showSupport={true} />
		</>
	);
}
