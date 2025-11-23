import { HeadphonesIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link } from '@tanstack/react-router';
import Button from './Button';
import IconWithBg from './IconWithBg';
import FAQAccordion from './FAQAccordion';
import { FAQItem, faqItems } from '../../data/faqData';

interface FAQProps {
	items?: FAQItem[];
	limit?: number;
	title?: string;
	subtitle?: string;
	showSupport?: boolean;
	supportButtonText?: string;
	supportButtonLink?: string;
	className?: string;
}

const FAQ: React.FC<FAQProps> = ({
	items,
	limit,
	title = 'Need More Help?',
	subtitle = "Can't find what you're looking for? Our support team is here to help.",
	showSupport = true,
	supportButtonText = 'Contact Support',
	supportButtonLink = '/help',
	className = '',
}) => {
	const displayItems = items || faqItems;

	return (
		<section className={`bg-white py-24 px-6 ${className}`}>
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{showSupport && (
						<div className="md:col-span-1 space-y-8">
							<div className="space-y-4">
								<IconWithBg
									bgColor="bg-gradient-to-br from-[#E0F2F2] to-[#00939D]/20"
									className="p-4 mb-6 shadow-lg"
								>
									<HugeiconsIcon
										icon={HeadphonesIcon}
										size={32}
										color="#002828"
										strokeWidth={1.5}
									/>
								</IconWithBg>

								<h2 className="text-3xl md:text-4xl font-bold text-[#002828] leading-tight">
									{title}
								</h2>
								<div className="w-24 h-1.5 bg-gradient-to-r from-[#00939D] to-[#002828] rounded-full"></div>
							</div>

							<p className="text-lg text-[#002828]/70 leading-relaxed">{subtitle}</p>

							<div>
								<Link to={supportButtonLink}>
									<Button
										variant="outline"
										size="large"
										className="border-2 border-[#00939D] text-[#00939D] hover:bg-[#00939D] hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
									>
										{supportButtonText}
									</Button>
								</Link>
							</div>
						</div>
					)}

					<div className={showSupport ? 'md:col-span-2' : 'md:col-span-3'}>
						<FAQAccordion items={displayItems} limit={limit} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
