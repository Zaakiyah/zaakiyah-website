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
		small: 'px-4 py-2 text-sm',
		medium: 'px-6 py-3 text-base',
		large: 'px-8 py-3.5 text-lg',
	};

	const mergedClasses = twMerge(
		baseStyles,
		variantStyles[variant],
		sizeStyles[size],
		'rounded-lg',
		className
	);

	return (
		<button className={mergedClasses} {...props}>
			{children}
		</button>
	);
};

export default Button;
