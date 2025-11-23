import React from 'react';
import GradientBorderCard from './GradientBorderCard';

interface StepCardProps {
	number?: string;
	title: string;
	description: string;
	image?: string;
	colSpan?: string;
	className?: string;
}

const StepCard: React.FC<StepCardProps> = ({
	number,
	title,
	description,
	image,
	colSpan,
	className = '',
}) => {
	if (number) {
		return (
			<GradientBorderCard
				bgGradientFrom="#0D2B2D"
				bgGradientTo="#0D2B2D"
				className={`p-8 md:p-10 bg-[#0D2B2D]/80 backdrop-blur-sm hover:scale-105 transition-all duration-500 group ${className}`}
			>
				<div className="text-[80px] md:text-[120px] font-extrabold bg-gradient-to-b from-white via-[#00939D] to-[#0D2B2D] text-transparent -mb-4 bg-clip-text leading-none z-10 relative group-hover:scale-110 transition-transform duration-500">
					{number}
				</div>
				<div className="relative z-10">
					<h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[#00939D] transition-colors duration-300">
						{title}
					</h3>
					<p className="text-white/70 text-base md:text-lg leading-relaxed">
						{description}
					</p>
				</div>
			</GradientBorderCard>
		);
	}

	return (
		<div
			className={`bg-white rounded-3xl border border-[#E0F2F2] p-10 text-left shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-[#00939D]/40 hover:-translate-y-2 group ${colSpan} ${className}`}
		>
			<h3 className="text-2xl font-bold mb-4 text-[#002828] group-hover:text-[#00939D] transition-colors duration-300">
				{title}
			</h3>
			<p className="text-[#002828]/70 text-lg mb-8 leading-relaxed">{description}</p>
			{image && (
				<div className="w-full rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
					/>
				</div>
			)}
		</div>
	);
};

export default StepCard;

