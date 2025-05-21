import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import IconWithBg from '../common/IconWithBg';

const story = {
	quote: 'I cannot put into words how much this Zakaat donation has meant to me & my family.',
	name: 'Ahmed Kola',
	role: 'Student',
	avatar: 'AH',
	avatarColor: 'bg-teal-500',
};

const stats = [
	{
		percentage: '100%',
		description: 'Users find Zaakiyah simple & easy to use.',
	},
	{
		percentage: '98%',
		description: 'Donations were made seamlessly through Zaakiyah.',
	},
];

const ImpactStories = () => {
	return (
		<section className="bg-white py-16 px-6">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header with arrow */}
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-4xl font-bold text-[#002828]">Impact Stories</h2>
					<button
						className="p-2 hover:bg-gray-100 transition-colors"
						aria-label="Next story"
					>
						<HugeiconsIcon
							icon={ArrowRight02Icon}
							size={24}
							color="#002828"
							strokeWidth={1.5}
						/>
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
					{/* Left side - Quote and profile */}
					<div className="md:col-span-3">
						{/* Story Quote */}
						<div className="mb-8 max-w-lg">
							<blockquote className="text-xl md:text-2xl font-semibold text-[#002828]">
								"{story.quote}"
							</blockquote>
						</div>

						<div className="flex items-center">
							<IconWithBg
								gradientFrom="#00939D"
								gradientTo="#9EDDFF"
								className="w-14 h-14"
							>
								{story.avatar}
							</IconWithBg>
							<div className="ml-4">
								<div className="text-xl font-bold text-[#002828]">{story.name}</div>
								<div className="text-gray-500">{story.role}</div>
							</div>
						</div>
					</div>

					{/* Right side - Statistics */}
					<div className="md:col-span-2 flex flex-col justify-center space-y-10">
						{stats.map((stat, index) => (
							<div key={index}>
								<div className="text-4xl font-bold text-[#002828]">
									{stat.percentage}
								</div>
								<div className="text-lg text-gray-500 mt-2">{stat.description}</div>
							</div>
						))}
					</div>
				</div>

			</div>
		</section>
	);
};

export default ImpactStories;
