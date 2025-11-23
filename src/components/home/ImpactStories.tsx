import { ArrowRight01Icon, ArrowLeft01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useState } from 'react';
import { testimonials, impactStats } from '../../data/storiesData';

const ImpactStories = () => {
	const [currentStory, setCurrentStory] = useState(0);

	const nextStory = () => {
		setCurrentStory((prev) => (prev + 1) % testimonials.length);
	};

	const prevStory = () => {
		setCurrentStory((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const story = testimonials[currentStory];

	return (
		<section className="bg-white py-24 px-6">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header with arrow */}
				<div className="flex justify-between items-center mb-16">
					<div>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#002828]">
							Impact Stories
						</h2>
						<div className="w-32 h-1.5 bg-gradient-to-r from-[#00939D] to-[#002828] rounded-full"></div>
					</div>
					<div className="flex gap-3">
						<button
							className="p-4 rounded-full bg-[#E0F2F2] hover:bg-[#00939D] transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
							aria-label="Previous story"
							onClick={prevStory}
						>
							<HugeiconsIcon
								icon={ArrowLeft01Icon}
								size={24}
								color="#002828"
								strokeWidth={1.5}
								className="group-hover:text-white transition-colors duration-300"
							/>
						</button>
					<button
							className="p-4 rounded-full bg-[#E0F2F2] hover:bg-[#00939D] transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
						aria-label="Next story"
							onClick={nextStory}
					>
						<HugeiconsIcon
								icon={ArrowRight01Icon}
							size={24}
							color="#002828"
							strokeWidth={1.5}
								className="group-hover:text-white transition-colors duration-300"
						/>
					</button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-5 gap-10 bg-gradient-to-br from-[#00939D]/[0.08] to-[#E0F2F2]/[0.3] rounded-3xl p-10 md:p-16 shadow-xl border border-[#E0F2F2]">
					<div className="md:col-span-3 flex flex-col justify-between">
						<div className="mb-10 max-w-2xl">
							<blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-[#002828] leading-relaxed">
								"{story.quote}"
							</blockquote>
						</div>

						<div className="flex items-center">
							<div
								className={`w-20 h-20 rounded-2xl ${story.avatarColor} flex items-center justify-center text-white mr-5 text-2xl font-bold shadow-lg`}
							>
								{story.avatar}
							</div>
							<div>
								<div className="text-2xl font-bold text-[#002828] mb-1">{story.name}</div>
								<div className="text-[#002828]/60 text-lg font-medium">{story.role}</div>
							</div>
						</div>
					</div>

					<div className="md:col-span-2 flex flex-col justify-center space-y-12 border-t md:border-t-0 md:border-l border-[#00939D]/20 pt-10 md:pl-12 md:pt-0">
						{impactStats.map((stat, index) => (
							<div key={index} className="group">
								<div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-[#00939D] to-[#002828] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
									{stat.percentage}
								</div>
								<div className="text-lg text-[#002828]/70 font-medium leading-relaxed">{stat.description}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImpactStories;
