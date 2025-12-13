/**
 * Analytics utility
 * Only loads analytics if user has consented to cookies
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initialize Google Analytics
 * Should only be called after user consent
 */
export const initAnalytics = () => {
	if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) {
		return;
	}

	// Check if analytics script already loaded
	if (window.gtag) {
		return;
	}

	// Load Google Analytics script
	const script1 = document.createElement('script');
	script1.async = true;
	script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
	document.head.appendChild(script1);

	const script2 = document.createElement('script');
	script2.innerHTML = `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${GA_MEASUREMENT_ID}', {
			page_path: window.location.pathname,
		});
	`;
	document.head.appendChild(script2);
};

/**
 * Track page view
 */
export const trackPageView = (path: string) => {
	if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
		window.gtag('config', GA_MEASUREMENT_ID, {
			page_path: path,
		});
	}
};

/**
 * Track custom event
 */
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
};

// Extend Window interface for TypeScript
declare global {
	interface Window {
		gtag?: (command: string, targetId: string, config?: Record<string, any>) => void;
		dataLayer?: any[];
	}
}
