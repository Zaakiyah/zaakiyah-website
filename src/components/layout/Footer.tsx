import zaakiyahLogo from '../../assets/zaakiyah-logo.svg';
import { HugeiconsIcon } from '@hugeicons/react';
import {
	Facebook01Icon,
	NewTwitterRectangleIcon,
	Linkedin01Icon,
	Mail01Icon,
} from '@hugeicons/core-free-icons';
import { Link } from '@tanstack/react-router';

const Footer = () => {
	return (
		<footer className="bg-[#002828] text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					{/* Logo and Description Column */}
					<div className="lg:col-span-1">
						<Link to="/" className="flex items-center gap-2 mb-6 group">
							<img
								src={zaakiyahLogo}
								alt="Zaakiyah"
								loading="eager"
								fetchPriority="high"
								className="h-10 w-auto"
							/>
							<span className="text-2xl font-bold text-white group-hover:text-[#00939D] transition-colors duration-300">
								Zaakiyah
							</span>
						</Link>
						<p className="text-white/70 max-w-sm text-sm leading-relaxed mb-6">
							Empowering Muslims to fulfill their Zakaat obligations with confidence,
							transparency, and Shariah compliance through innovative technology.
						</p>
						{/* Social Media Icons */}
						<div className="flex items-center gap-4">
							<a
								href="https://web.facebook.com/soliu.usman/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00939D] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
								aria-label="Facebook"
							>
								<HugeiconsIcon
									icon={Facebook01Icon}
									size={20}
									color="currentColor"
									strokeWidth={1.5}
									className="text-white/70 group-hover:text-white transition-colors duration-300"
								/>
							</a>
							<a
								href="https://x.com/devfresher"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00939D] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
								aria-label="X (Twitter)"
							>
								<HugeiconsIcon
									icon={NewTwitterRectangleIcon}
									size={20}
									color="currentColor"
									strokeWidth={1.5}
									className="text-white/70 group-hover:text-white transition-colors duration-300"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/devfresher"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00939D] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
								aria-label="LinkedIn"
							>
								<HugeiconsIcon
									icon={Linkedin01Icon}
									size={20}
									color="currentColor"
									strokeWidth={1.5}
									className="text-white/70 group-hover:text-white transition-colors duration-300"
								/>
							</a>
						</div>
					</div>

					{/* Quick Links Column */}
					<div>
						<h4 className="font-bold text-white mb-6 text-base">Quick Links</h4>
						<ul className="space-y-3">
							<li>
								<Link
									to="/"
									className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/blog"
									className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/help"
									className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
								>
									Help Center
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources Column */}
					<div>
						<h4 className="font-bold text-white mb-6 text-base">Resources</h4>
						<ul className="space-y-3">
							<li>
								<Link
									to="/help"
									className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
								>
									Help Center
								</Link>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
								>
									Zakaat Guide
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
								>
									Islamic Principles
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
								>
									Community
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Column */}
					<div>
						<h4 className="font-bold text-white mb-6 text-base">Get in Touch</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="mailto:info@zaakiyah.com"
									className="text-white/70 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
								>
									<HugeiconsIcon
										icon={Mail01Icon}
										size={16}
										color="currentColor"
										strokeWidth={1.5}
										className="group-hover:text-[#00939D] transition-colors duration-300"
									/>
									<span>info@zaakiyah.com</span>
								</a>
							</li>
							<li>
								<p className="text-white/70 text-sm">
									We're here to help you fulfill your Zakaat obligations with ease
									and confidence.
								</p>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-white/10">
					<div className="flex flex-col md:flex-row justify-between items-center gap-6">
						{/* Copyright */}
						<p className="text-white/60 text-sm text-center md:text-left">
							© {new Date().getFullYear()} Zaakiyah. All rights reserved.
						</p>

						{/* Legal Links */}
						<div className="flex items-center gap-6 flex-wrap justify-center">
							<Link
								to="/privacy"
								className="text-white/60 hover:text-white text-sm transition-colors duration-300"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-white/60 hover:text-white text-sm transition-colors duration-300"
							>
								Terms of Service
							</Link>
							<Link
								to="/cookies"
								className="text-white/60 hover:text-white text-sm transition-colors duration-300"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
