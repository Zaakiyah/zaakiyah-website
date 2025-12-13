import { useState } from 'react';
import { Remove01Icon, PlusSignIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { FAQItem } from '../../data/faqData';

interface FAQAccordionProps {
	items: FAQItem[];
	limit?: number;
	variant?: 'default' | 'compact';
	className?: string;
	initialOpenIndex?: number | null;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
	items,
	limit,
	variant = 'default',
	className = '',
	initialOpenIndex = 0,
}) => {
	const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const displayItems = limit ? items.slice(0, limit) : items;

	const isCompact = variant === 'compact';

	return (
		<div className={isCompact ? `space-y-2 ${className}` : `space-y-3 ${className}`}>
			{displayItems.map((item, index) => {
				const isOpen = openIndex === index;
				const baseClasses = isCompact
					? 'rounded-lg border transition-all duration-200'
					: 'rounded-xl border transition-all duration-300';
				const stateClasses = isOpen
					? isCompact
						? 'bg-[#E0F2F2] border-[#00939D]'
						: 'bg-gradient-to-br from-[#E0F2F2] to-white border-[#00939D]/40 shadow-md'
					: isCompact
					? 'bg-white border-[#E0F2F2] hover:border-[#00939D]/30'
					: 'bg-white border-[#E0F2F2] hover:border-[#00939D]/30 hover:shadow-sm';

				return (
					<div key={index} className={`${baseClasses} ${stateClasses}`}>
						<button
							className={`flex justify-between items-center w-full ${
								isCompact ? 'py-3 px-4' : 'py-4 px-5'
							} text-left group`}
							onClick={() => toggleAccordion(index)}
						>
							<span
								className={`${
									isCompact ? 'text-sm font-semibold' : 'text-base font-semibold'
								} text-[#002828] pr-4 ${isOpen ? 'text-[#00939D]' : ''} ${
									!isCompact
										? 'group-hover:text-[#00939D] transition-colors duration-300'
										: ''
								}`}
							>
								{item.question}
							</span>
							<span className="ml-4 flex-shrink-0">
								{isOpen ? (
									<HugeiconsIcon
										icon={Remove01Icon}
										size={20}
										color={isCompact ? '#002828' : '#00939D'}
										strokeWidth={1.5}
										className={
											!isCompact
												? 'transition-transform duration-300 rotate-180'
												: ''
										}
									/>
								) : (
									<HugeiconsIcon
										icon={PlusSignIcon}
										size={20}
										color="#002828"
										strokeWidth={1.5}
										className={
											!isCompact
												? 'group-hover:text-[#00939D] transition-all duration-300'
												: ''
										}
									/>
								)}
							</span>
						</button>

						{isOpen && (
							<div
								className={`${isCompact ? 'pb-3 px-4' : 'pb-4 px-5'} ${
									!isCompact
										? 'animate-in fade-in slide-in-from-top duration-300'
										: ''
								}`}
							>
								<p
									className={`${
										isCompact ? 'text-sm' : 'text-sm'
									} text-[#002828]/70 leading-relaxed`}
								>
									{item.answer}
								</p>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default FAQAccordion;
