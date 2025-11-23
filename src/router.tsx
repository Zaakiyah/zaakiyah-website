import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import Layout from './components/layout/Layout';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { HelpCenter } from './pages/HelpCenter';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';

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
	component: About,
});

const blogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/blog',
	component: Blog,
});

const blogPostRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/blog/$id',
	component: BlogPost,
});

const helpCenterRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/help',
	component: HelpCenter,
});

const privacyPolicyRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/privacy',
	component: PrivacyPolicy,
});

const termsOfServiceRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/terms',
	component: TermsOfService,
});

const cookiePolicyRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/cookies',
	component: CookiePolicy,
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
