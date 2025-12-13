import React from 'react';

interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	badge?: string;
	className?: string;
	dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
	title,
	subtitle,
	badge,
	className = '',
	dark = false,
}) => {
	const textColor = dark ? 'text-white' : 'text-[#002828]';
	const subtitleColor = dark ? 'text-white/70' : 'text-[#002828]/70';
	const gradientColor = dark ? 'from-[#00939D] to-transparent' : 'from-[#00939D] to-[#002828]';

	return (
		<div className={`text-center mb-8 ${className}`}>
			{badge && (
				<div className="inline-block border border-[#00939D]/30 text-xs font-semibold text-white px-4 py-1.5 rounded-full mb-4 bg-[#00939D]/10 backdrop-blur-sm tracking-wide">
					{badge}
				</div>
			)}
			<h2 className={`text-2xl md:text-3xl font-bold mb-3 ${textColor}`}>{title}</h2>
			<div
				className={`w-24 h-1 bg-gradient-to-r ${gradientColor} mx-auto rounded-full`}
			></div>
			{subtitle && (
				<p className={`text-sm ${subtitleColor} mt-3 max-w-2xl mx-auto`}>{subtitle}</p>
			)}
		</div>
	);
};

export default SectionHeader;
