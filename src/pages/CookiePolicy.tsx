import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';

export function CookiePolicy() {
	return (
		<>
			<SEO
				title="Cookie Policy"
				description="Learn about how Zaakiyah uses cookies and similar technologies to enhance your experience on our platform."
				keywords="Cookie policy, cookies, tracking, website cookies, Zaakiyah cookies"
			/>
			<PageHeader
				title="Cookie Policy"
				subtitle="Understanding how we use cookies and similar technologies on Zaakiyah."
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-[#002828] space-y-8">
						<div>
							<p className="text-sm text-[#002828]/60 mb-6">
								Last updated:{' '}
								{new Date().toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								1. What Are Cookies?
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								Cookies are small text files that are placed on your device
								(computer, tablet, or mobile) when you visit a website. They are
								widely used to make websites work more efficiently and provide
								information to website owners.
							</p>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								Cookies allow a website to recognize your device and store some
								information about your preferences or past actions. This helps us
								provide you with a better, faster, and safer experience when using
								Zaakiyah.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								2. How We Use Cookies
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								Zaakiyah uses cookies and similar tracking technologies for the
								following purposes:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>
									<strong>Essential Cookies:</strong> Required for the Platform to
									function properly, including authentication and security
									features
								</li>
								<li>
									<strong>Performance Cookies:</strong> Help us understand how
									visitors interact with our Platform to improve functionality
								</li>
								<li>
									<strong>Functionality Cookies:</strong> Remember your
									preferences and settings to provide a personalized experience
								</li>
								<li>
									<strong>Analytics Cookies:</strong> Collect information about
									how you use our Platform to help us improve our services
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								3. Types of Cookies We Use
							</h2>

							<h3 className="text-2xl font-semibold text-[#002828] mb-3">
								3.1 Strictly Necessary Cookies
							</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								These cookies are essential for the Platform to function and cannot
								be switched off. They are usually set in response to actions you
								take, such as logging in or filling in forms. You can set your
								browser to block these cookies, but some parts of the Platform may
								not work as a result.
							</p>

							<h3 className="text-2xl font-semibold text-[#002828] mb-3 mt-6">
								3.2 Performance and Analytics Cookies
							</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								These cookies allow us to count visits and traffic sources so we can
								measure and improve the performance of our Platform. They help us
								understand which pages are most popular and how visitors move around
								the site.
							</p>

							<h3 className="text-2xl font-semibold text-[#002828] mb-3 mt-6">
								3.3 Functionality Cookies
							</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								These cookies enable the Platform to provide enhanced functionality
								and personalization. They may be set by us or by third-party
								providers whose services we have added to our pages.
							</p>

							<h3 className="text-2xl font-semibold text-[#002828] mb-3 mt-6">
								3.4 Targeting/Advertising Cookies
							</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								These cookies may be set through our Platform by our advertising
								partners. They may be used to build a profile of your interests and
								show you relevant content on other sites.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								4. Third-Party Cookies
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								In addition to our own cookies, we may also use various third-party
								cookies to report usage statistics, deliver advertisements, and
								provide other services. These third parties may include:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>Analytics service providers (e.g., Google Analytics)</li>
								<li>Payment processors</li>
								<li>Security and fraud prevention services</li>
								<li>
									Social media platforms (if you interact with social features)
								</li>
							</ul>
							<p className="text-lg text-[#002828]/70 leading-relaxed mt-4">
								These third parties may use cookies to collect information about
								your online activities across different websites. We do not control
								these third-party cookies, and you should review their privacy
								policies.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								5. Managing Your Cookie Preferences
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								You have the right to accept or reject cookies. Most web browsers
								automatically accept cookies, but you can usually modify your
								browser settings to decline cookies if you prefer. However, this may
								prevent you from taking full advantage of the Platform.
							</p>
							<h3 className="text-2xl font-semibold text-[#002828] mb-3">
								Browser Settings
							</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								You can control cookies through your browser settings. Here are
								links to instructions for popular browsers:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>
									<a
										href="https://support.google.com/chrome/answer/95647"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#00939D] hover:underline"
									>
										Google Chrome
									</a>
								</li>
								<li>
									<a
										href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#00939D] hover:underline"
									>
										Mozilla Firefox
									</a>
								</li>
								<li>
									<a
										href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#00939D] hover:underline"
									>
										Safari
									</a>
								</li>
								<li>
									<a
										href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#00939D] hover:underline"
									>
										Microsoft Edge
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								6. Cookies We Use
							</h2>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-[#E0F2F2] mt-4">
									<thead>
										<tr className="bg-[#E0F2F2]/30">
											<th className="border border-[#E0F2F2] px-4 py-3 text-left text-[#002828] font-semibold">
												Cookie Name
											</th>
											<th className="border border-[#E0F2F2] px-4 py-3 text-left text-[#002828] font-semibold">
												Purpose
											</th>
											<th className="border border-[#E0F2F2] px-4 py-3 text-left text-[#002828] font-semibold">
												Duration
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="border border-[#E0F2F2] px-4 py-3 text-[#002828]/70">
												session_id
											</td>
											<td className="border border-[#E0F2F2] px-4 py-3 text-[#002828]/70">
												Maintains your session when logged in
											</td>
											<td className="border border-[#E0F2F2] px-4 py-3 text-[#002828]/70">
												Session
											</td>
										</tr>
										<tr>
											<td className="border border-[#E0F2F2] px-4 py-3 text-[#002828]/70">
												preferences
											</td>
											<td className="border border-[#E0F2F2] px-4 py-3 text-[#002828]/70">
												Stores your user preferences
											</td>
											<td className="border border-[#E0F2F2] px-4 py-3 text-[#002828]/70">
												1 year
											</td>
										</tr>
										<tr>
											<td className="border border-[#E0F2F2] px-4 py-3 text-[#002828]/70">
												analytics
											</td>
											<td className="border border-[#E0F2F2] px-4 py-3 text-[#002828]/70">
												Tracks website usage and performance
											</td>
											<td className="border border-[#E0F2F2] px-4 py-3 text-[#002828]/70">
												2 years
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								7. Do Not Track Signals
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								Some browsers include a "Do Not Track" (DNT) feature that signals to
								websites you visit that you do not want to have your online activity
								tracked. Currently, there is no standard for how DNT signals should
								be interpreted. As a result, our Platform does not currently respond
								to DNT signals.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								8. Updates to This Cookie Policy
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								We may update this Cookie Policy from time to time to reflect
								changes in our practices or for other operational, legal, or
								regulatory reasons. We will notify you of any material changes by
								posting the updated Cookie Policy on this page and updating the
								"Last updated" date.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								9. Contact Us
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								If you have any questions about our use of cookies or this Cookie
								Policy, please contact us at:
							</p>
							<div className="bg-[#E0F2F2]/30 rounded-lg p-6 border border-[#00939D]/20">
								<p className="text-lg text-[#002828] font-semibold mb-2">
									Zaakiyah Privacy Team
								</p>
								<p className="text-lg text-[#002828]/70">
									Email:{' '}
									<a
										href="mailto:privacy@zaakiyah.com"
										className="text-[#00939D] hover:underline"
									>
										privacy@zaakiyah.com
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
