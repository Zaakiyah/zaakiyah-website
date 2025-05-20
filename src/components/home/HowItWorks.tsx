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
		<section className="relative bg-[#002828] text-white py-16 px-6">
			<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-30" />

			<div className="max-w-7xl mx-auto relative">
				{/* Header */}
				<div className="mb-12">
					<div className="inline-block border border-[#00939D] text-sm text-white px-4 py-1.5 rounded-md mb-4 bg-[#00939D]/10">
						STEP BY STEP
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold">How It Works</h2>
				</div>

				{/* Steps */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{steps.map((step, index) => (
						<div
							key={index}
							className="bg-[#003334] rounded-2xl p-6 md:p-8 border border-[#005154] relative overflow-hidden"
						>
							{/* Step Number */}
							<div className="text-[72px] md:text-[88px] font-extrabold bg-gradient-to-b from-white to-[#0D2B2D]/100 text-transparent bg-clip-text -mb-2 leading-none">
								{step.number}
							</div>

							{/* Content */}
							<div>
								<h3 className="text-xl md:text-3xl font-semibold mb-2 text-white">
									{step.title}
								</h3>
								<p className="text-[#B0B0B0] text-sm md:text-xl leading-relaxed">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
