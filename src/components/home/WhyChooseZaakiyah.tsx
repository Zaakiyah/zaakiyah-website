import { homeFeatures } from '../../data/featuresData';
import SectionHeader from '../common/SectionHeader';
import FeatureCard from '../common/FeatureCard';

const WhyChooseZaakiyah = () => {
	return (
		<section className="bg-white text-[#002828] pt-20 md:pt-28 pb-16 px-6 relative z-10 overflow-visible">
			<div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
				<SectionHeader title="Why Choose Zaakiyah?" className="mb-10" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{homeFeatures.map((feature, idx) => (
						<FeatureCard
							key={idx}
							icon={feature.icon}
							title={feature.title}
							description={feature.desc}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseZaakiyah;
