import secureDonationsImage from '../assets/secure-donations.svg';
import transparentDistributionImage from '../assets/transparent-distribution.svg';

export interface Step {
	number?: string;
	title: string;
	description: string;
	image?: string;
}

export const howItWorksSteps: Step[] = [
	{
		number: '1',
		title: 'Calculate Your Wealth',
		description: 'Using a seamless and user friendly system',
	},
	{
		number: '2',
		title: 'Get Zakaat Due',
		description: 'Your financial information are safe with us.',
	},
	{
		number: '3',
		title: 'Donate Zakaat',
		description: 'Your transactions are protected with advanced security.',
	},
];

export const simplifiesGivingSteps: Step[] = [
	{
		title: 'Secure Donations',
		description: 'Your donations are safe, ensuring your Amanah is fulfilled securely.',
		image: secureDonationsImage,
	},
	{
		title: 'Transparent Distributions',
		description:
			'See exactly where your Zakaat and Sadaqah are making a difference, with real-time updates on your contribution',
		image: transparentDistributionImage,
	},
	{
		title: 'Impact Tracking',
		description: 'See how donations make a difference',
		image: transparentDistributionImage,
	},
	{
		title: 'Sharia Compliance',
		description: 'Explanation of how the system aligns with Shariah principles.',
		image: secureDonationsImage,
	},
];
