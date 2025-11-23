import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';

export function TermsOfService() {
	return (
		<>
			<SEO
				title="Terms of Service"
				description="Read Zaakiyah's Terms of Service. Understand the rules and guidelines for using our Zakaat calculation and donation platform."
				keywords="Terms of service, user agreement, Zaakiyah terms, platform rules, service terms"
			/>
			<PageHeader
				title="Terms of Service"
				subtitle="Please read these terms carefully before using Zaakiyah's services."
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-[#002828] space-y-8">
						<div>
							<p className="text-sm text-[#002828]/60 mb-6">
								Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">1. Acceptance of Terms</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								By accessing or using Zaakiyah ("the Platform", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.
							</p>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								These Terms constitute a legally binding agreement between you and Zaakiyah. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">2. Description of Service</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								Zaakiyah is an Islamic financial technology platform that provides:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>Zakaat calculation tools and resources</li>
								<li>Secure donation processing and distribution</li>
								<li>Educational content about Zakaat and Islamic giving</li>
								<li>Transparency and tracking features for donations</li>
							</ul>
							<p className="text-lg text-[#002828]/70 leading-relaxed mt-4">
								Our services are designed to help Muslims fulfill their Zakaat obligations in accordance with Shariah principles.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">3. User Accounts</h2>
							<h3 className="text-2xl font-semibold text-[#002828] mb-3">3.1 Account Creation</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								To use certain features of our Platform, you must create an account. You agree to:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>Provide accurate, current, and complete information</li>
								<li>Maintain and update your information to keep it accurate</li>
								<li>Maintain the security of your account credentials</li>
								<li>Accept responsibility for all activities under your account</li>
							</ul>

							<h3 className="text-2xl font-semibold text-[#002828] mb-3 mt-6">3.2 Account Security</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">4. Acceptable Use</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								You agree not to use the Platform to:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>Violate any applicable laws or regulations</li>
								<li>Infringe upon the rights of others</li>
								<li>Transmit any harmful, offensive, or illegal content</li>
								<li>Attempt to gain unauthorized access to the Platform or other accounts</li>
								<li>Interfere with or disrupt the Platform's operation or security</li>
								<li>Use automated systems to access the Platform without permission</li>
								<li>Impersonate any person or entity or misrepresent your affiliation</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">5. Zakaat Calculations and Donations</h2>
							<h3 className="text-2xl font-semibold text-[#002828] mb-3">5.1 Calculation Accuracy</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								While we strive to provide accurate Zakaat calculation tools, you acknowledge that:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>Calculations are provided for informational purposes</li>
								<li>You should consult with qualified Islamic scholars for complex situations</li>
								<li>We are not liable for decisions made based on our calculations</li>
							</ul>

							<h3 className="text-2xl font-semibold text-[#002828] mb-3 mt-6">5.2 Donations</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								When making donations through our Platform:
							</p>
							<ul className="list-disc list-inside space-y-2 text-lg text-[#002828]/70 ml-4">
								<li>All donations are final and non-refundable</li>
								<li>Donations are distributed to verified beneficiaries in accordance with Shariah principles</li>
								<li>We charge processing fees as disclosed at the time of donation</li>
								<li>You are responsible for ensuring you have sufficient funds</li>
							</ul>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">6. Intellectual Property</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								The Platform and its content, including but not limited to text, graphics, logos, software, and designs, are the property of Zaakiyah and are protected by copyright, trademark, and other intellectual property laws.
							</p>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								You may not reproduce, distribute, modify, or create derivative works from any content on the Platform without our express written permission.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">7. Disclaimers and Limitations of Liability</h2>
							<h3 className="text-2xl font-semibold text-[#002828] mb-3">7.1 Service Availability</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								We strive to provide reliable service but do not guarantee that the Platform will be available at all times, uninterrupted, or error-free. We may suspend or discontinue the Platform at any time.
							</p>

							<h3 className="text-2xl font-semibold text-[#002828] mb-3 mt-6">7.2 Limitation of Liability</h3>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								To the maximum extent permitted by law, Zaakiyah shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Platform.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">8. Indemnification</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								You agree to indemnify, defend, and hold harmless Zaakiyah and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of the Platform, violation of these Terms, or infringement of any rights of another.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">9. Termination</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								We may terminate or suspend your account and access to the Platform immediately, without prior notice, for any reason, including if you breach these Terms.
							</p>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								Upon termination, your right to use the Platform will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">10. Governing Law</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts of Nigeria.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">11. Changes to Terms</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed">
								We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on the Platform and updating the "Last updated" date. Your continued use of the Platform after such changes constitutes acceptance of the modified Terms.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-[#002828] mb-4">12. Contact Information</h2>
							<p className="text-lg text-[#002828]/70 leading-relaxed mb-4">
								If you have any questions about these Terms of Service, please contact us at:
							</p>
							<div className="bg-[#E0F2F2]/30 rounded-lg p-6 border border-[#00939D]/20">
								<p className="text-lg text-[#002828] font-semibold mb-2">Zaakiyah Legal Team</p>
								<p className="text-lg text-[#002828]/70">
									Email: <a href="mailto:legal@zaakiyah.com" className="text-[#00939D] hover:underline">legal@zaakiyah.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

