import React from 'react';
import { Link } from '@tanstack/react-router';
import { HugeiconsIcon } from '@hugeicons/react';
import { Calendar01Icon, User02Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { BlogPost } from '../../data/blogData';

interface BlogCardProps {
	post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<article className="bg-white rounded-2xl border border-[#E0F2F2] overflow-hidden hover:shadow-xl transition-all duration-300 group hover:border-[#00939D]/30 hover:-translate-y-1">
			<div className="h-48 bg-gradient-to-br from-[#00939D]/20 to-[#002828]/10 flex items-center justify-center">
				<div className="text-4xl font-bold text-[#00939D]/30">
					{post.title.charAt(0)}
				</div>
			</div>
			<div className="p-6">
				<div className="mb-3">
					<span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#E0F2F2] text-[#00939D]">
						{post.category}
					</span>
				</div>
				<h3 className="text-xl font-bold text-[#002828] mb-3 group-hover:text-[#00939D] transition-colors duration-300 line-clamp-2">
					{post.title}
				</h3>
				<p className="text-[#002828]/70 text-base mb-4 line-clamp-3">{post.excerpt}</p>
				<div className="flex flex-wrap items-center gap-4 text-sm text-[#002828]/60 mb-4">
					<div className="flex items-center gap-1.5">
						<HugeiconsIcon
							icon={User02Icon}
							size={16}
							color="currentColor"
							strokeWidth={1.5}
						/>
						<span>{post.author}</span>
					</div>
					<div className="flex items-center gap-1.5">
						<HugeiconsIcon
							icon={Calendar01Icon}
							size={16}
							color="currentColor"
							strokeWidth={1.5}
						/>
						<span>{formatDate(post.date)}</span>
					</div>
				</div>
				<Link
					to="/blog/$id"
					params={{ id: post.id.toString() }}
					className="inline-flex items-center gap-2 text-[#00939D] font-semibold hover:gap-3 transition-all duration-300 group/link"
				>
					Read More
					<HugeiconsIcon
						icon={ArrowRight01Icon}
						size={20}
						color="currentColor"
						strokeWidth={1.5}
						className="group-hover/link:translate-x-1 transition-transform duration-300"
					/>
				</Link>
			</div>
		</article>
	);
};

export default BlogCard;

