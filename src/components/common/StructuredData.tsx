import { useEffect } from 'react';

export const StructuredData: React.FC = () => {
	useEffect(() => {
		const organizationSchema = {
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Zaakiyah',
			description:
				'An innovative platform designed to revolutionize how Muslims fulfill their Zakaat obligations with confidence and Shariah compliance.',
			url: 'https://zaakiyah.com',
			logo: 'https://zaakiyah.com/zaakiyah-logo.svg',
			sameAs: [
				'https://facebook.com/zaakiyah',
				'https://twitter.com/zaakiyah',
				'https://linkedin.com/company/zaakiyah',
			],
			contactPoint: {
				'@type': 'ContactPoint',
				contactType: 'Customer Support',
				email: 'info@zaakiyah.com',
			},
		};

		const websiteSchema = {
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: 'Zaakiyah',
			url: 'https://zaakiyah.com',
			potentialAction: {
				'@type': 'SearchAction',
				target: {
					'@type': 'EntryPoint',
					urlTemplate: 'https://zaakiyah.com/search?q={search_term_string}',
				},
				'query-input': 'required name=search_term_string',
			},
		};

		// Remove existing structured data scripts
		const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
		existingScripts.forEach((script) => script.remove());

		// Add organization schema
		const orgScript = document.createElement('script');
		orgScript.type = 'application/ld+json';
		orgScript.text = JSON.stringify(organizationSchema);
		document.head.appendChild(orgScript);

		// Add website schema
		const websiteScript = document.createElement('script');
		websiteScript.type = 'application/ld+json';
		websiteScript.text = JSON.stringify(websiteSchema);
		document.head.appendChild(websiteScript);
	}, []);

	return null;
};

