import { ReactNode } from 'react';

interface IconWithBgProps {
	children: ReactNode;
	size?: 'sm' | 'md' | 'lg';
	gradientFrom?: string;
	gradientTo?: string;
	bgColor?: string;
	className?: string;
}

const IconWithBg = ({
	children,
	gradientFrom,
	gradientTo,
	bgColor = 'bg-teal-500',
	className = '',
}: IconWithBgProps) => {
	const baseClasses = 'rounded-full flex items-center justify-center text-white';
	const gradientClasses =
		gradientFrom && gradientTo
			? `bg-gradient-to-br from-[${gradientFrom}] to-[${gradientTo}]`
			: bgColor;

	return <div className={`${baseClasses} ${gradientClasses} ${className}`}>{children}</div>;
};

export default IconWithBg;
