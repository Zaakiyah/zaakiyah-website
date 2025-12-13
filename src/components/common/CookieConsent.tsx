import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import Button from './Button';

const COOKIE_CONSENT_KEY = 'zaakiyah_cookie_consent';
const CONSENT_EXPIRY_DAYS = 365; // Consent expires after 1 year

interface CookieConsentState {
	accepted: boolean;
	timestamp: number;
}

const CookieConsent: React.FC = () => {
	const [showBanner, setShowBanner] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		// Check if user has already given consent
		const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

		if (!consent) {
			// Show banner if no consent exists
			setTimeout(() => {
				setShowBanner(true);
				setIsAnimating(true);
			}, 500); // Small delay for better UX
		} else {
			// Check if consent has expired
			try {
				const consentData: CookieConsentState = JSON.parse(consent);
				const consentDate = new Date(consentData.timestamp);
				const expiryDate = new Date(consentDate);
				expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);

				if (new Date() > expiryDate) {
					// Consent expired, show banner again
					localStorage.removeItem(COOKIE_CONSENT_KEY);
					setTimeout(() => {
						setShowBanner(true);
						setIsAnimating(true);
					}, 500);
				} else if (consentData.accepted) {
					// Consent is valid, load analytics
					loadAnalytics();
				}
			} catch (error) {
				// Invalid consent data, show banner
				localStorage.removeItem(COOKIE_CONSENT_KEY);
				setTimeout(() => {
					setShowBanner(true);
					setIsAnimating(true);
				}, 500);
			}
		}
	}, []);

	const saveConsent = (accepted: boolean) => {
		const consentData: CookieConsentState = {
			accepted,
			timestamp: Date.now(),
		};
		localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));

		if (accepted) {
			loadAnalytics();
		}

		// Hide banner with animation
		setIsAnimating(false);
		setTimeout(() => {
			setShowBanner(false);
		}, 300);
	};

	const loadAnalytics = () => {
		// Load analytics only after consent
		if (typeof window !== 'undefined') {
			// Dynamically import analytics to avoid loading before consent
			import('../../utils/analytics').then(({ initAnalytics }) => {
				initAnalytics();
			});
		}
	};

	const handleAccept = () => {
		saveConsent(true);
	};

	const handleReject = () => {
		saveConsent(false);
	};

	const handleClose = () => {
		// Close without saving preference (user can change later in settings)
		setIsAnimating(false);
		setTimeout(() => {
			setShowBanner(false);
		}, 300);
	};

	if (!showBanner) {
		return null;
	}

	return (
		<div
			className={`fixed bottom-0 left-0 right-0 z-50 px-3 py-3 bg-white border-t border-primary-500 shadow-xl transition-transform duration-300 ${
				isAnimating ? 'translate-y-0' : 'translate-y-full'
			}`}
			role="dialog"
			aria-labelledby="cookie-consent-title"
			aria-describedby="cookie-consent-description"
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row items-start md:items-center gap-3 relative">
					{/* Close button - desktop only */}
					<button
						onClick={handleClose}
						className="hidden md:block absolute top-0 right-0 p-1.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900"
						aria-label="Close cookie banner"
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>

					{/* Content */}
					<div className="flex-1 pr-6 md:pr-8">
						<h3
							id="cookie-consent-title"
							className="text-sm font-semibold text-[#002828] mb-1.5"
						>
							We use cookies to enhance your experience
						</h3>
						<p
							id="cookie-consent-description"
							className="text-xs text-[#002828]/70 leading-relaxed"
						>
							We use cookies and similar technologies to analyze site usage and
							improve our services. By clicking "Accept", you consent to our use of
							cookies. Learn more in our{' '}
							<Link
								to="/cookies"
								className="text-primary-600 hover:text-primary-700 font-semibold underline underline-offset-2"
							>
								Cookie Policy
							</Link>
							.
						</p>
					</div>

					{/* Actions */}
					<div className="flex items-center gap-2 w-full md:w-auto shrink-0">
						<Button
							variant="outline"
							size="small"
							onClick={handleReject}
							className="flex-1 md:flex-none border-slate-300 text-slate-700 hover:bg-slate-50 text-xs"
						>
							Reject
						</Button>
						<Button
							variant="primary"
							size="small"
							onClick={handleAccept}
							className="flex-1 md:flex-none bg-primary-500 hover:bg-primary-600 text-white text-xs"
						>
							Accept
						</Button>

						{/* Close button - mobile */}
						<button
							onClick={handleClose}
							className="md:hidden p-1.5 rounded-lg hover:bg-slate-100 transition-colors shrink-0 text-slate-600 hover:text-slate-900"
							aria-label="Close cookie banner"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
