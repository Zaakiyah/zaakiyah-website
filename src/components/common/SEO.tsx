import { useEffect } from 'react';

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	ogImage?: string;
	ogType?: string;
	canonicalUrl?: string;
}

const defaultTitle = 'Zaakiyah - Empowering Muslims to Fulfill Zakaat Obligations';
const defaultDescription =
	'Zaakiyah is an innovative platform designed to revolutionize how Muslims fulfill their Zakaat obligations. Calculate, donate, and track your Zakaat with confidence and Shariah compliance.';
const defaultKeywords =
	'Zakaat, Sadaqah, Islamic giving, Zakaat calculator, Muslim charity, Islamic finance, Shariah compliant, Nigeria, Islamic donations';
const siteUrl = 'https://zaakiyah.com'; // Verified domain with SSL

export const SEO: React.FC<SEOProps> = ({
	title,
	description = defaultDescription,
	keywords = defaultKeywords,
	ogImage = `${siteUrl}/og-image.jpg`, // You'll need to create this
	ogType = 'website',
	canonicalUrl,
}) => {
	const fullTitle = title ? `${title} | Zaakiyah` : defaultTitle;
	const url = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : siteUrl);

	useEffect(() => {
		// Update document title
		document.title = fullTitle;

		// Update or create meta tags
		const updateMetaTag = (name: string, content: string, isProperty = false) => {
			const attribute = isProperty ? 'property' : 'name';
			let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

			if (!element) {
				element = document.createElement('meta');
				element.setAttribute(attribute, name);
				document.head.appendChild(element);
			}

			element.setAttribute('content', content);
		};

		// Basic meta tags
		updateMetaTag('description', description);
		updateMetaTag('keywords', keywords);

		// Open Graph tags
		updateMetaTag('og:title', fullTitle, true);
		updateMetaTag('og:description', description, true);
		updateMetaTag('og:image', ogImage, true);
		updateMetaTag('og:url', url, true);
		updateMetaTag('og:type', ogType, true);
		updateMetaTag('og:site_name', 'Zaakiyah', true);

		// Twitter Card tags
		updateMetaTag('twitter:card', 'summary_large_image');
		updateMetaTag('twitter:title', fullTitle);
		updateMetaTag('twitter:description', description);
		updateMetaTag('twitter:image', ogImage);

		// Canonical URL
		let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
		if (!canonicalLink) {
			canonicalLink = document.createElement('link');
			canonicalLink.setAttribute('rel', 'canonical');
			document.head.appendChild(canonicalLink);
		}
		canonicalLink.setAttribute('href', url);
	}, [fullTitle, description, keywords, ogImage, ogType, url]);

	return null;
};
