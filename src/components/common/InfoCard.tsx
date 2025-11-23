import React from 'react';
import IconWithBg from './IconWithBg';
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react';

interface InfoCardProps {
	icon: IconSvgElement;
	title: string;
	description: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
	<div className="flex flex-col items-center text-center px-4 py-6">
		<IconWithBg bgColor="bg-[#E0F2F2]" className="p-5 inline-block mb-4">
			<HugeiconsIcon icon={icon} size={48} color="#00939D" strokeWidth={1.5} />
		</IconWithBg>
		<h3 className="text-[32px] font-bold mb-2">{title}</h3>
		<p className="text-xl text-gray-700 max-w-sm mx-auto">{description}</p>
	</div>
);
