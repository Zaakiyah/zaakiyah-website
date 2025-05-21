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
					<div className="inline-block border border-[#00939D] text-sm text-white px-4 py-1.5 rounded-md mb-4 bg-[#00939D]/10 shadow-md shadow-[#00939D]/30">
						STEP BY STEP
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold">How It Works</h2>
				</div>

				{/* Steps */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{steps.map((step, index) => (
						<div
							key={index}
							className="relative rounded-2xl p-8 md:p-10 bg-[#0D2B2D] overflow-hidden"
						>
							{/* Gradient Outline */}
							<div
								className="absolute inset-0 rounded-2xl pointer-events-none"
								style={{
									border: '1px solid #00939D',
									background: 'linear-gradient(270deg, #00939D, #003437)',
									opacity: 0.8,
								}}
							/>

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
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
