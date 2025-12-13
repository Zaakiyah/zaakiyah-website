import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import type { ReactElement } from 'react';
import Layout from './components/layout/Layout';
import { Home } from './pages/Home'; // Keep Home eager for initial load
import { NotFound } from './pages/NotFound'; // Keep 404 eager for immediate error display

// Lazy load non-critical pages for better initial load performance
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Blog = lazy(() => import('./pages/Blog').then((module) => ({ default: module.Blog })));
const BlogPost = lazy(() =>
	import('./pages/BlogPost').then((module) => ({ default: module.BlogPost }))
);
const HelpCenter = lazy(() =>
	import('./pages/HelpCenter').then((module) => ({ default: module.HelpCenter }))
);
const PrivacyPolicy = lazy(() =>
	import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy }))
);
const TermsOfService = lazy(() =>
	import('./pages/TermsOfService').then((module) => ({ default: module.TermsOfService }))
);
const CookiePolicy = lazy(() =>
	import('./pages/CookiePolicy').then((module) => ({ default: module.CookiePolicy }))
);

// Loading fallback component
const PageLoader = () => (
	<div className="min-h-screen flex items-center justify-center">
		<div className="text-center">
			<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#00939D] border-r-transparent"></div>
			<p className="mt-4 text-[#002828]/70">Loading...</p>
		</div>
	</div>
);

// Wrapper component for lazy-loaded routes
const LazyRouteWrapper = ({
	Component,
}: {
	Component: React.LazyExoticComponent<() => ReactElement>;
}) => (
	<Suspense fallback={<PageLoader />}>
		<Component />
	</Suspense>
);

const rootRoute = createRootRoute({
	component: Layout,
	notFoundComponent: NotFound,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home,
});

const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/about',
	component: () => <LazyRouteWrapper Component={About} />,
});

const blogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/blog',
	component: () => <LazyRouteWrapper Component={Blog} />,
});

const blogPostRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/blog/$id',
	component: () => <LazyRouteWrapper Component={BlogPost} />,
});

const helpCenterRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/help',
	component: () => <LazyRouteWrapper Component={HelpCenter} />,
});

const privacyPolicyRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/privacy',
	component: () => <LazyRouteWrapper Component={PrivacyPolicy} />,
});

const termsOfServiceRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/terms',
	component: () => <LazyRouteWrapper Component={TermsOfService} />,
});

const cookiePolicyRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/cookies',
	component: () => <LazyRouteWrapper Component={CookiePolicy} />,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	aboutRoute,
	blogRoute,
	blogPostRoute,
	helpCenterRoute,
	privacyPolicyRoute,
	termsOfServiceRoute,
	cookiePolicyRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
