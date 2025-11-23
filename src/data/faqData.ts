export interface FAQItem {
	question: string;
	answer: string;
	category?: string;
}

export const faqItems: FAQItem[] = [
	{
		question: 'How do I calculate my Zakaat using Zaakiyah?',
		answer: 'Once Zaakiyah launches, you will be able to log into your account and navigate to the Zakaat Calculator. You can enter your total wealth including cash, gold, silver, investments, and business assets. The calculator will automatically compute 2.5% of your eligible wealth according to Shariah principles. You will also have the option to link your bank account for automatic calculation.',
		category: 'Zakaat Calculation',
	},
	{
		question: 'Is my financial information secure on Zaakiyah?',
		answer: 'Yes, Zaakiyah will implement bank-level encryption to protect all your financial data. We are committed to securing necessary licenses and insurance coverage to provide the highest level of security. Your information will never be shared with third parties without your explicit consent, and we will maintain strict data protection protocols.',
		category: 'Security & Privacy',
	},
	{
		question: 'How do I make a donation through Zaakiyah?',
		answer: 'When Zaakiyah launches, making a donation will be simple and secure. You will be able to go to the "Give Donations" section, select a verified campaign or cause, enter the amount you wish to donate, and complete the payment through our secure payment gateway. You will be able to track your donation and see its impact in real-time through your dashboard.',
		category: 'Making Donations',
	},
	{
		question: 'What is the difference between Zakaat and Sadaqah?',
		answer: 'Zakaat is an obligatory charity (2.5% of wealth) that must be given annually by eligible Muslims. Sadaqah is voluntary charity with no fixed amount or frequency. Both can be given through Zaakiyah, and we ensure proper distribution according to Islamic principles.',
		category: 'General Questions',
	},
	{
		question: 'Can I request assistance through Zaakiyah?',
		answer: 'Yes, once Zaakiyah launches, eligible individuals will be able to apply for assistance through our platform. You will be able to go to the "Request Assistance" section, fill out the application form with required documentation, and our team will review your application. All recipients will be thoroughly verified to ensure they meet the criteria for receiving Zakaat or Sadaqah according to Islamic principles.',
		category: 'General Questions',
	},
	{
		question: 'Do I need to link my bank account to use Zaakiyah?',
		answer: 'No, linking a bank account is optional. You can manually enter your wealth information for Zakaat calculation. However, linking your account provides a more streamlined experience and ensures accurate calculations based on your current financial data.',
		category: 'Account Management',
	},
	{
		question: 'How do I update my account information?',
		answer: 'Once Zaakiyah is available, you will be able to update your account information by going to Settings in your dashboard. From there, you can change your personal details, contact information, password, and notification preferences. All changes will be saved immediately and securely.',
		category: 'Account Management',
	},
	{
		question: 'What payment methods will Zaakiyah accept?',
		answer: 'Zaakiyah will accept various payment methods including bank transfers, debit cards, and mobile money. All transactions will be processed securely through our trusted payment partners. You will be able to add and manage payment methods in your account settings for a seamless giving experience.',
		category: 'Making Donations',
	},
	{
		question: 'How can I track the impact of my donations?',
		answer: 'Once Zaakiyah launches, after making a donation, you will be able to track its impact through your dashboard. We will provide real-time updates on how your contributions are being used, including recipient information (with privacy protection), distribution reports, and impact stories to show the positive change your generosity creates.',
		category: 'Making Donations',
	},
];
