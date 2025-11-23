import { MuslimIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

const TopBannerStats: React.FC = () => {
	return (
		<div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-white/15 via-white/10 to-white/15 backdrop-blur-lg border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105 group max-w-full">
			<div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#00939D]/30 to-[#00939D]/10 border border-white/20 group-hover:from-[#00939D]/40 group-hover:to-[#00939D]/20 transition-all duration-300 flex-shrink-0">
				<HugeiconsIcon
					icon={MuslimIcon}
					size={14}
					color="currentColor"
					strokeWidth={2}
					className="text-white w-3 h-3 sm:w-3.5 sm:h-3.5"
				/>
			</div>
			<span className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide whitespace-nowrap">Reaching 100k+ Muslims Nationwide</span>
		</div>
	);
};

export default TopBannerStats;
