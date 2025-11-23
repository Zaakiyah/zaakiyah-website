export interface Testimonial {
	quote: string;
	name: string;
	role: string;
	avatar: string;
	avatarColor: string;
}

export interface Statistic {
	percentage: string;
	description: string;
}

export const testimonials: Testimonial[] = [
	{
		quote: 'I cannot put into words how much this Zakaat donation has meant to me & my family.',
		name: 'Ahmed Kola',
		role: 'Student',
		avatar: 'AK',
		avatarColor: 'bg-[#00939D]',
	},
	{
		quote: 'Zaakiyah made it so easy to fulfill my religious obligations. The transparency is amazing!',
		name: 'Fatima Ibrahim',
		role: 'Business Owner',
		avatar: 'FI',
		avatarColor: 'bg-[#002828]',
	},
	{
		quote: 'Seeing the impact of my donations in real-time gives me peace of mind.',
		name: 'Musa Abdullahi',
		role: 'Engineer',
		avatar: 'MA',
		avatarColor: 'bg-[#00939D]',
	},
];

export const impactStats: Statistic[] = [
	{
		percentage: '100%',
		description: 'Users find Zaakiyah simple & easy to use.',
	},
	{
		percentage: '98%',
		description: 'Donations were made seamlessly through Zaakiyah.',
	},
];
