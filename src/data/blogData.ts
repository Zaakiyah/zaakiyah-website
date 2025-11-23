export interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	author: string;
	date: string;
	category: string;
	readTime: string;
	image?: string;
	content?: string;
}

export const blogPosts: BlogPost[] = [
	{
		id: 1,
		title: 'Understanding Zakaat: A Complete Guide for Muslims',
		excerpt:
			'Learn everything you need to know about Zakaat, one of the five pillars of Islam. This comprehensive guide covers calculation methods, eligibility, and distribution.',
		author: 'Ahmad Ibrahim',
		date: '2024-01-15',
		category: 'Education',
		readTime: '8 min read',
		content: `# Understanding Zakaat: A Complete Guide for Muslims

Zakaat is one of the five pillars of Islam, an obligatory act of worship that holds immense spiritual and social significance. This comprehensive guide will help you understand everything you need to know about Zakaat.

## What is Zakaat?

Zakaat is a mandatory charitable contribution that Muslims must pay annually on their accumulated wealth. It serves as a means of purifying one's wealth and helping those in need.

## Who Must Pay Zakaat?

Zakaat is obligatory for Muslims who:
- Have reached the age of puberty
- Are of sound mind
- Possess wealth above the Nisaab threshold
- Have owned the wealth for a full lunar year

## Calculating Your Zakaat

The standard Zakaat rate is 2.5% of your total eligible wealth. This includes:
- Cash and savings
- Gold and silver
- Business assets
- Investments
- Other valuable assets

## Distribution of Zakaat

Zakaat must be distributed to eligible recipients, including:
- The poor and needy
- Those in debt
- Travelers in need
- Those working to collect and distribute Zakaat
- New Muslims
- Those freeing slaves
- Those in the cause of Allah

## Benefits of Zakaat

- Purifies wealth and soul
- Fulfills a religious obligation
- Helps those in need
- Strengthens community bonds
- Earns immense rewards in the Hereafter`,
	},
	{
		id: 2,
		title: 'How to Calculate Your Zakaat Accurately',
		excerpt:
			'Step-by-step instructions on calculating your Zakaat using our innovative calculator. Ensure you fulfill your religious obligations correctly.',
		author: 'Fatima Abdullahi',
		date: '2024-01-10',
		category: 'Tutorial',
		readTime: '6 min read',
		content: `# How to Calculate Your Zakaat Accurately

Calculating Zakaat accurately is crucial to fulfilling your religious obligations. Follow these steps to ensure you calculate your Zakaat correctly.

## Step 1: Determine Your Nisaab

Nisaab is the minimum amount of wealth a Muslim must possess before Zakaat becomes obligatory. The Nisaab is based on the value of gold or silver.

## Step 2: Calculate Your Total Assets

Include all your assets:
- Cash in hand and bank accounts
- Gold and silver (at current market value)
- Business inventory and assets
- Investments and stocks
- Rental properties (if generating income)

## Step 3: Deduct Your Liabilities

Subtract any debts and obligations:
- Outstanding loans
- Credit card debts
- Other financial obligations

## Step 4: Calculate 2.5%

Once you have your net eligible wealth, calculate 2.5% of that amount. This is your Zakaat due.

## Using Our Calculator

Our Zakaat calculator simplifies this process by:
- Automatically calculating based on current Nisaab values
- Including all relevant assets
- Deducting liabilities
- Providing accurate results instantly`,
	},
	{
		id: 3,
		title: 'The Impact of Your Sadaqah: Real Stories from Our Community',
		excerpt:
			'Discover how your charitable donations are making a real difference in the lives of those in need across Nigeria.',
		author: 'Musa Kola',
		date: '2024-01-05',
		category: 'Impact',
		readTime: '5 min read',
		content: `# The Impact of Your Sadaqah: Real Stories from Our Community

Sadaqah, voluntary charity, has the power to transform lives. Here are real stories from our community showing the impact of your generosity.

## Story 1: Education for All

Through your Sadaqah donations, we were able to provide educational support to 50 children in need, ensuring they have access to quality education and learning materials.

## Story 2: Healthcare Support

Your contributions helped provide medical assistance to families facing health challenges, covering treatment costs and ensuring access to necessary healthcare services.

## Story 3: Food Security

During difficult times, your Sadaqah helped provide food assistance to over 200 families, ensuring they had access to nutritious meals.

## Making a Difference Together

Every donation, no matter the size, contributes to making a real difference in someone's life. Your Sadaqah helps us support those in need across Nigeria.`,
	},
	{
		id: 4,
		title: 'Digital Zakaat: Embracing Technology for Islamic Giving',
		excerpt:
			'Explore how modern technology is making it easier for Muslims to fulfill their Zakaat obligations while maintaining Shariah compliance.',
		author: 'Amina Hassan',
		date: '2023-12-28',
		category: 'Technology',
		readTime: '7 min read',
		content: `# Digital Zakaat: Embracing Technology for Islamic Giving

Technology is revolutionizing how Muslims fulfill their Zakaat obligations, making the process more accessible, transparent, and efficient.

## The Digital Revolution

Modern platforms like Zaakiyah are making Zakaat calculation and distribution easier than ever before, while maintaining strict adherence to Islamic principles.

## Benefits of Digital Zakaat

- **Convenience**: Calculate and pay Zakaat from anywhere, anytime
- **Accuracy**: Automated calculations ensure precision
- **Transparency**: Track where your Zakaat is distributed
- **Security**: Bank-level security protects your information
- **Compliance**: Ensures Shariah-compliant distribution

## Maintaining Islamic Principles

While embracing technology, it's crucial to ensure that digital platforms maintain Islamic principles:
- Accurate Nisaab calculations
- Proper distribution to eligible recipients
- Transparency in transactions
- Shariah compliance in all processes

## The Future of Islamic Giving

As technology continues to evolve, we can expect even more innovative solutions that make fulfilling religious obligations easier while maintaining the spiritual essence of Zakaat.`,
	},
	{
		id: 5,
		title: 'Zakaat vs Sadaqah: Understanding the Difference',
		excerpt:
			'Clarify the differences between Zakaat (obligatory charity) and Sadaqah (voluntary charity) to ensure proper understanding and practice.',
		author: 'Ibrahim Musa',
		date: '2023-12-20',
		category: 'Education',
		readTime: '6 min read',
		content: `# Zakaat vs Sadaqah: Understanding the Difference

While both Zakaat and Sadaqah involve giving to those in need, they are distinct concepts in Islam with different rules and purposes.

## What is Zakaat?

Zakaat is:
- **Obligatory**: A mandatory pillar of Islam
- **Fixed amount**: 2.5% of eligible wealth
- **Annual**: Paid once per lunar year
- **Specific recipients**: Must be given to specific categories
- **Purification**: Purifies wealth and soul

## What is Sadaqah?

Sadaqah is:
- **Voluntary**: Not obligatory, but highly recommended
- **Flexible amount**: Any amount you choose to give
- **Anytime**: Can be given at any time
- **Any recipient**: Can be given to anyone in need
- **Reward**: Earns spiritual rewards

## Key Differences

1. **Obligation**: Zakaat is mandatory; Sadaqah is voluntary
2. **Amount**: Zakaat has a fixed percentage; Sadaqah has no minimum
3. **Frequency**: Zakaat is annual; Sadaqah can be given anytime
4. **Recipients**: Zakaat has specific categories; Sadaqah is more flexible

## Both Are Important

Both Zakaat and Sadaqah play crucial roles in Islamic giving, helping those in need and earning spiritual rewards for the giver.`,
	},
	{
		id: 6,
		title: 'Ensuring Transparency in Charitable Giving',
		excerpt:
			'Learn how Zaakiyah ensures complete transparency in the distribution of your Zakaat and Sadaqah donations.',
		author: 'Hassan Ali',
		date: '2023-12-15',
		category: 'Transparency',
		readTime: '5 min read',
		content: `# Ensuring Transparency in Charitable Giving

Transparency is crucial in charitable giving, especially when it comes to Zakaat and Sadaqah. Here's how Zaakiyah ensures complete transparency.

## Why Transparency Matters

Transparency builds trust and ensures that your donations reach those who truly need them, fulfilling the Islamic principle of accountability.

## Our Transparency Measures

1. **Real-Time Tracking**: See where your donations are going
2. **Detailed Reports**: Access comprehensive reports on your giving
3. **Verified Recipients**: All recipients are verified before distribution
4. **Regular Updates**: Receive updates on the impact of your donations
5. **Open Records**: Maintain clear records of all transactions

## Building Trust

By maintaining complete transparency, we ensure that:
- Donors can trust that their donations are used correctly
- Recipients receive the support they need
- The community benefits from transparent giving practices
- Islamic principles of accountability are upheld

## Your Peace of Mind

With Zaakiyah, you can give with confidence, knowing that your Zakaat and Sadaqah are being distributed transparently and in accordance with Islamic principles.`,
	},
];

export const blogCategories = [
	'All',
	'Education',
	'Tutorial',
	'Impact',
	'Technology',
	'Transparency',
];
