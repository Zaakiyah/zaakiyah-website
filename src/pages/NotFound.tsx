import { Link } from '@tanstack/react-router';

export function NotFound() {
	return (
		<section className="relative min-h-screen bg-[#002828] text-white py-20 px-6 flex items-center justify-center">
			<div className="absolute inset-0 bg-[url('../src/assets/hero-bg.svg')] bg-cover bg-center"></div>

			<div className="max-w-2xl mx-auto text-center z-10">
				<h1 className="text-6xl font-bold mb-4">404</h1>
				<h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
				<p className="text-lg mb-8 text-gray-300">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<Link
					to="/"
					className="inline-block bg-[#00939D] hover:bg-[#007A83] text-white px-6 py-3 rounded-md transition-colors"
				>
					Return Home
				</Link>
			</div>
		</section>
	);
}
