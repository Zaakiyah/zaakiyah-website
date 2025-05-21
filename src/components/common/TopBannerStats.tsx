import { MuslimIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';
import GradientBorderCard from './GradientBorderCard';

const TopBannerStats: React.FC = () => {
	return (
		<GradientBorderCard
			bgGradientFrom="#00939D"
			bgGradientTo="#00939D"
			className="flex items-center gap-2 px-6 py-2 rounded-lg border"
		>
			<span className="flex items-center text-white">
				<HugeiconsIcon icon={MuslimIcon} size={18} strokeWidth={1.5} />
			</span>
			<span className="text-white text-sm font-medium">
				Trusted by 500k+ Muslims Nationwide
			</span>
		</GradientBorderCard>
	);
};

export default TopBannerStats;
