import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { HugeiconsIcon } from '@hugeicons/react';
import {
	Calculator01Icon,
	SaveMoneyDollarIcon,
	UserAccountIcon,
	Shield01Icon,
	QuestionIcon,
	Search01Icon,
	ArrowRight01Icon,
	HeadphonesIcon,
	Message01Icon,
	Mail01Icon,
} from '@hugeicons/core-free-icons';
import { useState } from 'react';
import IconWithBg from '../components/common/IconWithBg';
import FAQAccordion from '../components/common/FAQAccordion';
import { faqItems } from '../data/faqData';

interface HelpCategory {
	icon: any;
	title: string;
	description: string;
	articles: number;
}

const helpCategories: HelpCategory[] = [
	{
		icon: Calculator01Icon,
		title: 'Zakaat Calculation',
		description: 'Learn how to calculate your Zakaat accurately',
		articles: 12,
	},
	{
		icon: SaveMoneyDollarIcon,
		title: 'Making Donations',
		description: 'Guide to donating through Zaakiyah',
		articles: 8,
	},
	{
		icon: UserAccountIcon,
		title: 'Account Management',
		description: 'Manage your account settings and profile',
		articles: 10,
	},
	{
		icon: Shield01Icon,
		title: 'Security & Privacy',
		description: 'Keep your account and data secure',
		articles: 6,
	},
	{
		icon: QuestionIcon,
		title: 'General Questions',
		description: 'Common questions about Zaakiyah',
		articles: 15,
	},
];

export function HelpCenter() {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredFaqs =
		selectedCategory === null
			? faqItems
			: faqItems.filter((item) => item.category === selectedCategory);

	const searchedFaqs = searchQuery
		? filteredFaqs.filter(
				(item) =>
					item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
					item.answer.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: filteredFaqs;

	return (
		<>
			<SEO
				title="Help Center"
				description="Find answers to frequently asked questions about Zakaat calculation, donations, account management, and more. Get the support you need."
				keywords="Zaakiyah help, Zakaat FAQ, support, help center, Zakaat questions, Islamic giving help"
			/>
			<PageHeader
				title="Help Center"
				subtitle="Find answers to your questions and get the support you need"
			/>

			{/* Search Section */}
			<section className="py-12 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="relative">
						<HugeiconsIcon
							icon={Search01Icon}
							size={24}
							color="#002828"
							strokeWidth={1.5}
							className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#002828]/40"
						/>
						<input
							type="text"
							placeholder="Search for help articles, FAQs, or guides..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-[#E0F2F2] focus:outline-none focus:ring-2 focus:ring-[#00939D] focus:border-transparent text-lg"
						/>
					</div>
				</div>
			</section>

			{/* Help Categories */}
			<section className="py-16 px-6 bg-[#00939D]/[0.06]">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-[#002828] mb-4">
							Browse by Category
						</h2>
						<p className="text-lg text-[#002828]/70">
							Find help articles organized by topic
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{helpCategories.map((category, index) => (
							<button
								key={index}
								onClick={() =>
									setSelectedCategory(
										selectedCategory === category.title ? null : category.title
									)
								}
								className={`bg-white rounded-2xl border-2 p-6 text-left hover:shadow-xl transition-all duration-300 group hover:border-[#00939D]/30 hover:-translate-y-1 ${
									selectedCategory === category.title
										? 'border-[#00939D] shadow-lg'
										: 'border-[#E0F2F2]'
								}`}
							>
								<div className="bg-[#E0F2F2] rounded-full p-4 inline-block mb-4 group-hover:bg-[#00939D] transition-colors duration-300">
									<HugeiconsIcon
										icon={category.icon}
										size={32}
										color="#002828"
										strokeWidth={1.5}
										className="group-hover:text-white transition-colors duration-300"
									/>
								</div>
								<h3 className="text-xl font-bold text-[#002828] mb-2 group-hover:text-[#00939D] transition-colors duration-300">
									{category.title}
								</h3>
								<p className="text-base text-[#002828]/70 mb-3">
									{category.description}
								</p>
								<div className="flex items-center gap-2 text-sm text-[#00939D] font-medium">
									<span>{category.articles} articles</span>
									<HugeiconsIcon
										icon={ArrowRight01Icon}
										size={16}
										color="currentColor"
										strokeWidth={1.5}
										className="group-hover:translate-x-1 transition-transform duration-300"
									/>
								</div>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="mb-8">
						<h2 className="text-3xl md:text-4xl font-bold text-[#002828] mb-4">
							Frequently Asked Questions
						</h2>
						{selectedCategory && (
							<div className="flex items-center gap-2">
								<span className="text-base text-[#002828]/70">
									Filtered by: {selectedCategory}
								</span>
								<button
									onClick={() => setSelectedCategory(null)}
									className="text-sm text-[#00939D] hover:underline"
								>
									Clear filter
								</button>
							</div>
						)}
					</div>

					{searchedFaqs.length > 0 ? (
						<FAQAccordion items={searchedFaqs} initialOpenIndex={null} />
					) : (
						<div className="text-center py-12">
							<p className="text-lg text-[#002828]/60">
								No results found. Try a different search term or category.
							</p>
						</div>
					)}
				</div>
			</section>

			{/* Contact Support Section */}
			<section className="bg-[#00939D]/[0.06] py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<IconWithBg bgColor="bg-[#00939D]" className="p-4 inline-block mb-6">
						<HugeiconsIcon
							icon={HeadphonesIcon}
							size={32}
							color="white"
							strokeWidth={1.5}
						/>
					</IconWithBg>
					<h2 className="text-3xl md:text-4xl font-bold text-[#002828] mb-4">
						Still Need Help?
					</h2>
					<p className="text-lg text-[#002828]/70 mb-8 max-w-2xl mx-auto">
						Our support team is here to assist you. Reach out through any of these
						channels and we'll get back to you as soon as possible.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="https://wa.me/2348101424375"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg bg-white text-[#002828] hover:bg-white/90 transition-all duration-300 font-semibold text-base md:text-lg"
						>
							<HugeiconsIcon
								icon={Message01Icon}
								size={20}
								color="#002828"
								strokeWidth={1.5}
							/>
							Live Chat
						</a>
						<a
							href="mailto:info@zaakiyah.com?subject=Support Request"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg border-2 border-[#00939D] text-[#00939D] hover:bg-[#00939D] hover:text-white transition-all duration-300 font-semibold text-base md:text-lg"
						>
							<HugeiconsIcon
								icon={Mail01Icon}
								size={20}
								color="currentColor"
								strokeWidth={1.5}
							/>
							Email Support
						</a>
					</div>
					<div className="mt-8 pt-8 border-t border-[#00939D]/20">
						<p className="text-base text-[#002828]/60">
							Response time: Usually within 24 hours | Available: Monday - Friday, 9
							AM - 5 PM WAT
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
