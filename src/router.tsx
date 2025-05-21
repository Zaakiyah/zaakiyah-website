import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import Layout from './components/layout/Layout';
import { OurProducts } from './pages/OurProducts';

const rootRoute = createRootRoute({
	component: Layout,
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

const ourProductsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/products',
	component: OurProducts,
});

// Catch-all route for 404 pages
const notFoundRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '*',
	component: NotFound,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, ourProductsRoute, notFoundRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
