import { useState } from 'react';
import { HeadphonesIcon, Remove01Icon, PlusSignIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Button from '../common/Button';
import IconWithBg from '../common/IconWithBg';

const faqItems = [
	{
		question: 'Do I need to link my bank account to use Zaakiyah?',
		answer: 'Lorem ipsum dolor sit amet consectetur. Sagittis adipiscing mauris sit odio diam bibendum sodales pretium ac. Non dui massa habitant id urna ultricies. Sem nibh viverra eu vestibulum eu egestas posuere. Cursus viverra amet orci ipsum ac pretium.',
	},
	{
		question: 'Do I need to link my bank account to use Zaakiyah?',
		answer: 'No, linking a bank account is optional. You can manually enter your wealth information for Zakaat calculation. However, linking your account provides a more streamlined experience and ensures accurate calculations based on your current financial data.',
	},
	{
		question: 'Do I need to link my bank account to use Zaakiyah?',
		answer: 'Linking your bank account is entirely optional. You can use Zaakiyah by manually entering your financial information. Account linking is offered as a convenience feature to simplify the calculation process.',
	},
	{
		question: 'Do I need to link my bank account to use Zaakiyah?',
		answer: 'You can use Zaakiyah without linking your bank account. We provide options for both manual entry and account linking to accommodate different user preferences regarding financial privacy and convenience.',
	},
	{
		question: 'Do I need to link my bank account to use Zaakiyah?',
		answer: 'Bank account linking is not required to use Zaakiyah. While it can make the process faster, many users prefer to enter their financial information manually, and our platform fully supports both methods.',
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	return (
		<section className="bg-white py-16 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Left column with heading and support button */}
					<div className="md:col-span-1 space-y-6">
						<div className="flex items-center">
							<IconWithBg bgColor="bg-[#E0F2F2]" className="p-3 mr-4">
								<HugeiconsIcon
									icon={HeadphonesIcon}
									size={28}
									color="#002828"
									strokeWidth={1.5}
								/>
							</IconWithBg>

							<h2 className="text-4xl font-bold text-[#002828]">Need More Help?</h2>
						</div>

						<div>
							<Button variant="outline" size="large">
								Contact Support
							</Button>
						</div>
					</div>

					{/* Right column with FAQ accordion */}
					<div className="md:col-span-2">
						<div className="space-y-2">
							{faqItems.map((item, index) => (
								<div
									key={index}
									className={`rounded-lg transition-colors duration-200 ${
										openIndex === index ? 'bg-[#E0F2F2]' : ''
									}`}
								>
									<button
										className="flex justify-between items-center w-full py-6 px-6 text-left"
										onClick={() => toggleAccordion(index)}
									>
										<span className="text-lg font-medium text-[#002828]">
											{item.question}
										</span>
										<span className="ml-6 flex-shrink-0">
											{openIndex === index ? (
												<HugeiconsIcon
													icon={Remove01Icon}
													size={24}
													color="#002828"
													strokeWidth={1.5}
												/>
											) : (
												<HugeiconsIcon
													icon={PlusSignIcon}
													size={24}
													color="#002828"
													strokeWidth={1.5}
												/>
											)}
										</span>
									</button>

									{/* Conditional rendering for answer */}
									{openIndex === index && (
										<div className="pb-6 px-6">
											<p className="text-gray-600">{item.answer}</p>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
