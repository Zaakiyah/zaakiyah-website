import {
	Target01Icon,
	EyeIcon,
	Shield01Icon,
	HeartAddIcon,
	UserGroup02Icon,
	Chart01Icon,
} from '@hugeicons/core-free-icons';

export interface Value {
	icon: any;
	title: string;
	description: string;
}

export interface Milestone {
	year: string;
	title: string;
	description: string;
}

export const coreValues: Value[] = [
	{
		icon: Shield01Icon,
		title: 'Security & Trust',
		description: 'Planned bank-level security with CBN licensing and NDIC insurance.',
	},
	{
		icon: HeartAddIcon,
		title: 'Islamic Compliance',
		description:
			'100% Shariah-compliant platform ensuring your Zakaat is distributed correctly.',
	},
	{
		icon: UserGroup02Icon,
		title: 'Community Impact',
		description: 'Connecting donors with verified recipients to maximize positive impact.',
	},
	{
		icon: Chart01Icon,
		title: 'Transparency',
		description: 'Real-time tracking and reporting of all donations and distributions.',
	},
];

export const milestones: Milestone[] = [
	{ year: '2024', title: 'Ideation', description: 'Concept development and planning phase' },
	{
		year: '2025',
		title: 'Development',
		description: 'Building the platform and securing partnerships',
	},
	{
		year: '2025',
		title: 'Launch',
		description: 'Expected launch of the Zaakiyah platform',
	},
	{
		year: 'Future',
		title: 'Growth',
		description: 'Expanding to serve Muslims across Nigeria',
	},
];

export const missionData = {
	icon: Target01Icon,
	title: 'Our Mission',
	description:
		'To simplify Zakaat calculation and distribution while ensuring compliance with Islamic principles. We make it easy for Muslims to fulfill this essential pillar of faith with confidence and accuracy.',
};

export const visionData = {
	icon: EyeIcon,
	title: 'Our Vision',
	description:
		'To become the leading platform for Islamic financial services, fostering transparency, accuracy, and adherence to Islamic principles in every transaction and interaction.',
};

export const aboutStory = {
	badge: 'Our Story',
	title: 'Who Are We?',
	paragraphs: [
		'Zaakiyah is an innovative platform in development, designed to revolutionize how Muslims fulfill their Zakaat obligations. Born from a vision to bridge the gap between traditional Islamic giving and modern technology, we are creating a comprehensive solution that makes Zakaat calculation and distribution accessible, transparent, and Shariah-compliant.',
		'Our platform will serve as a one-stop digital service for Zakaat management, offering secure payment processing, transparent donation tracking, and verified recipient verification. We aim to empower Muslims across Nigeria to fulfill this essential pillar of faith with confidence and ease.',
		'At the heart of Zaakiyah is our commitment to Islamic principles, financial transparency, and community impact. We are building partnerships with Islamic scholars, financial institutions, and community organizations to ensure our platform meets the highest standards of Shariah compliance and user trust.',
	],
	callToAction:
		'Join us on this journey as we work towards making Zakaat more accessible and impactful for Muslims everywhere.',
};
