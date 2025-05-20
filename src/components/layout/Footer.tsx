import zaakiyahLogo from '../../assets/zaakiyah-logo.svg'; // Assuming the logo is here
import { HugeiconsIcon } from '@hugeicons/react';
import {
	Facebook01Icon,
	NewTwitterRectangleIcon,
	Linkedin01Icon,
} from '@hugeicons/core-free-icons';

const Footer = () => {
	return (
		<footer className="bg-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Footer Links Grid */}
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
					{/* Logo and Description Column */}
					<div className="md:col-span-2">
						<div className="flex items-center gap-2 mb-4">
							<img src={zaakiyahLogo} alt="Zaakiyah" className="w-15 h-15" />
							<span className="text-2xl text-[#00939D] font-bold">Zaakiyah</span>
						</div>
						<p className="text-gray-600 max-w-sm font-medium text-lg">
							Encouraging you to fulfill your Islamic rights with a smart system,
							innovative tool and a secure solution
						</p>
					</div>

					{/* Navigation Links Columns */}
					<div className="md:col-span-3 pt-4">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							{/* About Column */}
							<div className="text-sm">
								<h4 className="font-semibold mb-4">About</h4>
								<ul className="space-y-2 font-medium">
									<li>
										<a
											href="/our-story"
											className="text-gray-600 hover:text-gray-900"
										>
											Our Story
										</a>
									</li>
									<li>
										<a
											href="/blog"
											className="text-gray-600 hover:text-gray-900"
										>
											Blog
										</a>
									</li>
									<li>
										<a
											href="/contact"
											className="text-gray-600 hover:text-gray-900"
										>
											Contact Us
										</a>
									</li>
								</ul>
							</div>
							{/* Product Column */}
							<div className="text-sm">
								<h4 className="font-semibold mb-4">Product</h4>
								<ul className="space-y-2 font-medium">
									<li>
										<a
											href="/zakaat-calculator"
											className="text-gray-600 hover:text-gray-900"
										>
											Zakaat Calculator
										</a>
									</li>
									<li>
										<a
											href="/sadaqah-donation"
											className="text-gray-600 hover:text-gray-900"
										>
											Sadaqah Donation
										</a>
									</li>
									<li>
										<a
											href="/apply"
											className="text-gray-600 hover:text-gray-900"
										>
											Applying for Donation
										</a>
									</li>
								</ul>
							</div>
							{/* Resources Column */}
							<div className="text-sm">
								<h4 className="font-semibold mb-4">Resources</h4>
								<ul className="space-y-2 font-medium">
									<li>
										<a
											href="/help-center"
											className="text-gray-600 hover:text-gray-900"
										>
											Help Center
										</a>
									</li>
									<li>
										<a
											href="/community"
											className="text-gray-600 hover:text-gray-900"
										>
											Community
										</a>
									</li>
									<li>
										<a
											href="/partners"
											className="text-gray-600 hover:text-gray-900"
										>
											Partners
										</a>
									</li>
								</ul>
							</div>
							{/* Support Column */}
							<div className="text-sm">
								<h4 className="font-semibold mb-4">Support</h4>
								<ul className="space-y-2 font-medium">
									<li>
										<a
											href="/customer-support"
											className="text-gray-600 hover:text-gray-900"
										>
											Customer Support
										</a>
									</li>
									<li>
										<a
											href="/faq"
											className="text-gray-600 hover:text-gray-900"
										>
											FAQ
										</a>
									</li>
									<li>
										<a
											href="/security"
											className="text-gray-600 hover:text-gray-900"
										>
											Security & Privacy
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-16 pt-8 border-t border-gray-300">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex items-center gap-4 font-medium">
							<a href="/privacy" className="text-gray-600 hover:text-gray-900">
								Privacy Policy
							</a>
							<a href="/cookie" className="text-gray-600 hover:text-gray-900">
								Cookie Policy
							</a>
							<a href="/legal" className="text-gray-600 hover:text-gray-900">
								Legal
							</a>
						</div>
						<p className="text-gray-600 font-medium">
							© {new Date().getFullYear()} Zaakiyah Incorporated. All rights reserved.
						</p>
						{/* Social Media Icons */}
						<div className="flex items-center gap-4">
							<a href="#" className="text-gray-600 hover:text-gray-900">
								<span className="sr-only">Facebook</span>
								<HugeiconsIcon
									icon={Facebook01Icon}
									size={24}
									color="currentColor"
									strokeWidth={1.5}
								/>
							</a>
							<a href="#" className="text-gray-600 hover:text-gray-900">
								<span className="sr-only">Twitter</span>
								<HugeiconsIcon
									icon={NewTwitterRectangleIcon}
									size={24}
									color="currentColor"
									strokeWidth={1.5}
								/>
							</a>
							<a href="#" className="text-gray-600 hover:text-gray-900">
								<span className="sr-only">Linkedin</span>
								<HugeiconsIcon
									icon={Linkedin01Icon}
									size={24}
									color="currentColor"
									strokeWidth={1.5}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
