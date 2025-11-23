import { howItWorksSteps } from '../../data/stepsData';
import StepCard from '../common/StepCard';
import SectionHeader from '../common/SectionHeader';

const HowItWorks = () => {
	return (
		<section className="relative bg-[#002828] text-white py-16 md:py-20 px-6 overflow-hidden">
			<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-50"></div>
			<div className="absolute inset-0 bg-gradient-to-b from-[#002828]/90 to-[#002828]"></div>

			<div className="max-w-7xl mx-auto relative z-10">
				<SectionHeader
					title="How It Works"
					badge="STEP BY STEP"
					className="mb-10 md:mb-12"
					dark
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
					{howItWorksSteps.map((step, index) => (
						<StepCard
							key={index}
							number={step.number}
							title={step.title}
							description={step.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
