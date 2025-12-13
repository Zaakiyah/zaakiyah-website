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
				<div className="bg-gradient-to-br from-[#E0F2F2] to-[#00939D]/20 rounded-xl p-3 mb-2 group-hover:bg-gradient-to-br group-hover:from-[#00939D] group-hover:to-[#002828] transition-all duration-300 group-hover:scale-110">
					<HugeiconsIcon
						icon={icon}
						size={28}
						color="#002828"
						strokeWidth={1.5}
						className="group-hover:text-white transition-colors duration-300"
					/>
				</div>
				<div className="text-[#002828] text-sm font-semibold leading-tight mb-0.5">
					{title}
				</div>
				<div className="text-[#002828]/60 text-xs leading-tight">{description}</div>
			</div>
		);
	}

	return (
		<div
			className={`bg-gradient-to-br from-white to-[#E0F2F2]/20 rounded-2xl border border-[#E0F2F2] p-6 text-left hover:shadow-xl transition-all duration-500 group hover:border-[#00939D]/40 hover:-translate-y-1 hover:scale-[1.01] ${className}`}
		>
			<div className="bg-gradient-to-br from-[#E0F2F2] to-[#E0F2F2]/50 rounded-xl p-3.5 inline-block mb-4 group-hover:bg-gradient-to-br group-hover:from-[#00939D] group-hover:to-[#002828] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md group-hover:shadow-lg">
				<HugeiconsIcon
					icon={icon}
					size={28}
					color="#002828"
					strokeWidth={1.5}
					className="group-hover:text-white transition-colors duration-500"
				/>
			</div>
			<h3 className="text-lg font-semibold mb-3 text-[#002828] group-hover:text-[#00939D] transition-colors duration-300">
				{title}
			</h3>
			<p className="text-[#002828]/70 text-sm leading-relaxed">{description}</p>
		</div>
	);
};

export default FeatureCard;
