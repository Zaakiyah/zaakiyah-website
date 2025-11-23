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
		<div className={`text-center mb-12 ${className}`}>
			{badge && (
				<div className="inline-block border-2 border-[#00939D]/30 text-sm font-semibold text-white px-6 py-2 rounded-full mb-6 bg-[#00939D]/10 backdrop-blur-sm tracking-wider">
					{badge}
				</div>
			)}
			<h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${textColor}`}>
				{title}
			</h2>
			<div className={`w-32 h-1.5 bg-gradient-to-r ${gradientColor} mx-auto rounded-full`}></div>
			{subtitle && (
				<p className={`text-lg ${subtitleColor} mt-4 max-w-2xl mx-auto`}>{subtitle}</p>
			)}
		</div>
	);
};

export default SectionHeader;

