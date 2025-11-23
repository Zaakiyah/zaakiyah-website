import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { useState } from 'react';

import { blogPosts, blogCategories } from '../data/blogData';
import BlogCard from '../components/common/BlogCard';

export function Blog() {
	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredPosts =
		selectedCategory === 'All'
			? blogPosts
			: blogPosts.filter((post) => post.category === selectedCategory);

	return (
		<>
			<SEO
				title="Blog"
				description="Read insightful articles, guides, and stories about Zakaat, Sadaqah, and Islamic giving. Learn how to fulfill your religious obligations with confidence."
				keywords="Zakaat blog, Islamic giving articles, Sadaqah guide, Zakaat education, Islamic finance blog, Muslim charity stories"
			/>
			<PageHeader
				title="Zaakiyah Blog"
				subtitle="Insights, guides, and stories about Zakaat, Sadaqah, and Islamic giving"
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-wrap gap-3 mb-12 justify-center">
						{blogCategories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
									selectedCategory === category
										? 'bg-[#00939D] text-white shadow-lg'
										: 'bg-[#E0F2F2] text-[#002828] hover:bg-[#00939D]/20'
								}`}
							>
								{category}
							</button>
						))}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredPosts.map((post) => (
							<BlogCard key={post.id} post={post} />
						))}
					</div>

					{/* Empty State */}
					{filteredPosts.length === 0 && (
						<div className="text-center py-20">
							<p className="text-xl text-[#002828]/60">
								No posts found in this category.
							</p>
						</div>
					)}
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="bg-[#00939D]/[0.06] py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-[#002828] mb-4">
						Stay Updated
					</h2>
					<p className="text-base text-[#002828]/70 mb-8">
						Subscribe to our newsletter to receive the latest articles and updates about
						Zakaat and Islamic giving.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-3 rounded-lg border border-[#E0F2F2] focus:outline-none focus:ring-2 focus:ring-[#00939D] focus:border-transparent"
						/>
						<button className="px-8 py-3 bg-[#00939D] text-white rounded-lg font-semibold hover:bg-[#007a82] transition-colors duration-300">
							Subscribe
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
