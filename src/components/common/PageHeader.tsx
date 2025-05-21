import React from 'react';

interface PageHeaderProps {
	title: string;
	subtitle?: string;
	children?: React.ReactNode;
	className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	subtitle,
	children,
	className = '',
}) => {
	return (
		<section className={`relative bg-[#002828] text-white py-16 px-6 ${className}`}>
			<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center opacity-80"></div>
			<div className="max-w-3xl mx-auto relative z-10 text-center mt-20">
				{children && <div className="mb-4">{children}</div>}
				<h1 className="text-4xl sm:text-[64px] font-extrabold mb-4 tracking-tighter">
					{title}
				</h1>
				{subtitle && (
					<p className="text-xl sm:text-[28px] text-white/80 font-medium mb-2">
						{subtitle}
					</p>
				)}
			</div>
		</section>
	);
};
