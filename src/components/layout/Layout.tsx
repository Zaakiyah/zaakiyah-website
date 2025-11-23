import { Outlet, useRouterState } from '@tanstack/react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { StructuredData } from '../common/StructuredData';

// Known valid routes
const validRoutes = ['/', '/about', '/blog', '/help', '/privacy', '/terms', '/cookies'];

export default function Layout() {
	const router = useRouterState();
	const currentPath = router.location.pathname;

	// Check if current path is a valid route (excluding dynamic blog post routes)
	const isValidRoute = validRoutes.includes(currentPath) || /^\/blog\/\d+$/.test(currentPath);

	// Hide nav/footer for 404 pages
	const showNavAndFooter = isValidRoute;

	return (
		<div className="min-h-screen">
			<StructuredData />
			{showNavAndFooter && <Navbar />}
			<Outlet />
			{showNavAndFooter && <Footer />}
		</div>
	);
}
