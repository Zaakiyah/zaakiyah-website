import { MuslimIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

const TopBannerStats: React.FC = () => {
	return (
		<div className="flex items-center gap-2 px-6 py-2 rounded-lg border border-[#00939D] bg-gradient-to-r from-[#00939D]/80 to-[#00939D]/40">
			<span className="flex items-center text-white">
				<HugeiconsIcon icon={MuslimIcon} size={18} strokeWidth={1.5} />
			</span>
			<span className="text-white text-sm font-medium">
				Trusted by 500k+ Muslims Nationwide
			</span>
		</div>
	);
};

export default TopBannerStats;
