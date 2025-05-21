import { Outlet } from '@tanstack/react-router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
	return (
		<div className="min-h-screen bg-[#002828]">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}
