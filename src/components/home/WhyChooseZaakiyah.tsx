import {
	Calculator01Icon,
	GiveBloodIcon,
	CheckmarkCircle03Icon,
	UserMultiple02Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const features = [
	{
		icon: Calculator01Icon,
		title: 'Calculation Accuracy',
		desc: 'Easily calculate your Zakaat with our accurate and Shariah-compliant system.',
	},
	{
		icon: GiveBloodIcon,
		title: 'Verified Giving',
		desc: 'Give with confidence to those truly in need, through verified campaigns.',
	},
	{
		icon: CheckmarkCircle03Icon,
		title: 'Reliable',
		desc: 'Our system calculates your total zakaat due based on your nisaab choice',
	},
	{
		icon: UserMultiple02Icon,
		title: 'Community Driven',
		desc: 'Join a community of givers to make a difference together',
	},
];

const WhyChooseZaakiyah = () => {
	return (
		<section className="bg-white text-[#002828] pt-40 pb-16 px-6">
			<div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold mb-6">Why Choose Zaakiyah?</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{features.map((feature, idx) => (
						<div
							key={idx}
							className="bg-white rounded-2xl border border-[#E0F2F2] p-6 text-left hover:shadow-md transition-all"
						>
							<div className="bg-[#E0F2F2] rounded-full p-3 inline-block mb-4">
								<HugeiconsIcon
									icon={feature.icon}
									size={32}
									color="#002828"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
							<p className="text-[#002828]/70 text-xl">{feature.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseZaakiyah;
