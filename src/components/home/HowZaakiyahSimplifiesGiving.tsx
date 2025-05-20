import secureDonationsImage from '../../assets/secure-donations.svg';
import transparentDistributionImage from '../../assets/transparent-distribution.svg';

const steps = [
	{
		title: 'Secure Donations',
		description: 'Your donations are safe, ensuring your Amanah is fulfilled securely.',
		image: secureDonationsImage,
	},
	{
		title: 'Transparent Distributions',
		description:
			'See exactly where your Zakaat and Sadaqah are making a difference, with real-time updates on your contribution',
		image: transparentDistributionImage,
	},
	{
		title: 'Impact Tracking',
		description: 'See how donations make a difference',
		image: transparentDistributionImage,
	},
	{
		title: 'Sharia Compliance',
		description: 'Explanation of how the system aligns with Shariah principles.',
		image: secureDonationsImage,
	},
];

const HowZaakiyahSimplifiesGiving = () => {
	return (
		<section className="bg-[#00939D]/[0.06] py-16 px-8">
			<div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold mb-6 text-[#002828]">
					How Zaakiyah Simplifies Your Giving
				</h2>
				<p className="text-xl md:text-2xl text-[#002828]/90 mb-14">
					Give with sincerity, ensure security, and witness the <br /> impact of your
					Zakaat and Sadaqah in real-time.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
					{steps.map((step, index) => (
						<div
							key={index}
							className={`bg-white rounded-2xl border border-[#E0F2F2] p-6 text-left shadow-sm
							${index === 0 ? 'md:col-span-2 md:col-start-1' : ''} 
							${index === 1 ? 'md:col-span-3 md:col-start-3' : ''} 
							${index === 2 ? 'md:col-span-3 md:col-start-1' : ''} 
							${index === 3 ? 'md:col-span-2 md:col-start-4' : ''}`}
						>
							<h3 className="text-2xl font-semibold mb-2 text-[#002828]">
								{step.title}
							</h3>
							<p className="text-[#002828]/70 text-xl mb-4">{step.description}</p>
							<div className="w-full rounded-md">
								<img
									src={step.image}
									alt={step.title}
									className="w-full h-full object-cover rounded-md"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowZaakiyahSimplifiesGiving;
