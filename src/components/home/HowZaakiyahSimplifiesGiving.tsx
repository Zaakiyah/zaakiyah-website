import { simplifiesGivingSteps } from '../../data/stepsData';
import SectionHeader from '../common/SectionHeader';
import StepCard from '../common/StepCard';

const colSpanClasses = [
	'md:col-span-2 md:col-start-1',
	'md:col-span-3 md:col-start-3',
	'md:col-span-3 md:col-start-1',
	'md:col-span-2 md:col-start-4',
];

const HowZaakiyahSimplifiesGiving = () => {
	return (
		<section className="bg-[#00939D]/[0.06] py-24 px-6">
			<div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
				<SectionHeader title="How Zaakiyah Simplifies Your Giving" className="mb-12" />
				<p className="text-lg md:text-xl text-[#002828]/80 mb-16 max-w-3xl mx-auto leading-relaxed">
					Give with sincerity, ensure security, and witness the impact of your
					Zakaat and Sadaqah in real-time.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
					{simplifiesGivingSteps.map((step, index) => (
						<StepCard
							key={index}
							title={step.title}
							description={step.description}
							image={step.image}
							colSpan={colSpanClasses[index]}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowZaakiyahSimplifiesGiving;
