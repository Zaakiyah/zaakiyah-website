import { useParams, Link } from '@tanstack/react-router';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/common/PageHeader';
import { HugeiconsIcon } from '@hugeicons/react';
import {
	Calendar01Icon,
	User02Icon,
	ArrowLeft01Icon,
	Clock01Icon,
} from '@hugeicons/core-free-icons';
import { blogPosts } from '../data/blogData';

export function BlogPost() {
	const { id } = useParams({ from: '/blog/$id' });
	const postId = parseInt(id || '0', 10);
	const post = blogPosts.find((p) => p.id === postId);

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	if (!post) {
		return (
			<>
				<SEO
					title="Post Not Found"
					description="The blog post you're looking for doesn't exist."
				/>
				<PageHeader
					title="Post Not Found"
					subtitle="The blog post you're looking for doesn't exist."
				/>
				<section className="py-16 px-6 bg-white">
					<div className="max-w-3xl mx-auto text-center">
						<Link
							to="/blog"
							className="inline-flex items-center gap-2 text-[#00939D] font-semibold hover:gap-3 transition-all duration-300"
						>
							<HugeiconsIcon
								icon={ArrowLeft01Icon}
								size={20}
								color="currentColor"
								strokeWidth={1.5}
							/>
							Back to Blog
						</Link>
					</div>
				</section>
			</>
		);
	}

	return (
		<>
			<SEO
				title={post.title}
				description={post.excerpt}
				keywords={`${post.category}, Zakaat, Sadaqah, Islamic giving, ${post.title}`}
				ogType="article"
			/>
			{/* Header */}
			<section className="relative bg-[#002828] text-white py-16 px-6">
				<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-80"></div>
				<div className="max-w-4xl mx-auto relative z-10 mt-20">
					{/* Back Button */}
					<Link
						to="/blog"
						className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-300"
					>
						<HugeiconsIcon
							icon={ArrowLeft01Icon}
							size={20}
							color="currentColor"
							strokeWidth={1.5}
						/>
						<span>Back to Blog</span>
					</Link>

					{/* Category Badge */}
					<div className="mb-4">
						<span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-[#00939D] text-white">
							{post.category}
						</span>
					</div>

					{/* Title */}
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
						{post.title}
					</h1>

					{/* Meta Information */}
					<div className="flex flex-wrap items-center gap-6 text-base text-white/80">
						<div className="flex items-center gap-2">
							<HugeiconsIcon
								icon={User02Icon}
								size={18}
								color="currentColor"
								strokeWidth={1.5}
							/>
							<span>{post.author}</span>
						</div>
						<div className="flex items-center gap-2">
							<HugeiconsIcon
								icon={Calendar01Icon}
								size={18}
								color="currentColor"
								strokeWidth={1.5}
							/>
							<span>{formatDate(post.date)}</span>
						</div>
						<div className="flex items-center gap-2">
							<HugeiconsIcon
								icon={Clock01Icon}
								size={18}
								color="currentColor"
								strokeWidth={1.5}
							/>
							<span>{post.readTime}</span>
						</div>
					</div>
				</div>
			</section>

			{/* Content */}
			<article className="py-16 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					{/* Featured Image Placeholder */}
					<div className="h-64 md:h-96 bg-gradient-to-br from-[#00939D]/20 to-[#002828]/10 rounded-2xl mb-12 flex items-center justify-center">
						<div className="text-6xl font-bold text-[#00939D]/30">
							{post.title.charAt(0)}
						</div>
					</div>

					{/* Post Content */}
					<div className="prose prose-lg max-w-none">
						{post.id === 1 && (
							<>
								<p className="mb-4 text-lg text-[#002828]/80">
									Zakaat is one of the five pillars of Islam, making it an
									essential obligation for every eligible Muslim. It is a form of
									almsgiving that purifies wealth and helps those in need.
									Understanding Zakaat is crucial for fulfilling this important
									religious duty.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									What is Zakaat?
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Zakaat is an obligatory charity that requires Muslims to give a
									portion of their wealth to those in need. The word "Zakaat"
									means purification and growth, reflecting its purpose of
									purifying one's wealth and spiritually growing through giving.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Who Must Pay Zakaat?
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Zakaat is obligatory for Muslims who meet the following
									conditions:
								</p>
								<ul className="list-disc list-inside mb-4 space-y-2 text-lg text-[#002828]/80 ml-4">
									<li>They must be Muslim</li>
									<li>They must be of sound mind</li>
									<li>They must have reached the age of puberty</li>
									<li>
										They must own wealth that meets or exceeds the Nisab
										(minimum threshold)
									</li>
									<li>The wealth must have been held for one full lunar year</li>
								</ul>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Calculating Your Zakaat
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									The standard rate of Zakaat is 2.5% of your total wealth that
									has been held for a full year. This includes cash, gold, silver,
									investments, and business assets, minus any debts or immediate
									expenses.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Distribution of Zakaat
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Zakaat should be distributed to eight categories of recipients
									as mentioned in the Quran: the poor, the needy, those employed
									to collect Zakaat, those whose hearts are to be reconciled,
									those in bondage, those in debt, those fighting for Allah's
									cause, and travelers in need.
								</p>
							</>
						)}
						{post.id === 2 && (
							<>
								<p className="mb-4 text-lg text-[#002828]/80">
									Calculating Zakaat accurately is essential to fulfill your
									religious obligations. With modern financial complexities, it's
									important to understand how to properly assess your wealth and
									calculate the correct amount.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Step 1: Determine Your Nisab
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									The Nisab is the minimum amount of wealth a Muslim must possess
									before Zakaat becomes obligatory. The Nisab is equivalent to 85
									grams of gold or 595 grams of silver. You should use the current
									market value to determine if you meet this threshold.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Step 2: Calculate Your Total Assets
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Include all assets that have been in your possession for a full
									lunar year:
								</p>
								<ul className="list-disc list-inside mb-4 space-y-2 text-lg text-[#002828]/80 ml-4">
									<li>Cash in hand and bank accounts</li>
									<li>Gold and silver</li>
									<li>Stocks and investments</li>
									<li>Business inventory and assets</li>
									<li>Rental income and property investments</li>
								</ul>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Step 3: Subtract Your Liabilities
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Deduct any immediate debts, loans, or financial obligations from
									your total assets to get your net Zakaat-able wealth.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Step 4: Calculate 2.5%
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Multiply your net Zakaat-able wealth by 0.025 (or divide by 40)
									to get your Zakaat amount. Our calculator automates this process
									and ensures accuracy according to Islamic principles.
								</p>
							</>
						)}
						{post.id === 3 && (
							<>
								<p className="mb-4 text-lg text-[#002828]/80">
									Every donation made through Zaakiyah creates a ripple effect of
									positive change. Here are real stories from our community
									showing the tangible impact of your generosity.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Supporting Education
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Through your Sadaqah donations, we've been able to support over
									500 students with educational materials, school fees, and
									scholarships. One recipient, Aisha from Kano, was able to
									complete her university education thanks to the consistent
									support from our community.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Healthcare Assistance
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Your donations have helped provide medical care to over 200
									families in need. From emergency surgeries to ongoing
									treatments, your generosity has saved lives and restored hope.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Food Security
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									During Ramadan and throughout the year, your contributions have
									provided food packages to thousands of families, ensuring that
									no one goes hungry. The impact extends beyond immediate relief,
									helping families maintain stability during difficult times.
								</p>
							</>
						)}
						{post.id === 4 && (
							<>
								<p className="mb-4 text-lg text-[#002828]/80">
									Technology has revolutionized many aspects of our lives, and
									Islamic giving is no exception. Digital platforms like Zaakiyah
									are making it easier, more transparent, and more efficient for
									Muslims to fulfill their religious obligations while maintaining
									full Shariah compliance.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									The Benefits of Digital Zakaat
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Digital platforms offer numerous advantages:
								</p>
								<ul className="list-disc list-inside mb-4 space-y-2 text-lg text-[#002828]/80 ml-4">
									<li>Accurate calculations using automated tools</li>
									<li>Transparent tracking of where your donations go</li>
									<li>Secure and convenient payment methods</li>
									<li>Access to verified recipients and causes</li>
									<li>Real-time updates on the impact of your giving</li>
								</ul>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Maintaining Shariah Compliance
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									While embracing technology, it's crucial to ensure that all
									digital Zakaat platforms adhere to Islamic principles. Zaakiyah
									works closely with Islamic scholars to ensure our platform and
									processes are fully compliant with Shariah law.
								</p>
							</>
						)}
						{post.id === 5 && (
							<>
								<p className="mb-4 text-lg text-[#002828]/80">
									While both Zakaat and Sadaqah involve giving to those in need,
									they are distinct concepts in Islam with different rules and
									purposes. Understanding these differences is essential for
									proper practice.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Zakaat: Obligatory Charity
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Zakaat is one of the five pillars of Islam and is obligatory for
									eligible Muslims. It has specific rules:
								</p>
								<ul className="list-disc list-inside mb-4 space-y-2 text-lg text-[#002828]/80 ml-4">
									<li>Fixed rate of 2.5% of wealth</li>
									<li>Must be given annually</li>
									<li>Has specific eligibility criteria</li>
									<li>Must be distributed to specific categories</li>
									<li>Cannot be given to close relatives</li>
								</ul>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Sadaqah: Voluntary Charity
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									Sadaqah is voluntary charity with more flexibility:
								</p>
								<ul className="list-disc list-inside mb-4 space-y-2 text-lg text-[#002828]/80 ml-4">
									<li>No fixed amount or rate</li>
									<li>Can be given at any time</li>
									<li>Can be given to anyone in need</li>
									<li>Includes acts of kindness, not just money</li>
									<li>Can be given to family members</li>
								</ul>
							</>
						)}
						{post.id === 6 && (
							<>
								<p className="mb-4 text-lg text-[#002828]/80">
									Transparency is a cornerstone of trust in charitable giving. At
									Zaakiyah, we believe that donors have the right to know exactly
									how their contributions are being used and the impact they're
									making.
								</p>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									Our Transparency Commitment
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									We provide complete transparency through:
								</p>
								<ul className="list-disc list-inside mb-4 space-y-2 text-lg text-[#002828]/80 ml-4">
									<li>Detailed reports on fund distribution</li>
									<li>Real-time tracking of your donations</li>
									<li>Verified recipient information</li>
									<li>Regular updates on impact and outcomes</li>
									<li>Open financial records and audits</li>
								</ul>
								<h2 className="text-2xl font-bold text-[#002828] mt-8 mb-4">
									How We Verify Recipients
								</h2>
								<p className="mb-4 text-lg text-[#002828]/80">
									All recipients go through a thorough verification process to
									ensure they meet the criteria for receiving Zakaat or Sadaqah.
									This includes background checks, financial assessments, and
									ongoing monitoring.
								</p>
							</>
						)}
					</div>

					<div className="mt-16 pt-8 border-t border-[#E0F2F2]">
						<h3 className="text-xl font-bold text-[#002828] mb-4">
							Share this article
						</h3>
						<div className="flex flex-wrap gap-3">
							<button className="px-4 sm:px-6 py-2 bg-[#E0F2F2] text-[#002828] rounded-lg font-medium hover:bg-[#00939D] hover:text-white transition-colors duration-300 text-sm sm:text-base whitespace-nowrap">
								Facebook
							</button>
							<button className="px-4 sm:px-6 py-2 bg-[#E0F2F2] text-[#002828] rounded-lg font-medium hover:bg-[#00939D] hover:text-white transition-colors duration-300 text-sm sm:text-base whitespace-nowrap">
								Twitter
							</button>
							<button className="px-4 sm:px-6 py-2 bg-[#E0F2F2] text-[#002828] rounded-lg font-medium hover:bg-[#00939D] hover:text-white transition-colors duration-300 text-sm sm:text-base whitespace-nowrap">
								LinkedIn
							</button>
						</div>
					</div>
				</div>
			</article>

			{/* Related Posts */}
			<section className="bg-[#00939D]/[0.06] py-16 px-6">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-[#002828] mb-8 text-center">
						Related Articles
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{blogPosts
							.filter((p) => p.id !== post.id && p.category === post.category)
							.slice(0, 3)
							.map((relatedPost) => (
								<Link
									key={relatedPost.id}
									to="/blog/$id"
									params={{ id: relatedPost.id.toString() }}
									className="bg-white rounded-2xl border border-[#E0F2F2] overflow-hidden hover:shadow-xl transition-all duration-300 group hover:border-[#00939D]/30 hover:-translate-y-1"
								>
									<div className="h-40 bg-gradient-to-br from-[#00939D]/20 to-[#002828]/10 flex items-center justify-center">
										<div className="text-3xl font-bold text-[#00939D]/30">
											{relatedPost.title.charAt(0)}
										</div>
									</div>
									<div className="p-6">
										<span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#E0F2F2] text-[#00939D] mb-3">
											{relatedPost.category}
										</span>
										<h3 className="text-lg font-bold text-[#002828] mb-2 group-hover:text-[#00939D] transition-colors duration-300 line-clamp-2">
											{relatedPost.title}
										</h3>
										<p className="text-sm text-[#002828]/60 line-clamp-2">
											{relatedPost.excerpt}
										</p>
									</div>
								</Link>
							))}
					</div>
				</div>
			</section>
		</>
	);
}
