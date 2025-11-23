import {
	Calculator01Icon,
	GiveBloodIcon,
	CheckmarkCircle03Icon,
	UserMultiple02Icon,
	Shield01Icon,
	HeartAddIcon,
	UserGroup02Icon,
	Chart01Icon,
} from '@hugeicons/core-free-icons';

export interface Feature {
	icon: any;
	title: string;
	desc: string;
}

export const homeFeatures: Feature[] = [
	{
		icon: Calculator01Icon,
		title: 'Calculation Accuracy',
		desc: 'Easily calculate your Zakaat with our accurate and Shariah-compliant system.',
	},
	{
		icon: GiveBloodIcon,
		title: 'Verified Giving',
		desc: 'Give with confidence to those truly in need, through verified campaigns.',
	},
	{
		icon: CheckmarkCircle03Icon,
		title: 'Reliable',
		desc: 'Our system calculates your total zakaat due based on your nisaab choice',
	},
	{
		icon: UserMultiple02Icon,
		title: 'Community Driven',
		desc: 'Join a community of givers to make a difference together',
	},
];

export const aboutValues: Feature[] = [
	{
		icon: Shield01Icon,
		title: 'Security & Trust',
		desc: 'Planned bank-level security with CBN licensing and NDIC insurance.',
	},
	{
		icon: HeartAddIcon,
		title: 'Islamic Compliance',
		desc: '100% Shariah-compliant platform ensuring your Zakaat is distributed correctly.',
	},
	{
		icon: UserGroup02Icon,
		title: 'Community Impact',
		desc: 'Connecting donors with verified recipients to maximize positive impact.',
	},
	{
		icon: Chart01Icon,
		title: 'Transparency',
		desc: 'Real-time tracking and reporting of all donations and distributions.',
	},
];

export const heroFeatures = [
	{
		icon: Calculator01Icon,
		title: 'Easy Calculation',
		desc: 'Accurate Zakaat calculator',
	},
	{
		icon: Shield01Icon,
		title: 'Secure & Trusted',
		desc: 'Bank-level security',
	},
	{
		icon: Chart01Icon,
		title: 'Transparent',
		desc: 'Track your donations',
	},
	{
		icon: CheckmarkCircle03Icon,
		title: 'Shariah Compliant',
		desc: '100% Islamic principles',
	},
];
