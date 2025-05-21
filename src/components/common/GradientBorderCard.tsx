import { ReactNode } from 'react';

interface GradientBorderCardProps {
	children: ReactNode;
	className?: string;
	bgGradientFrom?: string;
	bgGradientTo?: string;
}

const GradientBorderCard = ({
	children,
	className = '',
	bgGradientFrom = '#0D2B2D', // Default value
	bgGradientTo = '#0D2B2D', // Default value
}: GradientBorderCardProps) => {
	const cardStyle = {
		borderRight: '1px solid #003437',
		border: '1px solid transparent',
		borderLeft: '1px solid #00939D',
		background: `linear-gradient(270deg, ${bgGradientFrom}, ${bgGradientTo}) padding-box, 
                linear-gradient(to right, #00939D, #003437) border-box`,
	};

	return (
		<div className={`relative rounded-2xl overflow-hidden ${className}`} style={cardStyle}>
			{children}
		</div>
	);
};

export default GradientBorderCard;
