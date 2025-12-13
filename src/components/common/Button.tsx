import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	variant = 'primary',
	size = 'medium',
	...props
}) => {
	const baseStyles = 'font-medium transition-colors';

	const variantStyles = {
		primary: 'bg-white text-[#002828] hover:bg-white/90',
		secondary: 'border border-white text-white hover:bg-white/10',
		outline: 'border border-[#002828] text-[#002828] hover:bg-gray-50 transition-colors',
	};

	const sizeStyles = {
		small: 'px-3 py-1.5 text-sm',
		medium: 'px-4 py-2 text-sm',
		large: 'px-5 py-2.5 text-base',
	};

	const mergedClasses = twMerge(
		baseStyles,
		variantStyles[variant],
		sizeStyles[size],
		'rounded-lg font-semibold',
		className
	);

	return (
		<button className={mergedClasses} {...props}>
			{children}
		</button>
	);
};

export default Button;
