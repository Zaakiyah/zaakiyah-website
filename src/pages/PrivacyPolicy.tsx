import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';

export function PrivacyPolicy() {
	return (
		<>
			<SEO
				title="Privacy Policy"
				description="Learn how Zaakiyah protects your personal information and privacy. Our commitment to data security and transparency."
				keywords="Privacy policy, data protection, user privacy, Zaakiyah privacy, personal information"
			/>
			<PageHeader
				title="Privacy Policy"
				subtitle="Your privacy is important to us. Learn how we protect and handle your personal information."
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
								1. Introduction
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								Welcome to Zaakiyah. We are committed to protecting your privacy and
								ensuring the security of your personal information. This Privacy
								Policy explains how we collect, use, disclose, and safeguard your
								information when you use our platform.
							</p>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								By using Zaakiyah, you agree to the collection and use of
								information in accordance with this policy. If you do not agree with
								our policies and practices, please do not use our services.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								2. Information We Collect
							</h2>
							<h3 className="text-2xl font-semibold text-[#002828] mb-3">
								2.1 Personal Information
							</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								We may collect personal information that you provide directly to us,
								including:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>Name and contact information (email address, phone number)</li>
								<li>Account credentials and authentication information</li>
								<li>
									Financial information necessary for Zakaat calculations and
									donations
								</li>
								<li>
									Payment information (processed securely through third-party
									payment processors)
								</li>
								<li>Communication preferences and correspondence</li>
							</ul>

							<h3 className="text-2xl font-semibold text-[#002828] mb-3 mt-6">
								2.2 Automatically Collected Information
							</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								When you use our platform, we may automatically collect certain
								information, including:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>
									Device information (IP address, browser type, operating system)
								</li>
								<li>Usage data (pages visited, time spent, features used)</li>
								<li>Cookies and similar tracking technologies</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								3. How We Use Your Information
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								We use the information we collect for various purposes, including:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>Providing, maintaining, and improving our services</li>
								<li>Processing Zakaat calculations and facilitating donations</li>
								<li>Communicating with you about your account and our services</li>
								<li>
									Sending important updates, security alerts, and administrative
									messages
								</li>
								<li>Responding to your inquiries and providing customer support</li>
								<li>
									Detecting, preventing, and addressing technical issues and
									security threats
								</li>
								<li>
									Complying with legal obligations and Shariah compliance
									requirements
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								4. Information Sharing and Disclosure
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								We do not sell your personal information. We may share your
								information only in the following circumstances:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>With your explicit consent</li>
								<li>
									With trusted service providers who assist in operating our
									platform (under strict confidentiality agreements)
								</li>
								<li>
									To comply with legal obligations, court orders, or government
									requests
								</li>
								<li>
									To protect our rights, privacy, safety, or property, or that of
									our users
								</li>
								<li>
									In connection with a business transfer (merger, acquisition,
									etc.)
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								5. Data Security
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								We implement industry-standard security measures to protect your
								personal information, including:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>Encryption of sensitive data in transit and at rest</li>
								<li>Secure authentication and access controls</li>
								<li>Regular security assessments and updates</li>
								<li>Compliance with relevant data protection regulations</li>
							</ul>
							<p className="text-lg text-[#002828]/70 leading-relaxed mt-4">
								However, no method of transmission over the internet or electronic
								storage is 100% secure. While we strive to protect your information,
								we cannot guarantee absolute security.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								6. Your Rights and Choices
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								You have the right to:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>Access and review your personal information</li>
								<li>Request correction of inaccurate or incomplete information</li>
								<li>
									Request deletion of your personal information (subject to legal
									and operational requirements)
								</li>
								<li>Opt-out of certain communications and marketing materials</li>
								<li>Manage cookie preferences through your browser settings</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								7. Data Retention
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								We retain your personal information for as long as necessary to
								fulfill the purposes outlined in this Privacy Policy, unless a
								longer retention period is required or permitted by law. When we no
								longer need your information, we will securely delete or anonymize
								it.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								8. Children's Privacy
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								Our services are not intended for individuals under the age of 18.
								We do not knowingly collect personal information from children. If
								you believe we have collected information from a child, please
								contact us immediately.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								9. Changes to This Privacy Policy
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								We may update this Privacy Policy from time to time. We will notify
								you of any changes by posting the new Privacy Policy on this page
								and updating the "Last updated" date. You are advised to review this
								Privacy Policy periodically for any changes.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">
								10. Contact Us
							</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								If you have any questions, concerns, or requests regarding this
								Privacy Policy or our data practices, please contact us at:
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
