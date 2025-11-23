import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';

interface FeatureCardProps {
	icon: any;
	title: string;
	description: string;
	variant?: 'default' | 'compact';
	className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	icon,
	title,
	description,
	variant = 'default',
	className = '',
}) => {
	if (variant === 'compact') {
		return (
			<div className={`group flex flex-col items-center justify-center ${className}`}>
				<div className="bg-gradient-to-br from-[#E0F2F2] to-[#00939D]/20 rounded-2xl p-4 mb-3 group-hover:bg-gradient-to-br group-hover:from-[#00939D] group-hover:to-[#002828] transition-all duration-300 group-hover:scale-110">
					<HugeiconsIcon
						icon={icon}
						size={32}
						color="#002828"
						strokeWidth={1.5}
						className="group-hover:text-white transition-colors duration-300"
					/>
				</div>
				<div className="text-[#002828] text-sm md:text-base font-bold leading-tight mb-1">
					{title}
				</div>
				<div className="text-[#002828]/60 text-xs md:text-sm leading-tight">
					{description}
				</div>
			</div>
		);
	}

	return (
		<div
			className={`bg-gradient-to-br from-white to-[#E0F2F2]/20 rounded-3xl border border-[#E0F2F2] p-10 text-left hover:shadow-2xl transition-all duration-500 group hover:border-[#00939D]/40 hover:-translate-y-2 hover:scale-[1.02] ${className}`}
		>
			<div className="bg-gradient-to-br from-[#E0F2F2] to-[#E0F2F2]/50 rounded-2xl p-5 inline-block mb-6 group-hover:bg-gradient-to-br group-hover:from-[#00939D] group-hover:to-[#002828] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
				<HugeiconsIcon
					icon={icon}
					size={36}
					color="#002828"
					strokeWidth={1.5}
					className="group-hover:text-white transition-colors duration-500"
				/>
			</div>
			<h3 className="text-2xl font-bold mb-4 text-[#002828] group-hover:text-[#00939D] transition-colors duration-300">
				{title}
			</h3>
			<p className="text-[#002828]/70 text-lg leading-relaxed">{description}</p>
		</div>
	);
};

export default FeatureCard;

