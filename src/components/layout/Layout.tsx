import { Outlet, useRouterState } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { StructuredData } from '../common/StructuredData';
import CookieConsent from '../common/CookieConsent';
import { trackPageView } from '../../utils/analytics';

// Known valid routes
const validRoutes = ['/', '/about', '/blog', '/help', '/privacy', '/terms', '/cookies'];

export default function Layout() {
	const router = useRouterState();
	const currentPath = router.location.pathname;
	const prevPathRef = useRef<string>(currentPath);

	// Check if current path is a valid route (excluding dynamic blog post routes)
	const isValidRoute = validRoutes.includes(currentPath) || /^\/blog\/\d+$/.test(currentPath);

	// Hide nav/footer for 404 pages
	const showNavAndFooter = isValidRoute;

	// Scroll to top on route change (except when navigating to a specific section)
	useEffect(() => {
		// Only scroll if pathname actually changed (not just on mount)
		if (prevPathRef.current !== currentPath) {
			// Check if URL has a hash fragment (e.g., #get-started)
			const hasHash = window.location.hash;

			if (!hasHash) {
				// No hash fragment, scroll to top immediately
				requestAnimationFrame(() => {
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'instant',
					});
				});
			} else {
				// Has hash fragment - wait for page to render, then let browser scroll to target
				// For lazy-loaded routes, we need to wait a bit longer
				setTimeout(() => {
					const hash = window.location.hash.substring(1); // Remove the '#'
					const element = document.getElementById(hash);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				}, 100); // Small delay to ensure DOM is ready
			}
			prevPathRef.current = currentPath;

			// Track page view in Google Analytics (only if consent was given)
			// trackPageView will check if analytics is loaded before tracking
			const fullPath = currentPath + (hasHash || '');
			trackPageView(fullPath);
		}
	}, [currentPath]);

	return (
		<div className="min-h-screen">
			<StructuredData />
			{showNavAndFooter && <Navbar />}
			<Outlet />
			{showNavAndFooter && <Footer />}
			<CookieConsent />
		</div>
	);
}
