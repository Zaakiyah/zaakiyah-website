export interface NavLink {
	path: string;
	label: string;
}

export const navLinks: NavLink[] = [
	{ path: '/about', label: 'About' },
	{ path: '/blog', label: 'Blog' },
	{ path: '/help', label: 'Help Center' },
];
