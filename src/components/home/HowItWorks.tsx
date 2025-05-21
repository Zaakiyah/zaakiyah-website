import GradientBorderCard from '../common/GradientBorderCard';

const steps = [
	{
		number: '1',
		title: 'Calculate Your Wealth',
		description: 'Using a seamless and user friendly system',
	},
	{
		number: '2',
		title: 'Get Zakaat Due',
		description: 'Your financial information are safe with us.',
	},
	{
		number: '3',
		title: 'Donate Zakaat',
		description: 'Your transactions are protected with advanced security.',
	},
];

const HowItWorks = () => {
	return (
		<section className="relative bg-[#002828] text-white py-20 px-6">
			<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center"></div>

			<div className="max-w-7xl mx-auto relative">
				{/* Header */}
				<div className="mb-12">
					<div
						className="inline-block border border-[#00939D] text-md text-white px-4 py-3 rounded-md mb-4 bg-[#00939D]/10"
						style={{
							borderRight: '1px solid #003437',
							border: '1px solid transparent',
							borderLeft: '1px solid #00939D',
							background:
								'linear-gradient(270deg, #0D2B2D, #0D2B2D) padding-box, linear-gradient(to right, #00939D, #003437) border-box',
						}}
					>
						STEP BY STEP
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold">How It Works</h2>
				</div>

				{/* Steps */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{steps.map((step, index) => (
						<GradientBorderCard
							key={index}
							bgGradientFrom="#0D2B2D"
							bgGradientTo="#0D2B2D"
							className="p-8 md:p-10 bg-[#0D2B2D]"
						>
							{/* Step Number */}
							<div className="text-[72px] md:text-[96px] font-extrabold bg-gradient-to-b from-white to-[#0D2B2D] text-transparent -mb-3 bg-clip-text leading-none z-10 relative">
								{step.number}
							</div>

							{/* Content */}
							<div className="relative z-10">
								<h3 className="text-xl md:text-3xl font-semibold mb-2 text-white">
									{step.title}
								</h3>
								<p className="text-[#B0B0B0] text-sm md:text-xl leading-[1.2] tracking-[0.03em]">
									{step.description}
								</p>
							</div>
						</GradientBorderCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
